import { Box, Typography, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard";
import axiosInstance from "../../axiosConfig";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [mediaItems, setMediaItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMedia = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await axiosInstance.get("/User/GetMedia");
        setMediaItems(response.data);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to fetch media");
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  const movies = mediaItems.filter(
    (item) => item.type && item.type.toLowerCase() === "movie"
  );
  const series = mediaItems.filter(
    (item) => item.type && item.type.toLowerCase() === "series"
  );

  return (
    <Box sx={{ width: "100%", padding: 2, minHeight: "90vh" }}>
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
          <Typography>Loading...</Typography>
        </Box>
      )}

      {error && (
        <Typography color="error" sx={{ mb: 2, textAlign: "center" }}>
          {error}
        </Typography>
      )}

      {/* Movies Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Movies
        </Typography>
        <Grid container spacing={2}>
          {movies.length > 0 ? (
            movies.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.mediaId}>
                <MovieCard
                  title={item.title || "No title"}
                  description={item.description || "-"}
                  posterUrl={item.thumbnailPath ? `/${item.thumbnailPath}` : ""}
                  trailerUrl={item.trailerPath ? `/${item.trailerPath}` : ""}
                  mediaId={item.mediaId} // pass mediaId for navigation
                />
              </Grid>
            ))
          ) : (
            <Typography>No movies found.</Typography>
          )}
        </Grid>
      </Box>

      {/* Series Section */}
      <Box>
        <Typography variant="h4" gutterBottom>
          Series
        </Typography>
        <Grid container spacing={2}>
          {series.length > 0 ? (
            series.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.mediaId}>
                <MovieCard
                  title={item.title || "No title"}
                  description={item.description || "-"}
                  posterUrl={item.thumbnailPath ? `/${item.thumbnailPath}` : ""}
                  trailerUrl={item.trailerPath ? `/${item.trailerPath}` : ""}
                  mediaId={item.mediaId} // pass mediaId for navigation
                />
              </Grid>
            ))
          ) : (
            <Typography>No series found.</Typography>
          )}
        </Grid>
      </Box>
    </Box>
  );
}
