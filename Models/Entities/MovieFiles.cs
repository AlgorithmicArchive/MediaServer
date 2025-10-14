using System;
using System.Collections.Generic;

namespace MediaServer.Models.Entities;

public partial class MovieFiles
{
    public int MovieFileId { get; set; }

    public int MediaId { get; set; }

    public string FilePath { get; set; } = null!;

    public string? FileName { get; set; }

    public DateTime? CreatedAt { get; set; }

    public virtual Media Media { get; set; } = null!;
}
