import React, { useState } from "react";
import { Button, Typography, Box, CircularProgress } from "@mui/material";
import axiosInstance from "../../axiosConfig";

export default function IndexMediaButton() {
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleIndexMedia = async () => {
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await axiosInstance.get("/Admin/IndexMedia");
      setResponseMessage(response.data);
    } catch (err) {
      setResponseMessage(
        err.response?.data || "Indexing failed. Check server logs."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 5, textAlign: "center" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleIndexMedia}
        disabled={loading}
      >
        Update DB
      </Button>

      {loading && (
        <Box sx={{ mt: 2 }}>
          <CircularProgress size={24} />
        </Box>
      )}

      {responseMessage && (
        <Typography sx={{ mt: 2 }}>{responseMessage}</Typography>
      )}
    </Box>
  );
}
