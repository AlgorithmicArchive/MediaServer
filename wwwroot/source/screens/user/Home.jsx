import React, { useState, useEffect, useContext } from "react";
import { Box, Typography, Grid, CircularProgress, Fade } from "@mui/material";
import MovieCard from "../../components/MovieCard";
import axiosInstance from "../../axiosConfig";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

export default function HomePage() {
  const { userId } = useContext(UserContext);
  const [mediaItems, setMediaItems] = useState([]);
  const [continueWatching, setContinueWatching] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMedia = async () => {
      setLoading(true);
      setError("");

      try {
        const [mediaResponse, progressResponse] = await Promise.all([
          axiosInstance.get("/User/GetMedia"),
          userId
            ? axiosInstance.get("/User/GetContinueWatching", {
                params: { userId },
              })
            : Promise.resolve({ data: [] }),
        ]);

        setMediaItems(mediaResponse.data);
        setContinueWatching(
          progressResponse.data.map((item) => ({
            mediaId: item.mediaId,
            title: item.title,
            description: item.description,
            type: item.type,
            thumbnailPath: item.thumbnailPath,
            trailerPath: item.trailerPath,
            episodeId: item.episodeId,
            lastPosition: item.lastPosition,
            duration: item.duration,
            resumeUrl:
              item.type.toLowerCase() === "movie"
                ? `/user/media/${item.mediaId}`
                : `/user/media/${item.mediaId}?episodeId=${item.episodeId}`,
          }))
        );
      } catch (err) {
        setError(err.response?.data?.error || "Failed to fetch media");
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, [userId]);

  const movies = mediaItems.filter(
    (item) => item.type && item.type.toLowerCase() === "movie"
  );
  const series = mediaItems.filter(
    (item) => item.type && item.type.toLowerCase() === "series"
  );

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "background.default",
        py: 4,
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {loading && (
        <Fade in={loading} timeout={400}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "50vh",
            }}
          >
            <CircularProgress sx={{ color: "primary.main", mb: 2 }} />
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", fontWeight: 500 }}
            >
              Loading your media...
            </Typography>
          </Box>
        </Fade>
      )}

      {error && !loading && (
        <Fade in={!!error} timeout={400}>
          <Box
            sx={{
              bgcolor: "rgba(255, 75, 75, 0.1)",
              border: "1px solid rgba(255, 75, 75, 0.3)",
              borderRadius: 2,
              p: 2,
              mb: 3,
              textAlign: "center",
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
      )}

      {!loading && continueWatching.length > 0 && (
        <Fade in={!loading} timeout={600}>
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "text.primary",
                mb: 3,
                letterSpacing: "-0.025em",
              }}
            >
              Continue Watching
            </Typography>
            <Grid container spacing={{ xs: 2, sm: 3 }}>
              {continueWatching.map((item) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={`${item.mediaId}-${item.episodeId || "movie"}`}
                >
                  <Box
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      "&:hover .progress-bar": {
                        opacity: 1,
                      },
                    }}
                    onClick={() => navigate(item.resumeUrl)}
                    role="button"
                    aria-label={`Resume ${item.title}`}
                  >
                    <MovieCard
                      title={item.title || "No title"}
                      description={item.description || "-"}
                      posterUrl={
                        item.thumbnailPath ? `/${item.thumbnailPath}` : ""
                      }
                      trailerUrl={
                        item.trailerPath ? `/${item.trailerPath}` : ""
                      }
                      mediaId={item.mediaId}
                    />
                    <Box
                      className="progress-bar"
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        bgcolor: "rgba(0,0,0,0.5)",
                        opacity: 0.7,
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      <Box
                        sx={{
                          width: `${Math.min(
                            (item.lastPosition / item.duration) * 100,
                            100
                          )}%`,
                          height: "100%",
                          bgcolor: "primary.main",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        position: "absolute",
                        bottom: 8,
                        left: 8,
                        color: "text.primary",
                        bgcolor: "rgba(0,0,0,0.6)",
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                      }}
                    >
                      {Math.floor((item.lastPosition / item.duration) * 100)}%
                      watched
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fade>
      )}

      {!loading && (
        <Fade in={!loading} timeout={600}>
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "text.primary",
                mb: 3,
                letterSpacing: "-0.025em",
              }}
            >
              Movies
            </Typography>
            <Grid container spacing={{ xs: 2, sm: 3 }}>
              {movies.length > 0 ? (
                movies.map((item) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={item.mediaId}>
                    <MovieCard
                      title={item.title || "No title"}
                      description={item.description || "-"}
                      posterUrl={
                        item.thumbnailPath ? `/${item.thumbnailPath}` : ""
                      }
                      trailerUrl={
                        item.trailerPath ? `/${item.trailerPath}` : ""
                      }
                      mediaId={item.mediaId}
                    />
                  </Grid>
                ))
              ) : (
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", ml: 2 }}
                >
                  No movies found.
                </Typography>
              )}
            </Grid>
          </Box>
        </Fade>
      )}

      {!loading && (
        <Fade in={!loading} timeout={600}>
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "text.primary",
                mb: 3,
                letterSpacing: "-0.025em",
              }}
            >
              Series
            </Typography>
            <Grid container spacing={{ xs: 2, sm: 3 }}>
              {series.length > 0 ? (
                series.map((item) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={item.mediaId}>
                    <MovieCard
                      title={item.title || "No title"}
                      description={item.description || "-"}
                      posterUrl={
                        item.thumbnailPath ? `/${item.thumbnailPath}` : ""
                      }
                      trailerUrl={
                        item.trailerPath ? `/${item.trailerPath}` : ""
                      }
                      mediaId={item.mediaId}
                    />
                  </Grid>
                ))
              ) : (
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", ml: 2 }}
                >
                  No series found.
                </Typography>
              )}
            </Grid>
          </Box>
        </Fade>
      )}
    </Box>
  );
}
