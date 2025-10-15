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
      main: "#6366F1", // Slightly warmer indigo for a modern feel
      light: "#A5B4FC",
      dark: "#3730A3",
    },
    secondary: {
      main: "#10B981", // Emerald green for fresh secondary accents
    },
    background: {
      default: "#0F0F23", // Deeper cosmic dark
      paper: "#1A1A2E", // Subtle contrast for surfaces
    },
    text: {
      primary: "#F8FAFC", // Crisp white for readability
      secondary: "#CBD5E1", // Softer gray for secondary text
    },
    divider: "#334155", // Muted divider color
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          boxShadow:
            "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)",
          background: "linear-gradient(145deg, #1A1A2E 0%, #16213E 100%)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
          padding: "14px 28px",
          fontWeight: 600,
          fontSize: "1rem",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-2px) scale(1.02)",
            boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)",
          },
          "&:disabled": {
            opacity: 0.6,
            transform: "none",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: "48px",
          "& .MuiTabs-flexContainer": {
            gap: "24px",
          },
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        },
        indicator: {
          background: "linear-gradient(90deg, #6366F1, #10B981)",
          height: "3px",
          borderRadius: "2px",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          padding: "12px 24px",
          fontWeight: 600,
          fontSize: "1rem",
          color: "#94A3B8",
          borderRadius: "12px",
          marginBottom: "-1px",
          transition: "all 0.3s ease",
          "&.Mui-selected": {
            color: "#F8FAFC",
            background: "rgba(99, 102, 241, 0.1)",
            boxShadow: "inset 0 -2px 0 rgba(99, 102, 241, 0.5)",
          },
          "&:hover": {
            color: "#E2E8F0",
            background: "rgba(255, 255, 255, 0.05)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            transition: "all 0.3s ease",
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.2)",
            },
            "&:hover fieldset": {
              borderColor: "#6366F1",
              backgroundColor: "rgba(99, 102, 241, 0.05)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#6366F1",
              backgroundColor: "rgba(99, 102, 241, 0.08)",
              boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#94A3B8",
            fontWeight: 500,
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#6366F1",
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          marginBottom: "20px",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          fontWeight: 500,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#94A3B8",
          "&.Mui-checked": {
            color: "#6366F1",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginTop: "8px",
          "& .MuiTypography-root": {
            fontSize: "0.875rem",
            color: "#94A3B8",
          },
        },
      },
    },
  },
  typography: {
    h5: {
      fontWeight: 700,
      color: "#F8FAFC",
      letterSpacing: "-0.025em",
    },
    h6: {
      fontWeight: 500,
      color: "#CBD5E1",
      fontSize: "0.875rem",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
    },
    body2: {
      color: "#94A3B8",
    },
  },
  shape: {
    borderRadius: 12,
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
