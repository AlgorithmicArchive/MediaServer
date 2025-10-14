using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MediaServer.Models;
using MediaServer.Models.Entities;
using System.Security.Cryptography;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace MediaServer.Controllers;

[Authorize(Roles = "User")]
public class UserController(ILogger<UserController> logger, MediaServerContext dbContext, IWebHostEnvironment _env) : Controller
{

    private readonly ILogger<UserController> _logger = logger;
    private readonly MediaServerContext _dbContext = dbContext;
    private readonly IWebHostEnvironment _env = _env;

    [HttpGet]
    public async Task<IActionResult> GetMedia()
    {
        try
        {
            await DownloadFromUrlAsync("https://IMDb.iamidiotareyoutoo.com/title/tt0145487", "C:\\Temp\\imdb_page.html");
            var media = await _dbContext.Media
                .Where(m => (bool)m.IsActive!)
                .Select(m => new
                {
                    m.MediaId,
                    m.Title,
                    m.Description,
                    m.Type,
                    m.ReleaseYear,
                    m.Rating,
                    m.ThumbnailPath,
                    m.TrailerPath
                })
                .ToListAsync();
            return Ok(media);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error fetching media");
            return StatusCode(500, new { error = "Internal server error" });
        }
    }

    public static async Task DownloadFromUrlAsync(string url, string savePath)
    {
        using HttpClient client = new();

        try
        {
            // Fetch the content from the URL
            HttpResponseMessage response = await client.GetAsync(url);
            response.EnsureSuccessStatusCode();

            // Read the content as a byte array
            byte[] content = await response.Content.ReadAsByteArrayAsync();

            // Save to file
            await System.IO.File.WriteAllBytesAsync(savePath, content);

            Console.WriteLine($"Downloaded content saved to {savePath}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error downloading content: {ex.Message}");
        }
    }

    public async Task<IActionResult> GetMediaDetails(int mediaId)
    {
        var media = await _dbContext.Media
            .Include(m => m.MovieFiles)
            .Include(m => m.SeriesSeasons)
                .ThenInclude(s => s.SeriesEpisodes)
            .FirstOrDefaultAsync(m => m.MediaId == mediaId);

        if (media == null)
            return NotFound(new { error = "Media not found" });

        var result = new
        {
            basePath = _env.WebRootPath,
            media.MediaId,
            media.Title,
            media.Description,
            Type = media.Type.ToLowerInvariant(),
            media.ReleaseYear,
            media.Rating,
            media.ThumbnailPath,
            media.TrailerPath,
            seasons = media.Type.Equals("series", StringComparison.OrdinalIgnoreCase)
                ? media.SeriesSeasons
                    .OrderBy(s => s.SeasonNumber)
                    .Select(s => new
                    {
                        s.SeasonId,
                        s.SeasonNumber,
                        s.Title,
                        episodes = s.SeriesEpisodes
                            .OrderBy(e => e.EpisodeNumber)
                            .Select(e => new
                            {
                                e.EpisodeId,
                                e.EpisodeNumber,
                                e.Title,
                                StreamUrl = e.FilePath
                            })
                            .ToList()
                    })
                    .ToList()
                : null,
            movieFiles = media.Type.Equals("movie", StringComparison.OrdinalIgnoreCase)
                ? media.MovieFiles
                    .Select(f => new
                    {
                        f.MovieFileId,
                        f.FileName,
                        StreamUrl = f.FilePath
                    })
                    .ToList()
                : null
        };

        return Ok(result);
    }

