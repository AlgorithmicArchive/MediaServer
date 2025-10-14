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