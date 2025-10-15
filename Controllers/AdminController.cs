using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MediaServer.Models;
using MediaServer.Models.Entities;
using System.Security.Cryptography;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using System.Text.Json;
using System.Text.Json.Serialization;
using MediaServer.Services;
using YoutubeExplode;
using YoutubeExplode.Videos.Streams;
using VideoLibrary;
using System.Security.Claims;

namespace MediaServer.Controllers;

[Authorize(Roles = "Admin")]
public class AdminController(ILogger<AdminController> logger, MediaServerContext dbContext, IHttpClientFactory _httpClientFactory, IConfiguration config, MediaIndexerService indexerService, IWebHostEnvironment env) : Controller
{

    private readonly ILogger<AdminController> _logger = logger;
    private readonly MediaServerContext _dbContext = dbContext;
    private readonly IHttpClientFactory _httpClientFactory = _httpClientFactory;
    private readonly IConfiguration _config = config;
    private readonly MediaIndexerService _indexerService = indexerService;
    private readonly IWebHostEnvironment _env = env;

    private readonly YoutubeClient _youtubeClient = new();

    [HttpGet]
    public IActionResult Test()
    {
        return Json(new { status = true });
    }

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


    [HttpGet]
    public async Task<IActionResult> IndexMedia()
    {
        string wwwRoot = _env.WebRootPath;

        string moviesPath = Path.Combine(wwwRoot, "Movies");
        string seriesPath = Path.Combine(wwwRoot, "Series");
        try
        {
            await _indexerService.IndexMediaAsync(moviesPath, seriesPath);
            return Ok("Indexing completed.");
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Indexing failed: {ex.Message}");
        }
    }