    [HttpGet]
    public async Task<IActionResult> StreamMedia(string filePath)
    {
        if (string.IsNullOrWhiteSpace(filePath))
            return BadRequest(new { error = "Invalid file path" });

        try
        {
            var safePath = filePath.Replace("/", Path.DirectorySeparatorChar.ToString())
                                  .Replace("\\", Path.DirectorySeparatorChar.ToString());
            if (safePath.Contains("..") || Path.IsPathRooted(safePath))
                return BadRequest(new { error = "Invalid file path" });

            var fullPath = Path.Combine(_env.WebRootPath, safePath);

            if (!System.IO.File.Exists(fullPath))
                return NotFound(new { error = "File not found" });

            var ext = Path.GetExtension(fullPath).ToLowerInvariant();

            if (ext == ".mp4")
            {
                var stream = new FileStream(fullPath, FileMode.Open, FileAccess.Read, FileShare.Read);
                Response.Headers.Add("Accept-Ranges", "bytes");
                return File(stream, "video/mp4", enableRangeProcessing: true);
            }

            if (!IsFFmpegAvailable())
                return StatusCode(500, new { error = "FFmpeg is not available on the server" });

            // Check codecs with ffprobe (simplified, requires implementation)
            bool canCopyCodecs = await CanCopyCodecs(fullPath); // Implement this
            var ffmpegArgs = canCopyCodecs
                ? $"-i \"{fullPath}\" -f mp4 -c:v copy -c:a copy -movflags frag_keyframe+empty_moov pipe:1"
                : $"-i \"{fullPath}\" -f mp4 -vcodec libx264 -preset ultrafast -acodec aac -movflags frag_keyframe+empty_moov pipe:1";

            using var process = new Process
            {
                StartInfo = new ProcessStartInfo
                {
                    FileName = "ffmpeg",
                    Arguments = ffmpegArgs,
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    UseShellExecute = false,
                    CreateNoWindow = true
                }
            };

            process.ErrorDataReceived += (sender, e) => _logger.LogError("FFmpeg: {Data}", e.Data);
            process.Start();
            process.BeginErrorReadLine();
            return File(process.StandardOutput.BaseStream, "video/mp4");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error while streaming file: {FilePath}", filePath);
            return StatusCode(500, new { error = $"Failed to stream file: {ex.Message}" });
        }
    }

    private async Task<bool> CanCopyCodecs(string filePath)
    {
        // Run ffprobe to check codecs
        using var process = new Process
        {
            StartInfo = new ProcessStartInfo
            {
                FileName = "ffprobe",
                Arguments = $"-i \"{filePath}\" -show_streams -select_streams v:0 -show_entries stream=codec_name -of json",
                RedirectStandardOutput = true,
                UseShellExecute = false,
                CreateNoWindow = true
            }
        };
        process.Start();
        var output = await process.StandardOutput.ReadToEndAsync();
        await process.WaitForExitAsync();

        // Parse ffprobe output (simplified)
        var json = System.Text.Json.JsonDocument.Parse(output);
        var videoCodec = json.RootElement.GetProperty("streams")[0].GetProperty("codec_name").GetString();
        var audioOutput = await RunFFprobeForAudio(filePath);
        var audioCodec = System.Text.Json.JsonDocument.Parse(audioOutput).RootElement.GetProperty("streams")[0].GetProperty("codec_name").GetString();

        return videoCodec == "h264" && audioCodec == "aac";
    }

    private async Task<string> RunFFprobeForAudio(string filePath)
    {
        using var process = new Process
        {
            StartInfo = new ProcessStartInfo
            {
                FileName = "ffprobe",
                Arguments = $"-i \"{filePath}\" -show_streams -select_streams a:0 -show_entries stream=codec_name -of json",
                RedirectStandardOutput = true,
                UseShellExecute = false,
                CreateNoWindow = true
            }
        };
        process.Start();
        var output = await process.StandardOutput.ReadToEndAsync();
        await process.WaitForExitAsync();
        return output;
    }

    private bool IsFFmpegAvailable()
    {
        try
        {
            using var process = new Process
            {
                StartInfo = new ProcessStartInfo
                {
                    FileName = "ffmpeg",
                    Arguments = "-version",
                    RedirectStandardOutput = true,
                    UseShellExecute = false,
                    CreateNoWindow = true
                }
            };
            process.Start();
            process.WaitForExit();
            return process.ExitCode == 0;
        }
        catch
        {
            return false;
        }
    }
}