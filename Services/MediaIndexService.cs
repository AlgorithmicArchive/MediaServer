using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using MediaServer.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using YoutubeExplode;
using YoutubeExplode.Videos.Streams;

namespace MediaServer.Services
{
    public class MediaIndexerService(ILogger<MediaIndexerService> logger, MediaServerContext dbContext, IConfiguration configuration, IWebHostEnvironment env)
    {
        private readonly ILogger<MediaIndexerService> _logger = logger;
        private readonly MediaServerContext _dbContext = dbContext;
        private readonly string _omdbApiKey = configuration["OmdbApiKey"] ?? throw new ArgumentNullException("OmdbApiKey is not configured.");
        private readonly string _youtubeApiKey = configuration["YoutubeApiKey"] ?? throw new ArgumentNullException("YoutubeApiKey is not configured.");
        private readonly string _imdbSearchApiUrl = "https://imdb.iamidiotareyoutoo.com/search";
        private readonly IWebHostEnvironment _env = env;
        private readonly string _ffmpegPath = configuration["FfmpegPath"] ?? @"C:\ffmpeg\bin\ffmpeg.exe";
        private readonly string _ffprobePath = configuration["FfprobePath"] ?? @"C:\ffmpeg\bin\ffprobe.exe";

        public async Task IndexMediaAsync(string moviesRootPath, string seriesRootPath)
        {
            // Index Movies
            foreach (var movieDir in Directory.GetDirectories(moviesRootPath))
            {
                await IndexMovieAsync(movieDir);
            }

            // Index Series
            foreach (var seriesDir in Directory.GetDirectories(seriesRootPath))
            {
                await IndexSeriesAsync(seriesDir);
            }

            await _dbContext.SaveChangesAsync();
        }

        private async Task<string?> GetImdbIdAsync(string title)
        {
            using var httpClient = new HttpClient();
            string searchUrl = $"{_imdbSearchApiUrl}?q={Uri.EscapeDataString(title)}";
            string searchJson = await httpClient.GetStringAsync(searchUrl);
            var searchData = JsonConvert.DeserializeObject<dynamic>(searchJson);

            string? imdbId = searchData!["description"]?[0]?["#IMDB_ID"]?.ToString();

            if (string.IsNullOrEmpty(imdbId))
            {
                _logger.LogWarning($"No IMDb ID found for '{title}' via search API.");
                return null;
            }

            return imdbId;
        }

        private async Task<(string VideoCodec, string AudioCodec, string AudioStreamIndex)?> GetCodecsAsync(string filePath)
        {
            try
            {
                // Probe all streams to get detailed information
                var processStartInfo = new ProcessStartInfo
                {
                    FileName = _ffprobePath,
                    Arguments = $"-v error -show_entries stream=index,codec_name,codec_type -of json \"{filePath}\"",
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    UseShellExecute = false,
                    CreateNoWindow = true
                };

                string videoCodec = "";
                string audioCodec = "none";
                string audioStreamIndex = "0";
                var errorOutput = new System.Text.StringBuilder();

                using (var process = new Process { StartInfo = processStartInfo })
                {
                    process.ErrorDataReceived += (s, e) => { if (e.Data != null) errorOutput.AppendLine(e.Data); };
                    process.Start();
                    string output = await process.StandardOutput.ReadToEndAsync();
                    await process.WaitForExitAsync();

                    if (process.ExitCode == 0)
                    {
                        var json = JsonConvert.DeserializeObject<dynamic>(output);
                        var streams = json?["streams"] ?? new List<dynamic>();

                        foreach (var stream in streams)
                        {
                            string codecType = stream?["codec_type"]?.ToString()!;
                            string codecName = stream?["codec_name"]?.ToString()!;
                            string index = stream?["index"]?.ToString()!;

                            if (codecType == "video" && string.IsNullOrEmpty(videoCodec))
                            {
                                videoCodec = codecName ?? "";
                            }
                            else if (codecType == "audio" && audioCodec == "none")
                            {
                                audioCodec = codecName ?? "";
                                audioStreamIndex = index ?? "0";
                            }
                        }

                        _logger.LogInformation($"Codecs for '{filePath}': Video={videoCodec}, Audio={audioCodec}, AudioStreamIndex={audioStreamIndex}");
                    }
                    else
                    {
                        _logger.LogWarning($"ffprobe failed for '{filePath}'. Error: {errorOutput}");
                    }
                }

                if (!string.IsNullOrEmpty(videoCodec))
                {
                    return (videoCodec, audioCodec, audioStreamIndex);
                }

                _logger.LogWarning($"Failed to retrieve video codec for '{filePath}'.");
                return null;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error retrieving codecs for '{filePath}'.");
                return null;
            }
        }

