using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MediaServer.Models;
using MediaServer.Models.Entities;
using System.Security.Cryptography;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

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

    [HttpGet]
    public async Task<IActionResult> GetMediaDetails(int mediaId)
    {
        var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (!int.TryParse(userIdClaim, out int userId))
            return Unauthorized(new { error = "Invalid user" });

        var media = await _dbContext.Media
            .Include(m => m.MovieFiles)
            .Include(m => m.SeriesSeasons)
                .ThenInclude(s => s.SeriesEpisodes)
            .FirstOrDefaultAsync(m => m.MediaId == mediaId && (bool)m.IsActive!);

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
                                StreamUrl = e.FilePath,
                                progress = _dbContext.UserPlaybackProgress
                                    .Where(p => p.UserId == userId && p.EpisodeId == e.EpisodeId && !p.IsCompleted)
                                    .Select(p => new { p.LastPosition, p.Duration })
                                    .FirstOrDefault()
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
                        StreamUrl = f.FilePath,
                        progress = _dbContext.UserPlaybackProgress
                            .Where(p => p.UserId == userId && p.MediaId == mediaId && p.EpisodeId == null && !p.IsCompleted)
                            .Select(p => new { p.LastPosition, p.Duration })
                            .FirstOrDefault()
                    })
                    .ToList()
                : null,
            overallProgress = _dbContext.UserPlaybackProgress
                .Where(p => p.UserId == userId && p.MediaId == mediaId && !p.IsCompleted)
                .OrderByDescending(p => p.LastWatchedAt)
                .Select(p => new { p.LastPosition, p.Duration, p.EpisodeId, p.IsCompleted })
                .FirstOrDefault() // For quick resume on media level
        };

        return Ok(result);
    }

    [HttpPost]
    public async Task<IActionResult> UpdateProgress([FromBody] UpdateProgressRequest request)
    {
        var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (!int.TryParse(userIdClaim, out int userId))
            return Unauthorized(new { error = "Invalid user" });

        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var progress = await _dbContext.UserPlaybackProgress
            .FirstOrDefaultAsync(p => p.UserId == userId &&
                p.MediaId == request.MediaId &&
                (request.EpisodeId.HasValue ? p.EpisodeId == request.EpisodeId : p.EpisodeId == null));

        if (progress == null)
        {
            progress = new UserPlaybackProgress
            {
                UserId = userId,
                MediaId = request.MediaId,
                EpisodeId = request.EpisodeId,
                LastPosition = request.Position,
                Duration = request.Duration,
                IsCompleted = (bool)request.IsCompleted!,
                LastWatchedAt = DateTime.UtcNow
            };
            _dbContext.UserPlaybackProgress.Add(progress);
        }
        else
        {
            progress.LastPosition = request.Position;
            progress.Duration = request.Duration;
            progress.IsCompleted = (bool)request.IsCompleted!;
            progress.LastWatchedAt = DateTime.UtcNow;
        }

        await _dbContext.SaveChangesAsync();
        return Ok(new { message = "Progress updated" });
    }

    [HttpGet]
    [AllowAnonymous]
    public IActionResult StreamMedia(string filePath)
    {
        _logger.LogInformation($"  --------------------Requested file path: {_env.WebRootPath} ---------");
        var fullPath = Path.Combine(_env.WebRootPath, filePath = Path.DirectorySeparatorChar == '\\'
    ? filePath.Replace('/', '\\')
    : filePath.Replace('\\', '/'));
        _logger.LogInformation($"---------- Streaming media from path: {fullPath} ------------");
        if (!System.IO.File.Exists(fullPath)) return NotFound();

        var stream = System.IO.File.OpenRead(fullPath);
        var contentType = "video/mp4"; // adjust if needed
        return File(stream, contentType, enableRangeProcessing: true);
    }

    [HttpGet]
    public async Task<IActionResult> GetContinueWatching(int userId)
    {
        try
        {
            var progress = await _dbContext.UserPlaybackProgress
                .Include(p => p.Media)
                .Where(p => p.UserId == userId && !p.IsCompleted && p.Media.IsActive == true)
                .OrderByDescending(p => p.LastWatchedAt)
                .Select(p => new
                {
                    p.MediaId,
                    p.Media.Title,
                    p.Media.Description,
                    Type = p.Media.Type.ToLowerInvariant(),
                    p.Media.ThumbnailPath,
                    p.Media.TrailerPath,
                    p.EpisodeId,
                    p.LastPosition,
                    p.Duration
                })
                .ToListAsync();
            return Ok(progress);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error fetching continue watching");
            return StatusCode(500, new { error = "Internal server error" });
        }
    }

}