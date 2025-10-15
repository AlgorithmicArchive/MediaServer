using System;
using System.Collections.Generic;

namespace MediaServer.Models.Entities;

public partial class Users
{
    public int UserId { get; set; }

    public string Username { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string PasswordHash { get; set; } = null!;

    public string Role { get; set; } = null!;

    public DateTime CreatedAt { get; set; }

    public bool IsActive { get; set; }

    public virtual ICollection<UserPlaybackProgress> UserPlaybackProgress { get; set; } = new List<UserPlaybackProgress>();
}