        private async Task IndexMovieAsync(string movieDir)
        {
            string title = Path.GetFileName(movieDir);
            using var httpClient = new HttpClient();

            // Fetch IMDb ID
            string? imdbId = await GetImdbIdAsync(title);
            _logger.LogInformation("IMDb ID for '{Title}' is {ImdbId}", title, imdbId);

            if (string.IsNullOrEmpty(imdbId))
            {
                _logger.LogWarning($"No IMDb ID found for movie '{title}'.");
                return;
            }

            // Fetch metadata from OMDB
            string omdbUrl = $"https://www.omdbapi.com/?apikey={_omdbApiKey}&i={imdbId}&type=movie";
            string omdbJson = await httpClient.GetStringAsync(omdbUrl);
            var omdbData = JsonConvert.DeserializeObject<dynamic>(omdbJson);

            if (omdbData?["Response"] != "True")
            {
                _logger.LogWarning($"Movie '{title}' not found in OMDB.");
                return;
            }

            string description = omdbData["Plot"]?.ToString() ?? "";
            string releaseYear = omdbData["Year"]?.ToString() ?? "";
            string rating = omdbData["imdbRating"]?.ToString() ?? "";
            string posterUrl = omdbData["Poster"]?.ToString() ?? "";

            // Download poster
            string thumbnailPath = string.Empty;
            if (!string.IsNullOrEmpty(posterUrl) && posterUrl != "N/A")
            {
                var posterBytes = await httpClient.GetByteArrayAsync(posterUrl);
                string posterFullPath = Path.Combine(movieDir, "poster.jpg");
                await File.WriteAllBytesAsync(posterFullPath, posterBytes);
                thumbnailPath = Path.GetRelativePath(_env.WebRootPath, posterFullPath).Replace("\\", "/");
            }

            // Fetch and download trailer
            string trailerPath = string.Empty;
            string ytSearchUrl = $"https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q={Uri.EscapeDataString(title + " official trailer")}&type=video&key={_youtubeApiKey}";
            string ytJson = await httpClient.GetStringAsync(ytSearchUrl);
            var ytData = JsonConvert.DeserializeObject<dynamic>(ytJson);
            string? videoId = ytData?["items"]?[0]?["id"]?["videoId"]?.ToString();

            if (!string.IsNullOrEmpty(videoId))
            {
                try
                {
                    Directory.CreateDirectory(movieDir);
                    string trailerFullPath = Path.Combine(movieDir, "trailer.mp4");
                    string outputTemplate = trailerFullPath.Replace(".mp4", ".%(ext)s");

                    var processStartInfo = new ProcessStartInfo
                    {
                        FileName = "yt-dlp",
                        Arguments = $"-o \"{outputTemplate}\" -f bestvideo+bestaudio --merge-output-format mp4 --ffmpeg-location \"{_ffmpegPath}\" --no-progress https://www.youtube.com/watch?v={videoId}",
                        RedirectStandardOutput = true,
                        RedirectStandardError = true,
                        UseShellExecute = false,
                        CreateNoWindow = true
                    };

                    var process = new Process { StartInfo = processStartInfo };
                    process.OutputDataReceived += (s, e) => { if (e.Data != null) _logger.LogInformation(e.Data); };
                    process.ErrorDataReceived += (s, e) => { if (e.Data != null) _logger.LogError(e.Data); };

                    process.Start();
                    process.BeginOutputReadLine();
                    process.BeginErrorReadLine();
                    await process.WaitForExitAsync();

                    if (process.ExitCode == 0)
                    {
                        trailerPath = Path.GetRelativePath(_env.WebRootPath, trailerFullPath).Replace("\\", "/");
                        _logger.LogInformation($"Trailer downloaded to: {trailerPath}");
                    }
                    else
                    {
                        _logger.LogError($"yt-dlp failed for videoId {videoId}");
                    }
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, $"Error downloading trailer for '{title}'");
                }
            }

            // Check if movie exists
            var existingMedia = await _dbContext.Media.FirstOrDefaultAsync(m => m.Title == title && m.Type == "Movie");
            if (existingMedia != null)
            {
                _logger.LogInformation($"Movie '{title}' already exists in DB.");
                return;
            }

            // Insert into DB
            var media = new Media
            {
                Title = title,
                Description = description,
                Type = "Movie",
                ReleaseYear = releaseYear,
                Rating = rating,
                ThumbnailPath = thumbnailPath,
                TrailerPath = trailerPath
            };
            _dbContext.Media.Add(media);
            await _dbContext.SaveChangesAsync();

