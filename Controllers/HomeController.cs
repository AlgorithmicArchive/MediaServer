using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MediaServer.Models;
using MediaServer.Models.Entities;
using System.Security.Cryptography;
using System.Text;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authorization;

namespace MediaServer.Controllers;

public class HomeController(ILogger<HomeController> logger, MediaServerContext dbContext, IConfiguration configuration) : Controller
{
    private readonly ILogger<HomeController> _logger = logger;
    private readonly MediaServerContext _dbContext = dbContext;
    private readonly IConfiguration _configuration = configuration;

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult CheckUsername(string username)
    {
        var usernameExist = _dbContext.Users.FirstOrDefault(u => u.Username == username) != null;
        if (usernameExist)
        {
            return Json(new { status = false, message = "Username already exists" });
        }
        return Json(new { status = true });
    }

    public IActionResult CheckEmail(string email)
    {
        var usernameExist = _dbContext.Users.FirstOrDefault(u => u.Email == email) != null;
        if (usernameExist)
        {
            return Json(new { status = false, message = "Email already exists" });
        }
        return Json(new { status = true });
    }

    private static string HashPassword(string password)
    {
        var bytes = SHA256.HashData(Encoding.UTF8.GetBytes(password));
        return Convert.ToHexStringLower(bytes);
    }

    // ✅ Register User
    [HttpPost]
    public async Task<IActionResult> Register([FromForm] IFormCollection form)
    {
        var username = form["username"].ToString().Trim();
        var email = form["email"].ToString().Trim().ToLower();
        var password = form["password"].ToString().Trim();
        var confirmPassword = form["confirmPassword"].ToString().Trim();

        if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
            return BadRequest(new { message = "All fields are required." });

        if (password != confirmPassword)
            return BadRequest(new { message = "Passwords do not match." });

        // Check if user already exists
        if (await _dbContext.Users.AnyAsync(u => u.Email == email))
            return Conflict(new { message = "Email already exists." });

        if (await _dbContext.Users.AnyAsync(u => u.Username == username))
            return Conflict(new { message = "Username already exists." });

        var user = new Users
        {
            Username = username,
            Email = email,
            PasswordHash = HashPassword(password),
            Role = "User",
        };

        _dbContext.Users.Add(user);
        await _dbContext.SaveChangesAsync();

        return Ok(new { message = "Registration successful!" });
    }

    // ✅ Login User
    [HttpPost]
    public async Task<IActionResult> Login([FromForm] IFormCollection form)
    {
        var email = form["email"].ToString().Trim().ToLower();
        var password = form["password"].ToString().Trim();

        if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
            return BadRequest(new { message = "Email and password are required." });

        var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.Email == email);
        if (user == null)
            return Unauthorized(new { message = "Invalid email or password." });

        var hashedInput = HashPassword(password);
        if (hashedInput != user.PasswordHash)
            return Unauthorized(new { message = "Invalid email or password." });

        var claims = new List<Claim>
            {
                new(ClaimTypes.NameIdentifier, user.UserId.ToString()),
                new(ClaimTypes.Name, user.Username!),
                new(ClaimTypes.Role, user.Role!),
            };

        var key = Encoding.ASCII.GetBytes(_configuration["JWT:Secret"]!);
        var tokenHandler = new JwtSecurityTokenHandler();
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.UtcNow.AddDays(30),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
            Issuer = _configuration["JWT:Issuer"],
            Audience = _configuration["JWT:Audience"]
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);
        var tokenString = tokenHandler.WriteToken(token);

        // (Optional) Generate JWT token or session here
        return Json(new
        {
            status = true,
            token = tokenString,
            userType = user.Role,
            username = user.Username,
            userId = user.UserId,
        });
    }

    [HttpGet]
    [Authorize]
    public IActionResult LogOut()
    {
        return RedirectToAction("Index", "Home");
    }


    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
