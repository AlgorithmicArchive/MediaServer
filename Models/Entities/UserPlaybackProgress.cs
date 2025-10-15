using System;
using System.Collections.Generic;

namespace MediaServer.Models.Entities;

public partial class UserPlaybackProgress
{
    public int ProgressId { get; set; }

    public int UserId { get; set; }

    public int MediaId { get; set; }

    public int? EpisodeId { get; set; }

    public long LastPosition { get; set; }

    public long Duration { get; set; }

    public bool IsCompleted { get; set; }

    public DateTime LastWatchedAt { get; set; }

    public virtual SeriesEpisodes? Episode { get; set; }

    public virtual Media Media { get; set; } = null!;

    public virtual Users User { get; set; } = null!;
}
