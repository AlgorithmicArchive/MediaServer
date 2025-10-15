public class UpdateProgressRequest
{
    public int MediaId { get; set; }
    public long Position { get; set; } // In seconds
    public long Duration { get; set; } // In seconds
    public bool? IsCompleted { get; set; }
    public int? EpisodeId { get; set; }
}