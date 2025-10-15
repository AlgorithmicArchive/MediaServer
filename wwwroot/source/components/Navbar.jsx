import React, { useContext, useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../UserContext";
import axiosInstance from "../axiosConfig";

const MyNavbar = () => {
  const { userType, username, setUserType, setToken, setUsername } =
    useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const handleLogout = async () => {
    try {
      await axiosInstance.get("/Home/LogOut");
      setToken(null);
      setUserType(null);
      setUsername(null);
      sessionStorage.clear();
      navigate("/");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setMobileOpen(false);
    handleMenuClose();
  };

  const getNavItemStyle = (path) => ({
    color: location.pathname === path ? "#5C6BC0" : "#E0E0E0",
    fontWeight: location.pathname === path ? 600 : 400,
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#2A2A2A",
      color: "#8E99F3",
    },
  });

  const renderNavItems = () => (
    <>
      {!userType && (
        <Button component={Link} to="/" sx={getNavItemStyle("/")}>
          Login/Register
        </Button>
      )}

      {userType === "User" && (
        <>
          <Button
            component={Link}
            to="/user/home"
            sx={getNavItemStyle("/user/home")}
          >
            Dashboard
          </Button>
        </>
      )}

      {userType === "Admin" && (
        <>
          <Button
            component={Link}
            to="/admin/dashboard"
            sx={getNavItemStyle("/admin/dashboard")}
          >
            Admin Dashboard
          </Button>
          <Button onClick={handleMenuOpen} sx={getNavItemStyle(null)}>
            Manage
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                backgroundColor: "#1E1E1E",
                color: "#E0E0E0",
              },
            }}
          >
            <MenuItem onClick={() => handleNavigate("/admin/managemedia")}>
              Media
            </MenuItem>
            <MenuItem onClick={() => handleNavigate("/admin/settings")}>
              Settings
            </MenuItem>
          </Menu>
        </>
      )}
    </>
  );

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "#E0E0E0",
            fontWeight: 700,
            "&:hover": { color: "#8E99F3" },
          }}
        >
          Media Server
        </Typography>

        {isSmallScreen ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ color: "#E0E0E0" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={mobileOpen ? document.body : null}
              open={mobileOpen}
              onClose={() => setMobileOpen(false)}
              PaperProps={{
                sx: {
                  width: "100%",
                  maxWidth: "300px",
                  backgroundColor: "#1E1E1E",
                  color: "#E0E0E0",
                },
              }}
            >
              {renderNavItems()}
              {userType && (
                <>
                  <MenuItem disabled sx={{ color: "#B0BEC5" }}>
                    {username}
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </>
              )}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {renderNavItems()}
            {userType && (
              <>
                <Typography sx={{ color: "#B0BEC5", mr: 2 }}>
                  {username}
                </Typography>
                <Button
                  onClick={handleLogout}
                  sx={{
                    color: "#E0E0E0",
                    "&:hover": {
                      color: "#EF5350",
                      backgroundColor: "#2A2A2A",
                    },
                  }}
                >
                  Logout
                </Button>
              </>
            )}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MyNavbar;
