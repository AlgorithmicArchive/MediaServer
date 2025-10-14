using System;
using System.Collections.Generic;

namespace MediaServer.Models.Entities;

public partial class SeriesSeasons
{
    public int SeasonId { get; set; }

    public int MediaId { get; set; }

    public int SeasonNumber { get; set; }

    public string? Title { get; set; }

    public DateTime? CreatedAt { get; set; }

    public virtual Media Media { get; set; } = null!;

    public virtual ICollection<SeriesEpisodes> SeriesEpisodes { get; set; } = new List<SeriesEpisodes>();
}
