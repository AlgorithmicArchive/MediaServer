import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  CircularProgress,
  Fade,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Collapse,
  Button,
} from "@mui/material";
import { Delete, ExpandMore, ExpandLess } from "@mui/icons-material";
import axiosInstance from "../../axiosConfig";
import { UserContext } from "../../UserContext";

export default function ManageMedia() {
  const { userId, userType } = useContext(UserContext);
  const [mediaItems, setMediaItems] = useState([]);
  const [seriesDetails, setSeriesDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [deleteDialog, setDeleteDialog] = useState({
    open: false,
    type: "", // "media", "season", "episode"
    id: null,
    title: "",
  });
  const [expandedSeries, setExpandedSeries] = useState({}); // Track expanded series
  const [expandedSeasons, setExpandedSeasons] = useState({}); // Track expanded seasons

  useEffect(() => {
    if (userType !== "Admin") {
      setError("Unauthorized access. Admin userType required.");
      return;
    }

    const fetchMedia = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await axiosInstance.get("/Admin/GetMedia");
        setMediaItems(response.data);

        // Fetch details for series
        const series = response.data.filter(
          (item) => item.type?.toLowerCase() === "series"
        );
        const detailsPromises = series.map((item) =>
          axiosInstance.get("/Admin/GetMediaDetails", {
            params: { mediaId: item.mediaId },
          })
        );
        const detailsResponses = await Promise.all(detailsPromises);
        const detailsMap = {};
        detailsResponses.forEach((res, index) => {
          detailsMap[series[index].mediaId] = res.data;
        });
        setSeriesDetails(detailsMap);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to fetch media");
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, [userType]);

  const handleDelete = async () => {
    try {
      const { type, id } = deleteDialog;
      if (type === "media") {
        await axiosInstance.post(`/Admin/DeleteMedia`, { mediaId: id });
      } else if (type === "season") {
        await axiosInstance.post(`/Admin/DeleteSeason`, { seasonId: id });
      } else if (type === "episode") {
        await axiosInstance.post(`/Admin/DeleteEpisode`, { episodeId: id });
      }
      // Refresh media list
      const response = await axiosInstance.get("/Admin/GetMedia");
      setMediaItems(response.data);
      const series = response.data.filter(
        (item) => item.type?.toLowerCase() === "series"
      );
      const detailsPromises = series.map((item) =>
        axiosInstance.get("/Admin/GetMediaDetails", {
          params: { mediaId: item.mediaId },
        })
      );
      const detailsResponses = await Promise.all(detailsPromises);
      const detailsMap = {};
      detailsResponses.forEach((res, index) => {
        detailsMap[series[index].mediaId] = res.data;
      });
      setSeriesDetails(detailsMap);
      setExpandedSeries({}); // Reset expanded state
      setExpandedSeasons({});
      setDeleteDialog({ open: false, type: "", id: null, title: "" });
    } catch (err) {
      setError(err.response?.data?.error || "Failed to delete item");
      setDeleteDialog({ open: false, type: "", id: null, title: "" });
    }
  };

  const openDeleteDialog = (type, id, title) => {
    setDeleteDialog({ open: true, type, id, title });
  };

  const closeDeleteDialog = () => {
    setDeleteDialog({ open: false, type: "", id: null, title: "" });
  };

  const toggleSeriesExpansion = (mediaId) => {
    setExpandedSeries((prev) => ({
      ...prev,
      [mediaId]: !prev[mediaId],
    }));
  };

  const toggleSeasonExpansion = (seasonId) => {
    setExpandedSeasons((prev) => ({
      ...prev,
      [seasonId]: !prev[seasonId],
    }));
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
            Loading media...
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

  const movies = mediaItems.filter(
    (item) => item.type?.toLowerCase() === "movie"
  );
  const series = mediaItems.filter(
    (item) => item.type?.toLowerCase() === "series"
  );

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
              mb: 4,
              letterSpacing: "-0.025em",
            }}
          >
            Admin Media Management
          </Typography>

          {/* Movies Table */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "text.primary",
                mb: 2,
                letterSpacing: "-0.025em",
              }}
            >
              Movies
            </Typography>
            <TableContainer
              component={Paper}
              sx={{ bgcolor: "background.paper", borderRadius: 2 }}
            >
              <Table aria-label="movies table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "text.primary", fontWeight: 600 }}>
                      Title
                    </TableCell>
                    <TableCell sx={{ color: "text.primary", fontWeight: 600 }}>
                      Year
                    </TableCell>
                    <TableCell sx={{ color: "text.primary", fontWeight: 600 }}>
                      Rating
                    </TableCell>
                    <TableCell sx={{ color: "text.primary", fontWeight: 600 }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {movies.length > 0 ? (
                    movies.map((item) => (
                      <TableRow
                        key={item.mediaId}
                        sx={{
                          "&:hover": { bgcolor: "rgba(99, 102, 241, 0.05)" },
                        }}
                      >
                        <TableCell sx={{ color: "text.primary" }}>
                          {item.title || "No title"}
                        </TableCell>
                        <TableCell sx={{ color: "text.secondary" }}>
                          {item.releaseYear || "N/A"}
                        </TableCell>
                        <TableCell sx={{ color: "text.secondary" }}>
                          {item.rating || "N/A"}
                        </TableCell>
                        <TableCell>
                          <IconButton
                            color="error"
                            onClick={() =>
                              openDeleteDialog(
                                "media",
                                item.mediaId,
                                item.title
                              )
                            }
                            aria-label={`Delete ${item.title}`}
                          >
                            <Delete />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} sx={{ color: "text.secondary" }}>
                        No movies found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Series Table */}
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "text.primary",
                mb: 2,
                letterSpacing: "-0.025em",
              }}
            >
              Series
            </Typography>
            <TableContainer
              component={Paper}
              sx={{ bgcolor: "background.paper", borderRadius: 2 }}
            >
              <Table aria-label="series table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "text.primary",
                        fontWeight: 600,
                        width: "40px",
                      }}
                    />
                    <TableCell sx={{ color: "text.primary", fontWeight: 600 }}>
                      Title
                    </TableCell>
                    <TableCell sx={{ color: "text.primary", fontWeight: 600 }}>
                      Year
                    </TableCell>
                    <TableCell sx={{ color: "text.primary", fontWeight: 600 }}>
                      Rating
                    </TableCell>
                    <TableCell sx={{ color: "text.primary", fontWeight: 600 }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {series.length > 0 ? (
                    series.map((item) => (
                      <React.Fragment key={item.mediaId}>
                        <TableRow
                          sx={{
                            "&:hover": { bgcolor: "rgba(99, 102, 241, 0.05)" },
                          }}
                        >
                          <TableCell>
                            {seriesDetails[item.mediaId]?.seasons?.length >
                              0 && (
                              <IconButton
                                onClick={() =>
                                  toggleSeriesExpansion(item.mediaId)
                                }
                                aria-label={
                                  expandedSeries[item.mediaId]
                                    ? `Collapse ${item.title}`
                                    : `Expand ${item.title}`
                                }
                              >
                                {expandedSeries[item.mediaId] ? (
                                  <ExpandLess sx={{ color: "text.primary" }} />
                                ) : (
                                  <ExpandMore sx={{ color: "text.primary" }} />
                                )}
                              </IconButton>
                            )}
                          </TableCell>
                          <TableCell sx={{ color: "text.primary" }}>
                            {item.title || "No title"}
                          </TableCell>
                          <TableCell sx={{ color: "text.secondary" }}>
                            {item.releaseYear || "N/A"}
                          </TableCell>
                          <TableCell sx={{ color: "text.secondary" }}>
                            {item.rating || "N/A"}
                          </TableCell>
                          <TableCell>
                            <IconButton
                              color="error"
                              onClick={() =>
                                openDeleteDialog(
                                  "media",
                                  item.mediaId,
                                  item.title
                                )
                              }
                              aria-label={`Delete ${item.title}`}
                            >
                              <Delete />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            colSpan={5}
                            sx={{ p: 0, borderBottom: "none" }}
                          >
                            <Collapse
                              in={expandedSeries[item.mediaId]}
                              timeout="auto"
                              unmountOnExit
                            >
                              <Box
                                sx={{
                                  bgcolor: "rgba(255, 255, 255, 0.05)",
                                  p: 2,
                                }}
                              >
                                {seriesDetails[item.mediaId]?.seasons?.map(
                                  (season) => (
                                    <React.Fragment key={season.seasonId}>
                                      <TableRow
                                        sx={{
                                          "&:hover": {
                                            bgcolor: "rgba(99, 102, 241, 0.1)",
                                          },
                                        }}
                                      >
                                        <TableCell
                                          sx={{ pl: 4, width: "40px" }}
                                        >
                                          <IconButton
                                            onClick={() =>
                                              toggleSeasonExpansion(
                                                season.seasonId
                                              )
                                            }
                                            aria-label={
                                              expandedSeasons[season.seasonId]
                                                ? `Collapse season ${season.seasonNumber}`
                                                : `Expand season ${season.seasonNumber}`
                                            }
                                          >
                                            {expandedSeasons[
                                              season.seasonId
                                            ] ? (
                                              <ExpandLess
                                                sx={{ color: "text.primary" }}
                                              />
                                            ) : (
                                              <ExpandMore
                                                sx={{ color: "text.primary" }}
                                              />
                                            )}
                                          </IconButton>
                                        </TableCell>
                                        <TableCell
                                          sx={{ color: "text.primary" }}
                                        >
                                          {season.title ||
                                            `Season ${season.seasonNumber}`}
                                        </TableCell>
                                        <TableCell />
                                        <TableCell />
                                        <TableCell>
                                          <IconButton
                                            color="error"
                                            onClick={() =>
                                              openDeleteDialog(
                                                "season",
                                                season.seasonId,
                                                season.title ||
                                                  `Season ${season.seasonNumber}`
                                              )
                                            }
                                            aria-label={`Delete ${
                                              season.title ||
                                              `Season ${season.seasonNumber}`
                                            }`}
                                          >
                                            <Delete />
                                          </IconButton>
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell
                                          colSpan={5}
                                          sx={{ p: 0, borderBottom: "none" }}
                                        >
                                          <Collapse
                                            in={
                                              expandedSeasons[season.seasonId]
                                            }
                                            timeout="auto"
                                            unmountOnExit
                                          >
                                            <Box
                                              sx={{
                                                bgcolor:
                                                  "rgba(255, 255, 255, 0.02)",
                                                p: 2,
                                              }}
                                            >
                                              <Table
                                                size="small"
                                                aria-label={`episodes table for season ${season.seasonNumber}`}
                                              >
                                                <TableHead>
                                                  <TableRow>
                                                    <TableCell
                                                      sx={{
                                                        color: "text.primary",
                                                        fontWeight: 600,
                                                        pl: 6,
                                                      }}
                                                    >
                                                      Episode
                                                    </TableCell>
                                                    <TableCell />
                                                    <TableCell />
                                                    <TableCell
                                                      sx={{
                                                        color: "text.primary",
                                                        fontWeight: 600,
                                                      }}
                                                    >
                                                      Actions
                                                    </TableCell>
                                                  </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                  {season.episodes.map(
                                                    (episode) => (
                                                      <TableRow
                                                        key={episode.episodeId}
                                                        sx={{
                                                          "&:hover": {
                                                            bgcolor:
                                                              "rgba(99, 102, 241, 0.05)",
                                                          },
                                                        }}
                                                      >
                                                        <TableCell
                                                          sx={{
                                                            color:
                                                              "text.primary",
                                                            pl: 6,
                                                          }}
                                                        >
                                                          {episode.title ||
                                                            `Episode ${episode.episodeNumber}`}
                                                        </TableCell>
                                                        <TableCell />
                                                        <TableCell />
                                                        <TableCell>
                                                          <IconButton
                                                            color="error"
                                                            onClick={() =>
                                                              openDeleteDialog(
                                                                "episode",
                                                                episode.episodeId,
                                                                episode.title ||
                                                                  `Episode ${episode.episodeNumber}`
                                                              )
                                                            }
                                                            aria-label={`Delete ${
                                                              episode.title ||
                                                              `Episode ${episode.episodeNumber}`
                                                            }`}
                                                          >
                                                            <Delete />
                                                          </IconButton>
                                                        </TableCell>
                                                      </TableRow>
                                                    )
                                                  )}
                                                </TableBody>
                                              </Table>
                                            </Box>
                                          </Collapse>
                                        </TableCell>
                                      </TableRow>
                                    </React.Fragment>
                                  )
                                )}
                              </Box>
                            </Collapse>
                          </TableCell>
                        </TableRow>
                      </React.Fragment>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} sx={{ color: "text.secondary" }}>
                        No series found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Delete Confirmation Dialog */}
          <Dialog
            open={deleteDialog.open}
            onClose={closeDeleteDialog}
            aria-labelledby="delete-dialog-title"
            aria-describedby="delete-dialog-description"
          >
            <DialogTitle id="delete-dialog-title">Confirm Deletion</DialogTitle>
            <DialogContent>
              <DialogContentText id="delete-dialog-description">
                Are you sure you want to delete "{deleteDialog.title}"? This
                action cannot be undone.
                {deleteDialog.type === "media" &&
                  " This will also delete all associated seasons and episodes."}
                {deleteDialog.type === "season" &&
                  " This will also delete all episodes in this season."}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={closeDeleteDialog} color="primary">
                Cancel
              </Button>
              <Button
                onClick={handleDelete}
                color="error"
                variant="contained"
                autoFocus
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Fade>
    </Box>
  );
}
