import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export default function AdminLayout() {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}
