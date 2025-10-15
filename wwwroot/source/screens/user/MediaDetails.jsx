import React, {
  useEffect,
  useState,
  useRef,
  useContext,
  useCallback,
} from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  const { userId } = useContext(UserContext);
  const navigate = useNavigate();

  const [media, setMedia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentVideo, setCurrentVideo] = useState("");
  const [selectedSeason, setSelectedSeason] = useState(0);
  const [currentEpisodeId, setCurrentEpisodeId] = useState(null);
  const [currentProgress, setCurrentProgress] = useState(null);

  const videoRef = useRef(null);
  const lastPositionRef = useRef(0);
  const lastUpdateRef = useRef(0);
  const progressIntervalRef = useRef(null);

  // ---------------- FETCH MEDIA ----------------
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await axiosInstance.get(`/User/GetMediaDetails`, {
          params: { mediaId },
        });
        console.log("Media details:", response.data);
        setMedia(response.data);
        await setInitialVideo(response.data);
      } catch (err) {
        setError(
          err.response?.status === 404
            ? "Media not found"
            : "Failed to fetch media details"
        );
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, [mediaId]);

  // ---------------- INITIAL VIDEO ----------------
  const setInitialVideo = async (data) => {
    if (data.type === "movie" && data.movieFiles?.length > 0) {
      const movieFile = data.movieFiles[0];
      setCurrentVideo(
        `/User/StreamMedia?filePath=${encodeURIComponent(movieFile.streamUrl)}`
      );
      setCurrentProgress(movieFile.progress);
      setCurrentEpisodeId(null);
    } else if (data.type === "series" && data.seasons?.length > 0) {
      const overallProgress = data.overallProgress;
      let seasonIndex = 0;
      let episode = data.seasons[0].episodes[0];
      if (
        overallProgress &&
        !overallProgress.isCompleted &&
        overallProgress.episodeId
      ) {
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
      setCurrentProgress(episode.progress || overallProgress);
    } else {
      setError("No playable content available");
    }
  };

  // ---------------- SAVE PROGRESS ----------------
  const updateProgress = useCallback(
    async (position, duration, isCompleted = false) => {
      try {
        await axiosInstance.post("/User/UpdateProgress", {
          mediaId: parseInt(mediaId),
          episodeId: media?.type === "series" ? currentEpisodeId : null,
          position,
          duration,
          isCompleted,
        });
        setCurrentProgress({ lastPosition: position, duration, isCompleted });
        console.log(
          `✅ Saved progress: ${position}/${duration}, completed: ${isCompleted}`
        );
      } catch (err) {
        console.error("❌ Failed to update progress:", err);
      }
    },
    [mediaId, media?.type, currentEpisodeId]
  );

  // ---------------- RESUME VIDEO AT LAST POSITION ----------------
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !currentVideo || !currentProgress) return;

    const handleLoadedMetadata = () => {
      if (currentProgress && !currentProgress.isCompleted) {
        video.currentTime = currentProgress.lastPosition;
        console.log(
          `⏩ Resumed at ${
            currentProgress.lastPosition
          }s (Progress: ${JSON.stringify(currentProgress)})`
        );
      }
    };

    video.onloadedmetadata = handleLoadedMetadata;
    return () => (video.onloadedmetadata = null);
  }, [currentVideo, currentProgress]);

  // ---------------- HANDLE PROGRESS UPDATES ----------------
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !userId || !media) return;

    // Clear any previous interval
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    progressIntervalRef.current = setInterval(async () => {
      if (video.paused || video.ended) return;

      const position = Math.floor(video.currentTime);
      const duration = Math.floor(video.duration || 0);
      const isCompleted = duration > 0 && position >= duration * 0.95;

      // Update every 10 seconds of progress
      if (position - lastUpdateRef.current >= 10) {
        lastUpdateRef.current = position;
        await updateProgress(position, duration, isCompleted);
      }

      lastPositionRef.current = position;
    }, 1000); // Check every second, but only save every 10s

    return () => {
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);

      // Save last known progress on cleanup
      const position = lastPositionRef.current;
      const duration = Math.floor(video.duration || 0);
      const isCompleted = duration > 0 && position >= duration * 0.95;
      if (position > 0) updateProgress(position, duration, isCompleted);
    };
  }, [updateProgress, userId, media]);

  // ---------------- HANDLE PAUSE / ENDED ----------------
  const handlePause = async () => {
    const video = videoRef.current;
    if (!video) return;
    const position = Math.floor(video.currentTime);
    const duration = Math.floor(video.duration || 0);
    const isCompleted = duration > 0 && position >= duration * 0.95;
    if (position > 0) await updateProgress(position, duration, isCompleted);
  };

  const handleEnded = async () => {
    const video = videoRef.current;
    if (!video) return;
    const duration = Math.floor(video.duration || 0);
    await updateProgress(duration, duration, true);
  };

  // ---------------- EPISODE / SEASON CHANGE ----------------
  const handleEpisodeClick = (streamUrl, episodeId, progress) => {
    setCurrentVideo(
      `/User/StreamMedia?filePath=${encodeURIComponent(streamUrl)}`
    );
    setCurrentEpisodeId(episodeId);
    setCurrentProgress(progress);
    lastPositionRef.current = 0;
    lastUpdateRef.current = 0;
  };

  const handleSeasonChange = (event) => {
    const newSeasonIndex = event.target.value;
    setSelectedSeason(newSeasonIndex);
    const season = media.seasons[newSeasonIndex];
    if (season.episodes?.length > 0) {
      const firstEp = season.episodes[0];
      setCurrentVideo(
        `/User/StreamMedia?filePath=${encodeURIComponent(firstEp.streamUrl)}`
      );
      setCurrentEpisodeId(firstEp.episodeId);
      setCurrentProgress(firstEp.progress);
      lastPositionRef.current = 0;
      lastUpdateRef.current = 0;
    }
  };

  // ---------------- BEFORE UNLOAD ----------------
  useEffect(() => {
    const handleBeforeUnload = () => {
      const video = videoRef.current;
      if (!video) return;
      const position = Math.floor(video.currentTime);
      const duration = Math.floor(video.duration || 0);
      const isCompleted = duration > 0 && position >= duration * 0.95;
      if (position > 0)
        updateProgress(position, duration, isCompleted)
          .catch(() => {})
          .finally(() => console.log(`💾 Saved before unload at ${position}s`));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [updateProgress]);

  // ---------------- UI ----------------
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
      sx={{ minHeight: "100vh", bgcolor: "background.default", py: 3, px: 2 }}
    >
      <Fade in timeout={600}>
        <Box>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, color: "text.primary", mb: 3 }}
          >
            {media.title}
          </Typography>

          {currentVideo && (
            <Box
              sx={{
                mb: 4,
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              }}
            >
              <video
                ref={videoRef}
                src={currentVideo}
                controls
                autoPlay={false}
                onPause={handlePause}
                onEnded={handleEnded}
                style={{ width: "100%", display: "block" }}
              />
            </Box>
          )}

          {media.type === "series" && media.seasons?.length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
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
                    }}
                  >
                    {media.seasons.map((season, index) => (
                      <MenuItem key={season.seasonId} value={index}>
                        {season.title || `Season ${season.seasonNumber}`}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}

              <Grid container spacing={1.5}>
                {media.seasons[selectedSeason].episodes.map((ep) => (
                  <Grid item key={ep.episodeId} xs={12} sm={6} md={4} lg={3}>
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={() =>
                        handleEpisodeClick(
                          ep.streamUrl,
                          ep.episodeId,
                          ep.progress
                        )
                      }
                      sx={{
                        borderRadius: 2,
                        py: 1.5,
                        color: "text.primary",
                        borderColor: "rgba(255,255,255,0.2)",
                      }}
                    >
                      <Typography variant="body2">
                        {ep.title || `Episode ${ep.episodeNumber}`}
                      </Typography>
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Box>
      </Fade>
    </Box>
  );
}
