using System;
using System.Collections.Generic;

namespace MediaServer.Models.Entities;

public partial class Media
{
    public int MediaId { get; set; }

    public string Title { get; set; } = null!;

    public string? Description { get; set; }

    public string Type { get; set; } = null!;

    public string? ReleaseYear { get; set; }

    public string? Rating { get; set; }

    public string? ThumbnailPath { get; set; }

    public string? TrailerPath { get; set; }

    public bool? IsActive { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual ICollection<MovieFiles> MovieFiles { get; set; } = new List<MovieFiles>();

    public virtual ICollection<SeriesSeasons> SeriesSeasons { get; set; } = new List<SeriesSeasons>();

    public virtual ICollection<UserPlaybackProgress> UserPlaybackProgress { get; set; } = new List<UserPlaybackProgress>();
}