            // Process movie files
            var movieFiles = Directory.GetFiles(movieDir)
                .Where(f => !f.EndsWith("poster.jpg") && !f.EndsWith("trailer.mp4") && (f.EndsWith(".mp4") || f.EndsWith(".mkv")))
                .ToList();

            foreach (var filePath in movieFiles)
            {
                string finalFilePath = filePath;
                if (filePath.EndsWith(".mkv"))
                {
                    finalFilePath = filePath;
                }

                _dbContext.MovieFiles.Add(new MovieFiles
                {
                    MediaId = media.MediaId,
                    FilePath = Path.GetRelativePath(_env.WebRootPath, finalFilePath).Replace("\\", "/"),
                    FileName = Path.GetFileName(finalFilePath)
                });
            }

            await _dbContext.SaveChangesAsync();
        }

        private async Task IndexSeriesAsync(string seriesDir)
        {
            string title = Path.GetFileName(seriesDir);
            using var httpClient = new HttpClient();

            // Fetch IMDb ID
            string? imdbId = await GetImdbIdAsync(title);
            if (string.IsNullOrEmpty(imdbId))
            {
                _logger.LogWarning($"No IMDb ID found for series '{title}'.");
                return;
            }

            // OMDB metadata
            string omdbUrl = $"https://www.omdbapi.com/?apikey={_omdbApiKey}&i={imdbId}&type=series";
            string omdbJson = await httpClient.GetStringAsync(omdbUrl);
            var omdbData = JsonConvert.DeserializeObject<dynamic>(omdbJson);

            if (omdbData?["Response"] != "True")
            {
                _logger.LogWarning($"Series '{title}' not found in OMDB.");
                return;
            }

            string description = omdbData["Plot"]?.ToString() ?? "";
            string releaseYear = omdbData["Year"]?.ToString() ?? "";
            string rating = omdbData["imdbRating"]?.ToString() ?? "";
            string posterUrl = omdbData["Poster"]?.ToString() ?? "";

            // Download poster
            string thumbnailPath = string.Empty;
            if (!string.IsNullOrEmpty(posterUrl) && posterUrl != "N/A")
            {
                var posterBytes = await httpClient.GetByteArrayAsync(posterUrl);
                string posterFullPath = Path.Combine(seriesDir, "poster.jpg");
                await File.WriteAllBytesAsync(posterFullPath, posterBytes);
                thumbnailPath = Path.GetRelativePath(_env.WebRootPath, posterFullPath).Replace("\\", "/");
            }

            // Download trailer
            string trailerPath = string.Empty;
            string ytSearchUrl = $"https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q={Uri.EscapeDataString(title + " official trailer")}&type=video&key={_youtubeApiKey}";
            string ytJson = await httpClient.GetStringAsync(ytSearchUrl);
            var ytData = JsonConvert.DeserializeObject<dynamic>(ytJson);
            string? videoId = ytData?["items"]?[0]?["id"]?["videoId"]?.ToString();

            if (!string.IsNullOrEmpty(videoId))
            {
                try
                {
                    Directory.CreateDirectory(seriesDir);
                    string trailerFullPath = Path.Combine(seriesDir, "trailer.mp4");
                    string outputTemplate = trailerFullPath.Replace(".mp4", ".%(ext)s");

                    var processStartInfo = new ProcessStartInfo
                    {
                        FileName = "yt-dlp",
                        Arguments = $"-o \"{outputTemplate}\" -f bestvideo+bestaudio --merge-output-format mp4 --ffmpeg-location \"{_ffmpegPath}\" --no-progress https://www.youtube.com/watch?v={videoId}",
                        RedirectStandardOutput = true,
                        RedirectStandardError = true,
                        UseShellExecute = false,
                        CreateNoWindow = true
                    };

                    var process = new Process { StartInfo = processStartInfo };
                    process.OutputDataReceived += (s, e) => { if (e.Data != null) _logger.LogInformation(e.Data); };
                    process.ErrorDataReceived += (s, e) => { if (e.Data != null) _logger.LogError(e.Data); };

                    process.Start();
                    process.BeginOutputReadLine();
                    process.BeginErrorReadLine();
                    await process.WaitForExitAsync();

                    if (process.ExitCode == 0)
                    {
                        trailerPath = Path.GetRelativePath(_env.WebRootPath, trailerFullPath).Replace("\\", "/");
                        _logger.LogInformation($"Trailer downloaded to: {trailerPath}");
                    }
                    else
                    {
                        _logger.LogError($"yt-dlp failed for videoId {videoId}");
                    }
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, $"Error downloading trailer for '{title}'");
                }
            }

