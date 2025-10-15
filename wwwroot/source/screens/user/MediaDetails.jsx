import React, { useEffect, useState, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Button,
  CircularProgress,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Fade,
} from "@mui/material";
import axiosInstance from "../../axiosConfig";
import { UserContext } from "../../UserContext";

export default function MediaDetailPage() {
  const { mediaId } = useParams();
  const { userId } = useContext(UserContext); // Assume userId from context
  const [media, setMedia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentVideo, setCurrentVideo] = useState("");
  const [selectedSeason, setSelectedSeason] = useState(0);
  const [currentEpisodeId, setCurrentEpisodeId] = useState(null);
  const videoRef = useRef(null);
  const progressTimeoutRef = useRef(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await axiosInstance.get(`/User/GetMediaDetails`, {
          params: { mediaId },
        });
        setMedia(response.data);
        await setInitialVideo(response.data);
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

  const setInitialVideo = async (data) => {
    if (data.type === "movie" && data.movieFiles?.length > 0) {
      const movieFile = data.movieFiles[0];
      const progress = movieFile.progress;
      setCurrentVideo(
        `/User/StreamMedia?filePath=${encodeURIComponent(movieFile.streamUrl)}`
      );
      if (progress && !progress.isCompleted && videoRef.current) {
        setTimeout(() => {
          videoRef.current.currentTime = progress.lastPosition;
        }, 500);
      }
    } else if (data.type === "series" && data.seasons?.length > 0) {
      const overallProgress = data.overallProgress;
      let seasonIndex = 0;
      let episode = data.seasons[0].episodes[0];
      if (
        overallProgress &&
        !overallProgress.isCompleted &&
        overallProgress.episodeId
      ) {
        // Find episode with progress
        data.seasons.forEach((season, index) => {
          const ep = season.episodes.find(
            (e) => e.episodeId === overallProgress.episodeId
          );
          if (ep) {
            seasonIndex = index;
            episode = ep;
          }
        });
      }
      setSelectedSeason(seasonIndex);
      setCurrentVideo(
        `/User/StreamMedia?filePath=${encodeURIComponent(episode.streamUrl)}`
      );
      setCurrentEpisodeId(episode.episodeId);
      if (
        overallProgress &&
        !overallProgress.isCompleted &&
        overallProgress.episodeId === episode.episodeId &&
        videoRef.current
      ) {
        setTimeout(() => {
          videoRef.current.currentTime = overallProgress.lastPosition;
        }, 500);
      }
    } else {
      setError("No playable content available");
    }
  };

  useEffect(() => {
    return () => {
      if (currentVideo) URL.revokeObjectURL(currentVideo);
      if (progressTimeoutRef.current) clearTimeout(progressTimeoutRef.current);
    };
  }, [currentVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !userId || !media) return;

    const handleTimeUpdate = () => {
      if (progressTimeoutRef.current) clearTimeout(progressTimeoutRef.current);
      progressTimeoutRef.current = setTimeout(async () => {
        const position = Math.floor(video.currentTime);
        const duration = Math.floor(video.duration || 0);
        const isCompleted = position >= duration * 0.95;

        try {
          await axiosInstance.post("/User/UpdateProgress", {
            mediaId: parseInt(mediaId),
            episodeId: media.type === "series" ? currentEpisodeId : null,
            position,
            duration,
            isCompleted,
          });
        } catch (err) {
          console.error("Failed to update progress:", err);
        }
      }, 10000); // Update every 10 seconds
    };

    const handleEnded = async () => {
      try {
        await axiosInstance.post("/User/UpdateProgress", {
          mediaId: parseInt(mediaId),
          episodeId: media.type === "series" ? currentEpisodeId : null,
          position: Math.floor(video.duration || 0),
          duration: Math.floor(video.duration || 0),
          isCompleted: true,
        });
      } catch (err) {
        console.error("Failed to update progress on end:", err);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
      if (progressTimeoutRef.current) clearTimeout(progressTimeoutRef.current);
    };
  }, [currentVideo, userId, mediaId, currentEpisodeId, media]);

  const handleEpisodeClick = async (streamUrl, episodeId, progress) => {
    setCurrentVideo(
      `/User/StreamMedia?filePath=${encodeURIComponent(streamUrl)}`
    );
    setCurrentEpisodeId(episodeId);
    if (progress && !progress.isCompleted && videoRef.current) {
      setTimeout(() => {
        videoRef.current.currentTime = progress.lastPosition;
      }, 500);
    }
  };

  const handleSeasonChange = (event) => {
    const newSeasonIndex = event.target.value;
    setSelectedSeason(newSeasonIndex);
    const season = media.seasons[newSeasonIndex];
    if (season.episodes?.length > 0) {
      const firstEp = season.episodes[0];
      const progress = firstEp.progress;
      setCurrentVideo(
        `/User/StreamMedia?filePath=${encodeURIComponent(firstEp.streamUrl)}`
      );
      setCurrentEpisodeId(firstEp.episodeId);
      if (progress && !progress.isCompleted && videoRef.current) {
        setTimeout(() => {
          videoRef.current.currentTime = progress.lastPosition;
        }, 500);
      }
    }
  };

  if (loading) {
    return (
      <Fade in={loading} timeout={400}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            bgcolor: "background.default",
          }}
        >
          <CircularProgress sx={{ color: "primary.main", mb: 2 }} />
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", fontWeight: 500 }}
          >
            Loading media details...
          </Typography>
        </Box>
      </Fade>
    );
  }

  if (error) {
    return (
      <Fade in={!!error} timeout={400}>
        <Box
          sx={{
            bgcolor: "rgba(255, 75, 75, 0.1)",
            border: "1px solid rgba(255, 75, 75, 0.3)",
            borderRadius: 2,
            p: 2,
            m: 3,
            textAlign: "center",
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "error.main", fontWeight: 500 }}
          >
            {error}
          </Typography>
        </Box>
      </Fade>
    );
  }

  if (!media) {
    return (
      <Fade in timeout={400}>
        <Box sx={{ m: 3, textAlign: "center" }}>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            No media found.
          </Typography>
        </Box>
      </Fade>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        py: { xs: 3, sm: 4 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Fade in timeout={600}>
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "text.primary",
              mb: 3,
              letterSpacing: "-0.025em",
            }}
          >
            {media.title}
          </Typography>

          {currentVideo && (
            <Box
              sx={{
                mb: 4,
                maxWidth: "100%",
                mx: "auto",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <video
                ref={videoRef}
                src={currentVideo}
                controls
                autoPlay={false}
                style={{
                  width: "100%",
                  maxWidth: "1200px",
                  display: "block",
                }}
                aria-label={`Video player for ${media.title}`}
              >
                Your browser does not support the video tag.
              </video>
            </Box>
          )}

          {media.type === "series" && media.seasons?.length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "text.primary",
                  mb: 2,
                }}
              >
                Seasons & Episodes
              </Typography>

              {media.seasons.length > 1 && (
                <FormControl sx={{ minWidth: 200, mb: 3 }}>
                  <InputLabel id="season-select-label">
                    Select Season
                  </InputLabel>
                  <Select
                    labelId="season-select-label"
                    value={selectedSeason}
                    label="Select Season"
                    onChange={handleSeasonChange}
                    sx={{
                      bgcolor: "background.paper",
                      borderRadius: 2,
                      "& .MuiSelect-select": {
                        py: 1.5,
                      },
                      "&:hover": {
                        bgcolor: "rgba(99, 102, 241, 0.05)",
                      },
                    }}
                    aria-label="Select a season"
                  >
                    {media.seasons.map((season, index) => (
                      <MenuItem
                        key={season.seasonId}
                        value={index}
                        sx={{ color: "text.primary" }}
                      >
                        {season.title || `Season ${season.seasonNumber}`}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}

              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "text.primary",
                    mb: 2,
                  }}
                >
                  {media.seasons[selectedSeason].title ||
                    `Season ${media.seasons[selectedSeason].seasonNumber}`}
                </Typography>
                <Grid container spacing={1.5}>
                  {media.seasons[selectedSeason].episodes.map((ep) => (
                    <Grid item key={ep.episodeId} xs={12} sm={6} md={4} lg={3}>
                      <Button
                        variant="outlined"
                        onClick={() =>
                          handleEpisodeClick(
                            ep.streamUrl,
                            ep.episodeId,
                            ep.progress
                          )
                        }
                        fullWidth
                        sx={{
                          py: 1.5,
                          borderRadius: 2,
                          textTransform: "none",
                          fontWeight: 500,
                          color: "text.primary",
                          borderColor: "rgba(255, 255, 255, 0.2)",
                          bgcolor: currentVideo.includes(
                            encodeURIComponent(ep.streamUrl)
                          )
                            ? "rgba(99, 102, 241, 0.1)"
                            : "transparent",
                          "&:hover": {
                            bgcolor: "rgba(99, 102, 241, 0.2)",
                            borderColor: "primary.main",
                            transform: "translateY(-2px)",
                          },
                          transition: "all 0.3s ease",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 0.5,
                        }}
                        aria-label={`Play ${
                          ep.title || `Episode ${ep.episodeNumber}`
                        }`}
                      >
                        <Typography variant="body2">
                          {ep.title || `Episode ${ep.episodeNumber}`}
                        </Typography>
                        {ep.progress && !ep.progress.isCompleted && (
                          <Typography
                            variant="caption"
                            sx={{
                              fontSize: "0.75rem",
                              color: "text.secondary",
                            }}
                          >
                            •{" "}
                            {Math.floor(
                              (ep.progress.lastPosition /
                                ep.progress.duration) *
                                100
                            )}
                            % watched
                          </Typography>
                        )}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          )}

          {media.type === "movie" && (
            <Box sx={{ mt: 3, maxWidth: "800px" }}>
              <Typography variant="body1" sx={{ color: "text.primary", mb: 1 }}>
                {media.description || "No description available."}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mb: 0.5 }}
              >
                Year: {media.releaseYear || "N/A"}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Rating: {media.rating || "N/A"}
              </Typography>
              {media.movieFiles?.[0]?.progress &&
                !media.movieFiles[0].progress.isCompleted && (
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mt: 1 }}
                  >
                    Progress:{" "}
                    {Math.floor(
                      (media.movieFiles[0].progress.lastPosition /
                        media.movieFiles[0].progress.duration) *
                        100
                    )}
                    % watched
                  </Typography>
                )}
            </Box>
          )}
        </Box>
      </Fade>
    </Box>
  );
}
