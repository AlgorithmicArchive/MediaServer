import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axiosConfig";
import { Box, Typography, Grid, Button, CircularProgress } from "@mui/material";

export default function MediaDetailPage() {
  const { mediaId } = useParams();
  const [media, setMedia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentVideo, setCurrentVideo] = useState("");

  async function getStream(filePath) {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/User/StreamMedia", {
        params: { filePath },
        responseType: "blob",
        timeout: 120000,
      });
      if (response.data.size === 0) {
        throw new Error("Empty video stream received");
      }
      const videoUrl = URL.createObjectURL(response.data);
      setCurrentVideo(videoUrl);
      return videoUrl;
    } catch (err) {
      console.error("Streaming error:", err);
      setError(
        err.response?.status === 404
          ? "Video file not found"
          : err.message === "Empty video stream received"
          ? "Invalid video stream"
          : "Failed to stream video. Try again or contact support."
      );
      return null;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axiosInstance.get(`/User/GetMediaDetails`, {
          params: { mediaId },
        });
        setMedia(response.data);

        if (response.data.type?.toLowerCase() === "movie") {
          const movieFile = response.data.movieFiles?.[0];
          if (movieFile) await getStream(movieFile.streamUrl);
        } else if (
          response.data.type?.toLowerCase() === "series" &&
          response.data.seasons?.length > 0 &&
          response.data.seasons[0].episodes?.length > 0
        ) {
          const firstEpisode = response.data.seasons[0].episodes[0];
          await getStream(firstEpisode.streamUrl);
        } else {
          setError("No playable content available");
        }
      } catch (err) {
        setError(
          err.response?.status === 404
            ? "Media not found"
            : "Failed to fetch media details"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, [mediaId]);

  // Clean up blob URLs
  useEffect(() => {
    return () => {
      if (currentVideo) URL.revokeObjectURL(currentVideo);
    };
  }, [currentVideo]);

  if (loading) return <CircularProgress sx={{ m: 3 }} />;
  if (error)
    return (
      <Typography color="error" sx={{ m: 3 }}>
        {error}
      </Typography>
    );
  if (!media) return <Typography sx={{ m: 3 }}>No media found.</Typography>;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom>
        {media.title}
      </Typography>

      {currentVideo && (
        <Box sx={{ mb: 4 }}>
          <video
            src={currentVideo}
            controls
            muted
            style={{ width: "100%", maxWidth: "1200px", borderRadius: 5 }}
          >
            Your browser does not support the video tag.
          </video>
        </Box>
      )}

      {media.type?.toLowerCase() === "series" && media.seasons?.length > 0 && (
        <Box>
          <Typography variant="h4" gutterBottom>
            Seasons & Episodes
          </Typography>
          {media.seasons.map((season) => (
            <Box key={season.seasonId} sx={{ mb: 3 }}>
              <Typography variant="h5" gutterBottom>
                {season.title || `Season ${season.seasonNumber}`}
              </Typography>
              <Grid container spacing={1}>
                {season.episodes.map((ep) => (
                  <Grid item key={ep.episodeId}>
                    <Button
                      variant="outlined"
                      onClick={() => getStream(ep.streamUrl)}
                    >
                      {ep.title || `Episode ${ep.episodeNumber}`}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Box>
      )}

      {media.type?.toLowerCase() === "movie" && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1">{media.description}</Typography>
          <Typography variant="body2">Year: {media.releaseYear}</Typography>
          <Typography variant="body2">Rating: {media.rating}</Typography>
        </Box>
      )}
    </Box>
  );
}
