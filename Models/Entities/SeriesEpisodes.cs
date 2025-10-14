using System;
using System.Collections.Generic;

namespace MediaServer.Models.Entities;

public partial class SeriesEpisodes
{
    public int EpisodeId { get; set; }

    public int SeasonId { get; set; }

    public int EpisodeNumber { get; set; }

    public string? Title { get; set; }

    public string FilePath { get; set; } = null!;

    public DateTime? CreatedAt { get; set; }

    public virtual SeriesSeasons Season { get; set; } = null!;
}