            // Check if series exists
            var existingMedia = await _dbContext.Media.FirstOrDefaultAsync(m => m.Title == title && m.Type == "Series");
            if (existingMedia != null)
            {
                _logger.LogInformation($"Series '{title}' already exists in DB.");
                return;
            }

            // Insert media
            var media = new Media
            {
                Title = title,
                Description = description,
                Type = "Series",
                ReleaseYear = releaseYear,
                Rating = rating,
                ThumbnailPath = thumbnailPath,
                TrailerPath = trailerPath
            };
            _dbContext.Media.Add(media);
            await _dbContext.SaveChangesAsync();

            // Traverse seasons
            var seasonDirs = Directory.GetDirectories(seriesDir)
                .Where(d => Path.GetFileName(d).StartsWith("Season ", StringComparison.OrdinalIgnoreCase))
                .OrderBy(d => int.TryParse(Path.GetFileName(d).Substring(7), out int num) ? num : 0)
                .ToList();

            foreach (var seasonDir in seasonDirs)
            {
                string seasonName = Path.GetFileName(seasonDir);
                if (!int.TryParse(seasonName.Substring(7), out int seasonNumber)) continue;

                var season = new SeriesSeasons
                {
                    MediaId = media.MediaId,
                    SeasonNumber = seasonNumber,
                    Title = seasonName
                };
                _dbContext.SeriesSeasons.Add(season);
                await _dbContext.SaveChangesAsync();

                // Process episodes
                var episodeFiles = Directory.GetFiles(seasonDir)
                    .Where(f => f.EndsWith(".mp4") || f.EndsWith(".mkv"))
                    .OrderBy(f => f)
                    .ToList();

                int episodeCounter = 1;
                foreach (var filePath in episodeFiles)
                {
                    string finalFilePath = filePath;
                    if (filePath.EndsWith(".mkv"))
                    {
                        finalFilePath = filePath;
                    }

                    string fileName = Path.GetFileName(finalFilePath);
                    int episodeNumber = episodeCounter;

                    // Parse episode number from filename
                    if (Regex.Match(fileName, @"E(\d+)", RegexOptions.IgnoreCase) is var match && match.Success)
                    {
                        int.TryParse(match.Groups[1].Value, out episodeNumber);
                    }
                    else if (Regex.Match(fileName, @"Episode (\d+)", RegexOptions.IgnoreCase) is var match2 && match2.Success)
                    {
                        int.TryParse(match2.Groups[1].Value, out episodeNumber);
                    }

                    _dbContext.SeriesEpisodes.Add(new SeriesEpisodes
                    {
                        SeasonId = season.SeasonId,
                        EpisodeNumber = episodeNumber,
                        Title = $"Episode {episodeNumber}",
                        FilePath = Path.GetRelativePath(_env.WebRootPath, finalFilePath).Replace("\\", "/")
                    });

                    episodeCounter++;
                }
                await _dbContext.SaveChangesAsync();
            }
        }
    }

    // Helper classes for JSON deserialization
    public class ImdbSearchResponse
    {
        public bool Ok { get; set; }
        public List<ImdbSearchResult>? Description { get; set; }
        public int ErrorCode { get; set; }
    }

    public class ImdbSearchResult
    {
        [JsonPropertyName("#TITLE")]
        public string Title { get; set; } = string.Empty;
        [JsonPropertyName("#YEAR")]
        public string? Year { get; set; }
        [JsonPropertyName("#IMDB_ID")]
        public string? ImdbId { get; set; }
        [JsonPropertyName("#RANK")]
        public int Rank { get; set; }
        [JsonPropertyName("#ACTORS")]
        public string? Actors { get; set; }
        [JsonPropertyName("#AKA")]
        public string? Aka { get; set; }
        [JsonPropertyName("#IMDB_URL")]
        public string? ImdbUrl { get; set; }
        [JsonPropertyName("#IMDB_IV")]
        public string? ImdbIv { get; set; }
        [JsonPropertyName("#IMG_POSTER")]
        public string? ImgPoster { get; set; }
        public int PhotoWidth { get; set; }
        public int PhotoHeight { get; set; }
    }

    public class YoutubeSearchResponse
    {
        public List<YoutubeItem>? Items { get; set; }
    }

    public class YoutubeItem
    {
        public YoutubeId? Id { get; set; }
    }

    public class YoutubeId
    {
        public string? VideoId { get; set; }
    }
}