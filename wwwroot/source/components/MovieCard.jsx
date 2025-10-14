import React, { useState, useRef } from "react";
import { Box, Card, CardMedia, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MovieCard({
  posterUrl,
  title,
  description,
  trailerUrl,
  mediaId,
}) {
  const [hovered, setHovered] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Toggle mute on video click
  const handleMuteClick = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  // Navigate to media details using URL param
  const handleViewDetailsClick = (e) => {
    e.stopPropagation();
    navigate(`/user/media/${mediaId}`);
  };

  return (
    <Box
      sx={{ display: "inline-block", m: 2, position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card
        sx={{
          width: 200,
          height: 350,
          cursor: "pointer",
          overflow: "hidden",
          transition: "transform 0.3s ease",
          transform: hovered ? "scale(1.05)" : "scale(1)",
          zIndex: hovered ? 5 : 1,
        }}
      >
        <CardMedia
          component="img"
          height="100%"
          image={posterUrl}
          alt={title}
          sx={{ objectFit: "contain" }}
        />
      </Card>

      {hovered && trailerUrl && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "105%",
            transform: "translateY(-50%)",
            width: 400,
            maxWidth: "90vw",
            bgcolor: "rgba(0,0,0,0.95)",
            color: "#fff",
            borderRadius: 2,
            p: 3,
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
          }}
        >
          <Typography variant="h5" textAlign="center" gutterBottom>
            {title}
          </Typography>

          <Typography
            variant="body2"
            textAlign="center"
            gutterBottom
            sx={{ maxHeight: 120, overflowY: "auto" }}
          >
            {description}
          </Typography>

          <Box
            sx={{
              mt: 2,
              width: "100%",
              position: "relative",
              height: 220,
              overflow: "hidden",
              borderRadius: 2,
              cursor: "pointer",
            }}
            onClick={handleMuteClick}
          >
            <video
              ref={videoRef}
              src={trailerUrl}
              autoPlay
              muted={muted}
              loop
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {muted && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  bgcolor: "rgba(0,0,0,0.6)",
                  color: "#fff",
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                  fontSize: 12,
                  zIndex: 5,
                }}
              >
                Click for sound
              </Box>
            )}
          </Box>

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleViewDetailsClick}
          >
            View Details
          </Button>
        </Box>
      )}
    </Box>
  );
}