    public async Task<IActionResult> Search(string title)
    {
        if (string.IsNullOrEmpty(title))
        {
            return BadRequest(new { error = "Title is required" });
        }

        try
        {
            var client = _httpClientFactory.CreateClient();
            var apiKey = _config["API:key"];
            var url = $"http://www.omdbapi.com/?apikey={apiKey}&t={Uri.EscapeDataString(title)}";
            var response = await client.GetAsync(url);

            if (!response.IsSuccessStatusCode)
            {
                _logger.LogWarning("OMDB API request failed with status: {StatusCode}", response.StatusCode);
                return StatusCode((int)response.StatusCode, new { error = "Failed to fetch data from OMDB" });
            }

            var json = await response.Content.ReadAsStringAsync();
            var result = JsonSerializer.Deserialize<OmdbResult>(json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

            if (result?.Response != "True")
            {
                return NotFound(new { error = result?.Error ?? "Movie not found" });
            }

            return Ok(new
            {
                result.Title,
                result.Year,
                result.Genre,
                result.ImdbRating,
                Plot = result.Plot ?? "-",
                Type = result.Type ?? "",
                PosterPath = result.Poster ?? ""
            });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error during OMDB API call for title: {Title}", title);
            return StatusCode(500, new { error = "Internal server error" });
        }
    }

    [HttpPost]
    public async Task<IActionResult> AddMedia([FromForm] IFormCollection form)
    {
        try
        {
            // Extract values from form
            var title = form["title"].ToString();
            var plot = form["plot"].ToString();
            var type = form["type"].ToString(); // "Movie" or "Series"
            var yearStr = form["year"].ToString();
            var rating = form["imdbRating"].ToString();
            var posterPath = form["posterPath"].ToString();
            var trailerPath = form["trailerPath"].ToString(); // optional, can be empty

            if (string.IsNullOrEmpty(title) || string.IsNullOrEmpty(type))
                return BadRequest(new { error = "Title and Type are required" });


            var media = new Media
            {
                Title = title,
                Description = string.IsNullOrEmpty(plot) ? "-" : plot,
                Type = type,
                ReleaseYear = yearStr,
                Rating = string.IsNullOrEmpty(rating) ? "-" : rating,
                ThumbnailPath = string.IsNullOrEmpty(posterPath) ? "" : posterPath,
                TrailerPath = trailerPath ?? "",
                IsActive = true
            };

            _dbContext.Media.Add(media);
            await _dbContext.SaveChangesAsync();

            return Ok(new { message = "Media added successfully", mediaId = media.MediaId });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error adding media");
            return StatusCode(500, new { error = "Internal server error" });
        }
    }


    [HttpPost]
    public async Task<IActionResult> DeleteMedia([FromBody] DeleteMediaRequest request)
    {
        try
        {
            var adminId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var media = await _dbContext.Media
                .Include(m => m.SeriesSeasons)
                .ThenInclude(s => s.SeriesEpisodes)
                .Include(m => m.MovieFiles)
                .FirstOrDefaultAsync(m => m.MediaId == request.MediaId);

            if (media == null)
                return NotFound(new { error = "Media not found" });

            // Collect file paths and folders to delete after database operation
            var filesToDelete = new List<string>();
            var foldersToDelete = new HashSet<string>(); // Use HashSet to avoid duplicates
            string wwwRoot = _env.WebRootPath;

            if (!string.IsNullOrEmpty(media.ThumbnailPath))
            {
                var thumbnailPath = Path.Combine(wwwRoot, media.ThumbnailPath.TrimStart('/'));
                if (IsPathSafe(thumbnailPath, wwwRoot))
                {
                    filesToDelete.Add(thumbnailPath);
                    foldersToDelete.Add(Path.GetDirectoryName(thumbnailPath)!);
                }
            }

            if (!string.IsNullOrEmpty(media.TrailerPath))
            {
                var trailerPath = Path.Combine(wwwRoot, media.TrailerPath.TrimStart('/'));
                if (IsPathSafe(trailerPath, wwwRoot))
                {
                    filesToDelete.Add(trailerPath);
                    foldersToDelete.Add(Path.GetDirectoryName(trailerPath)!);
                }
            }

            if (media.Type.Equals("movie", StringComparison.OrdinalIgnoreCase))
            {
                foreach (var movieFile in media.MovieFiles)
                {
                    var filePath = Path.Combine(wwwRoot, movieFile.FilePath.TrimStart('/'));
                    if (IsPathSafe(filePath, wwwRoot))
                    {
                        filesToDelete.Add(filePath);
                        foldersToDelete.Add(Path.GetDirectoryName(filePath)!);
                    }
                }
            }

            if (media.Type.Equals("series", StringComparison.OrdinalIgnoreCase))
            {
                foreach (var season in media.SeriesSeasons)
                {
                    foreach (var episode in season.SeriesEpisodes)
                    {
                        var filePath = Path.Combine(wwwRoot, episode.FilePath.TrimStart('/'));
                        if (IsPathSafe(filePath, wwwRoot))
                        {
                            filesToDelete.Add(filePath);
                            foldersToDelete.Add(Path.GetDirectoryName(filePath)!);
                        }
                    }
                }
            }

            // Delete database record (cascades to MovieFiles, SeriesSeasons, SeriesEpisodes, UserPlaybackProgress)
            _dbContext.Media.Remove(media);
            await _dbContext.SaveChangesAsync();

            // Delete files
            var fileErrors = new List<string>();
            foreach (var filePath in filesToDelete)
            {
                try
                {
                    if (System.IO.File.Exists(filePath))
                    {
                        System.IO.File.Delete(filePath);
                        _logger.LogInformation("Admin {AdminId} deleted file: {Path}", adminId, filePath);
                    }
                }
                catch (Exception ex)
                {
                    fileErrors.Add($"Failed to delete {filePath}: {ex.Message}");
                    _logger.LogWarning(ex, "Admin {AdminId} failed to delete file: {Path}", adminId, filePath);
                }
            }

            // Delete empty folders
            foreach (var folder in foldersToDelete.OrderByDescending(f => f.Length)) // Sort by length to delete subfolders first
            {
                try
                {
                    if (Directory.Exists(folder) && IsPathSafe(folder, wwwRoot) && !Directory.GetFileSystemEntries(folder).Any())
                    {
                        Directory.Delete(folder, false);
                        _logger.LogInformation("Admin {AdminId} deleted folder: {Path}", adminId, folder);
                    }
                }
                catch (Exception ex)
                {
                    fileErrors.Add($"Failed to delete folder {folder}: {ex.Message}");
                    _logger.LogWarning(ex, "Admin {AdminId} failed to delete folder: {Path}", adminId, folder);
                }
            }

            var response = new { message = "Media and associated files/folders deleted successfully" };


            _logger.LogInformation("Admin {AdminId} deleted media ID: {MediaId}", adminId, request.MediaId);
            return Ok(response);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting media with ID: {MediaId}", request.MediaId);
            return StatusCode(500, new { error = "Internal server error" });
        }
    }

    [HttpPost]
    public async Task<IActionResult> DeleteSeason([FromBody] DeleteSeasonRequest request)
    {
        try
        {
            var adminId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var season = await _dbContext.SeriesSeasons
                .Include(s => s.SeriesEpisodes)
                .FirstOrDefaultAsync(s => s.SeasonId == request.SeasonId);

            if (season == null)
                return NotFound(new { error = "Season not found" });

            // Collect episode file paths and folder
            string wwwRoot = _env.WebRootPath;
            var filesToDelete = new List<string>();
            string? seasonFolder = null;
            foreach (var episode in season.SeriesEpisodes)
            {
                var filePath = Path.Combine(wwwRoot, episode.FilePath.TrimStart('/'));
                if (IsPathSafe(filePath, wwwRoot))
                {
                    filesToDelete.Add(filePath);
                    seasonFolder ??= Path.GetDirectoryName(filePath); // Assume all episodes in same season folder
                }
            }

            // Delete database record (cascades to SeriesEpisodes)
            _dbContext.SeriesSeasons.Remove(season);
            await _dbContext.SaveChangesAsync();

            // Delete files
            var fileErrors = new List<string>();
            foreach (var filePath in filesToDelete)
            {
                try
                {
                    if (System.IO.File.Exists(filePath))
                    {
                        System.IO.File.Delete(filePath);
                        _logger.LogInformation("Admin {AdminId} deleted file: {Path}", adminId, filePath);
                    }
                }
                catch (Exception ex)
                {
                    fileErrors.Add($"Failed to delete {filePath}: {ex.Message}");
                    _logger.LogWarning(ex, "Admin {AdminId} failed to delete file: {Path}", adminId, filePath);
                }
            }

            // Delete season folder if empty
            if (seasonFolder != null && IsPathSafe(seasonFolder, wwwRoot))
            {
                try
                {
                    if (Directory.Exists(seasonFolder) && !Directory.GetFileSystemEntries(seasonFolder).Any())
                    {
                        Directory.Delete(seasonFolder, false);
                        _logger.LogInformation("Admin {AdminId} deleted folder: {Path}", adminId, seasonFolder);
                    }
                }
                catch (Exception ex)
                {
                    fileErrors.Add($"Failed to delete folder {seasonFolder}: {ex.Message}");
                    _logger.LogWarning(ex, "Admin {AdminId} failed to delete folder: {Path}", adminId, seasonFolder);
                }
            }

            var response = new { message = "Season and associated files/folders deleted successfully" };


            _logger.LogInformation("Admin {AdminId} deleted season ID: {SeasonId}", adminId, request.SeasonId);
            return Ok(response);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting season with ID: {SeasonId}", request.SeasonId);
            return StatusCode(500, new { error = "Internal server error" });
        }
    }

    [HttpPost]
    public async Task<IActionResult> DeleteEpisode([FromBody] DeleteEpisodeRequest request)
    {
        try
        {
            var adminId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var episode = await _dbContext.SeriesEpisodes
                .FirstOrDefaultAsync(e => e.EpisodeId == request.EpisodeId);

            if (episode == null)
                return NotFound(new { error = "Episode not found" });

            // Delete related UserPlaybackProgress records
            var progressRecords = await _dbContext.UserPlaybackProgress
                .Where(p => p.EpisodeId == request.EpisodeId)
                .ToListAsync();
            if (progressRecords.Any())
            {
                _dbContext.UserPlaybackProgress.RemoveRange(progressRecords);
                await _dbContext.SaveChangesAsync();
                _logger.LogInformation("Admin {AdminId} deleted {Count} UserPlaybackProgress records for episode ID: {EpisodeId}", adminId, progressRecords.Count, request.EpisodeId);
            }

            // Collect episode file path
            string wwwRoot = _env.WebRootPath;
            var filePath = Path.Combine(wwwRoot, episode.FilePath.TrimStart('/'));
            var filesToDelete = IsPathSafe(filePath, wwwRoot) ? new List<string> { filePath } : new List<string>();

            // Delete database record
            _dbContext.SeriesEpisodes.Remove(episode);
            await _dbContext.SaveChangesAsync();

            // Delete file
            var fileErrors = new List<string>();
            foreach (var path in filesToDelete)
            {
                try
                {
                    if (System.IO.File.Exists(path))
                    {
                        System.IO.File.Delete(path);
                        _logger.LogInformation("Admin {AdminId} deleted file: {Path}", adminId, path);
                    }
                }
                catch (Exception ex)
                {
                    fileErrors.Add($"Failed to delete {path}: {ex.Message}");
                    _logger.LogWarning(ex, "Admin {AdminId} failed to delete file: {Path}", adminId, path);
                }
            }

            var response = new { message = "Episode and associated file deleted successfully" };


            _logger.LogInformation("Admin {AdminId} deleted episode ID: {EpisodeId}", adminId, request.EpisodeId);
            return Ok(response);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting episode with ID: {EpisodeId}", request.EpisodeId);
            return StatusCode(500, new { error = "Internal server error" });
        }
    }

    // Security helper to prevent directory traversal
    private static bool IsPathSafe(string path, string wwwRoot)
    {
        try
        {
            var fullPath = Path.GetFullPath(path);
            return fullPath.StartsWith(Path.GetFullPath(wwwRoot), StringComparison.OrdinalIgnoreCase);
        }
        catch
        {
            return false;
        }
    }
    
    public class DeleteMediaRequest
    {
        public int MediaId { get; set; }
    }

    public class DeleteSeasonRequest
    {
        public int SeasonId { get; set; }
    }

    public class DeleteEpisodeRequest
    {
        public int EpisodeId { get; set; }
    }

    public class OmdbResult
    {
        public string Response { get; set; } = "";
        public string Title { get; set; } = "";
        public string Year { get; set; } = "";
        public string Genre { get; set; } = "";
        public string Plot { get; set; } = "";
        public string Poster { get; set; } = "";   // updated from Poster
        public string ImdbRating { get; set; } = "";     // optional, for Rating in Media table
        public string TrailerPath { get; set; } = "";  // optional, empty by default
        public string Type { get; set; } = "";
        public string Error { get; set; } = "";
    }

}