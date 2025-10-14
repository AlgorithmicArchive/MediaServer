import React, { useContext, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from "jwt-decode";

import RoutesComponent from "./components/RoutesComponent";
import MyNavbar from "./components/Navbar";
import { UserProvider, UserContext } from "./UserContext";

// Custom dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5C6BC0", // Indigo for buttons and accents
      light: "#8E99F3",
      dark: "#26418F",
    },
    secondary: {
      main: "#26A69A", // Teal for secondary accents
    },
    background: {
      default: "#121212", // Dark background
      paper: "#1E1E1E", // Slightly lighter for cards
    },
    text: {
      primary: "#E0E0E0", // Light text for contrast
      secondary: "#B0BEC5",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "linear-gradient(90deg, #1E1E1E, #2A2A2A)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          borderBottom: "1px solid #333",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          padding: "8px 16px",
          fontWeight: 500,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1E1E1E",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#E0E0E0",
          "&:hover": {
            backgroundColor: "#2A2A2A",
            color: "#5C6BC0",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: "none",
    },
  },
});

// Wrapper for auto-login & token validation
const MainApp = () => {
  const { token, userType, setToken, setUserType, setUsername, setUserId } =
    useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only run if we have a token
    if (!token) return;

    try {
      const decoded = jwtDecode(token);
      const exp = decoded.exp * 1000;
      const now = Date.now();

      if (now >= exp) {
        // Token expired → log out
        setToken(null);
        setUserType(null);
        setUsername(null);
        setUserId(null);
        sessionStorage.clear();
        toast.error("Session expired. Please log in again.");
        navigate("/", { replace: true });
      } else if (location.pathname === "/") {
        // Only redirect from login page if already logged in
        if (userType === "User") navigate("/user/home", { replace: true });
        else if (userType === "Admin")
          navigate("/admin/home", { replace: true });
      }
    } catch (err) {
      console.error("Token decode error:", err);
      setToken(null);
      setUserType(null);
      setUsername(null);
      setUserId(null);
      sessionStorage.clear();
      toast.error("Invalid token. Please log in again.");
      navigate("/", { replace: true });
    }
  }, [
    token,
    userType,
    navigate,
    location.pathname,
    setToken,
    setUserType,
    setUsername,
    setUserId,
  ]);

  return (
    <>
      <MyNavbar />
      <RoutesComponent />
    </>
  );
};

// Root render
const AppWrapper = () => (
  <ThemeProvider theme={darkTheme}>
    <UserProvider>
      <CssBaseline />
      <Router>
        <MainApp />
      </Router>
    </UserProvider>
  </ThemeProvider>
);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

if (module.hot) {
  module.hot.accept();
}
