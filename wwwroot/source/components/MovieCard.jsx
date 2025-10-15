import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Fade,
} from "@mui/material";
import { VolumeUp, VolumeOff, PlayArrow, Pause } from "@mui/icons-material";
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
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Handle video play/pause
  const handlePlayPause = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  // Handle mute/unmute
  const handleMuteToggle = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  // Pause video when not hovered
  useEffect(() => {
    if (!hovered && videoRef.current) {
      videoRef.current.pause();
      setPlaying(false);
    }
  }, [hovered]);

  // Navigate to media details
  const handleViewDetailsClick = (e) => {
    e.stopPropagation();
    navigate(`/user/media/${mediaId}`);
  };

  return (
    <Box
      sx={{
        display: "inline-block",
        m: { xs: 1, sm: 1.5 },
        position: "relative",
        "&:focus-within": {
          outline: "2px solid",
          outlineColor: "primary.main",
          outlineOffset: 2,
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${title}`}
      onKeyPress={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleViewDetailsClick(e);
        }
      }}
    >
      <Card
        sx={{
          width: { xs: 160, sm: 200, md: 240 },
          height: { xs: 240, sm: 300, md: 360 },
          cursor: "pointer",
          overflow: "hidden",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: hovered ? "scale(1.05) translateY(-8px)" : "scale(1)",
          boxShadow: hovered
            ? "0 12px 24px rgba(0,0,0,0.5)"
            : "0 4px 8px rgba(0,0,0,0.3)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: 3,
        }}
      >
        <CardMedia
          component="img"
          height="100%"
          image={posterUrl || "/placeholder.jpg"} // Fallback image
          alt={title}
          sx={{ objectFit: "cover", transition: "opacity 0.3s ease" }}
        />
      </Card>

      <Fade in={hovered && !!trailerUrl} timeout={300}>
        <Box
          sx={{
            position: "absolute",
            top: { xs: "100%", sm: "50%" },
            left: { xs: "50%", sm: "105%" },
            transform: {
              xs: "translate(-50%, 8px)",
              sm: "translateY(-50%)",
            },
            width: { xs: "90vw", sm: 400, md: 480 },
            maxWidth: "95vw",
            bgcolor: "rgba(0,0,0,0.95)",
            color: "text.primary",
            borderRadius: 3,
            p: { xs: 2, sm: 3 },
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              textAlign: "center",
              mb: 1,
              color: "text.primary",
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              mb: 2,
              color: "text.secondary",
              maxHeight: { xs: 80, sm: 100 },
              overflowY: "auto",
              px: 1,
              "&::-webkit-scrollbar": {
                width: "4px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "primary.main",
                borderRadius: "4px",
              },
            }}
          >
            {description}
          </Typography>

          {trailerUrl && (
            <Box
              sx={{
                width: "100%",
                height: { xs: 180, sm: 220, md: 270 },
                position: "relative",
                overflow: "hidden",
                borderRadius: 2,
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <video
                ref={videoRef}
                src={trailerUrl}
                autoPlay={hovered}
                muted={muted}
                loop
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 8,
                  right: 8,
                  display: "flex",
                  gap: 1,
                }}
              >
                <IconButton
                  onClick={handlePlayPause}
                  size="small"
                  sx={{
                    bgcolor: "rgba(0,0,0,0.6)",
                    color: "text.primary",
                    "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
                  }}
                  aria-label={playing ? "Pause trailer" : "Play trailer"}
                >
                  {playing ? <Pause /> : <PlayArrow />}
                </IconButton>
                <IconButton
                  onClick={handleMuteToggle}
                  size="small"
                  sx={{
                    bgcolor: "rgba(0,0,0,0.6)",
                    color: "text.primary",
                    "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
                  }}
                  aria-label={muted ? "Unmute trailer" : "Mute trailer"}
                >
                  {muted ? <VolumeOff /> : <VolumeUp />}
                </IconButton>
              </Box>
            </Box>
          )}

          <Button
            variant="contained"
            size="large"
            onClick={handleViewDetailsClick}
            sx={{
              mt: 2,
              width: "100%",
              bgcolor: "primary.main",
              "&:hover": {
                bgcolor: "primary.light",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
            aria-label={`Watch ${title}`}
          >
            Watch Now
          </Button>
        </Box>
      </Fade>
    </Box>
  );
}
