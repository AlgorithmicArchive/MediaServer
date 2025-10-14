import React, { useContext, useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Tabs,
  Tab,
  Box,
  TextField,
  Button,
  Alert,
  Typography,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import {
  Email as EmailIcon,
  Lock as LockIcon,
  Person as PersonIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";

// Custom dark theme with modern color palette
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
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
          background: "linear-gradient(145deg, #1E1E1E, #2A2A2A)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          padding: "12px 24px",
          fontWeight: 600,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #333",
        },
        indicator: {
          backgroundColor: "#5C6BC0",
          height: "3px",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#B0BEC5",
          fontWeight: 500,
          "&.Mui-selected": {
            color: "#E0E0E0",
            fontWeight: 700,
          },
          transition: "color 0.3s ease",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            backgroundColor: "#2A2A2A",
            "&:hover fieldset": {
              borderColor: "#5C6BC0",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#5C6BC0",
            },
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          marginBottom: "16px",
        },
      },
    },
  },
  typography: {
    h5: {
      fontWeight: 700,
      color: "#E0E0E0",
    },
    body2: {
      color: "#B0BEC5",
    },
  },
});

const Auth = () => {
  const [tabValue, setTabValue] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState({ message: "", severity: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const { setUserType, setToken, setUsername, setUserId } =
    useContext(UserContext);

  const navigate = useNavigate();
  const {
    register: registerLogin,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
    reset: resetLogin,
  } = useForm();

  const {
    register: registerSignup,
    handleSubmit: handleSignupSubmit,
    formState: { errors: signupErrors },
    reset: resetSignup,
    setError,
  } = useForm();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setAlert({ message: "", severity: "" });
    resetLogin();
    resetSignup();
  };

  // Backend validation helpers
  const checkUsername = async (username) => {
    if (!username) return false;
    const res = await fetch(`/Home/CheckUsername?username=${username}`);
    const data = await res.json();
    return data.status;
  };

  const checkEmail = async (email) => {
    if (!email) return false;
    const res = await fetch(`/Home/CheckEmail?email=${email}`);
    const data = await res.json();
    return data.status;
  };

  // Login submission
  const onLoginSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);

      const res = await fetch("/Home/Login", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("Server error:", err);
        setAlert({
          message: "Invalid credentials. Please try again.",
          severity: "error",
        });
        return;
      }

      const result = await res.json();

      if (result.status) {
        setUserType(result.userType);
        setToken(result.token);
        setUsername(result.username);
        setUserId(result.userId);
        navigate(result.userType === "Admin" ? "/admin/home" : "/user/home");
      } else {
        setAlert({
          message: "Login failed. Please try again.",
          severity: "error",
        });
      }
    } catch (err) {
      console.error("Network or fetch error:", err);
      setAlert({
        message: "Network error. Please try again.",
        severity: "error",
      });
    }
  };

  // Registration submission
  const onRegisterSubmit = async (data) => {
    const usernameOk = await checkUsername(data.username);
    const emailOk = await checkEmail(data.email);

    if (!usernameOk) {
      setError("username", {
        type: "manual",
        message: "Username already exists",
      });
      return;
    }
    if (!emailOk) {
      setError("email", { type: "manual", message: "Email already exists" });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("confirmPassword", data.confirmPassword);

      const res = await fetch("/Home/Register", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setAlert({
          message: "Registration successful! Please log in.",
          severity: "success",
        });
        setTabValue(0);
        resetSignup();
      } else {
        setAlert({
          message: "Registration failed. Please try again.",
          severity: "error",
        });
      }
    } catch {
      setAlert({
        message: "Network error. Please try again.",
        severity: "error",
      });
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="sm" sx={{ mt: 8, mb: 8 }}>
        <Card variant="outlined" sx={{ p: 4, transition: "all 0.3s ease" }}>
          <CardContent>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              centered
              sx={{ mb: 3 }}
            >
              <Tab label="Login" />
              <Tab label="Register" />
            </Tabs>

            {alert.message && (
              <Alert
                severity={alert.severity}
                sx={{ mt: 2, mb: 2, transition: "opacity 0.3s ease" }}
              >
                {alert.message}
              </Alert>
            )}

            {/* Login Form */}
            {tabValue === 0 && (
              <Box
                component="form"
                onSubmit={handleLoginSubmit(onLoginSubmit)}
                sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
              >
                <Typography
                  variant="h5"
                  align="center"
                  sx={{ mb: 2, fontWeight: 700 }}
                >
                  Welcome Back
                </Typography>

                <TextField
                  fullWidth
                  label="Email"
                  {...registerLogin("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  error={!!loginErrors.email}
                  helperText={loginErrors.email?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon sx={{ color: "#B0BEC5" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ "& input": { color: "#E0E0E0" } }}
                />

                <TextField
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  {...registerLogin("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  error={!!loginErrors.password}
                  helperText={loginErrors.password?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon sx={{ color: "#B0BEC5" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          sx={{ color: "#B0BEC5" }}
                        >
                          {showPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ "& input": { color: "#E0E0E0" } }}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      sx={{
                        color: "#5C6BC0",
                        "&.Mui-checked": { color: "#5C6BC0" },
                      }}
                    />
                  }
                  label="Remember me"
                  sx={{ color: "#B0BEC5" }}
                />

                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{
                    background: "linear-gradient(45deg, #5C6BC0, #26A69A)",
                    "&:hover": {
                      background: "linear-gradient(45deg, #8E99F3, #4DB6AC)",
                    },
                  }}
                >
                  Sign In
                </Button>
              </Box>
            )}

            {/* Register Form */}
            {tabValue === 1 && (
              <Box
                component="form"
                onSubmit={handleSignupSubmit(onRegisterSubmit)}
                sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
              >
                <Typography
                  variant="h5"
                  align="center"
                  sx={{ mb: 2, fontWeight: 700 }}
                >
                  Create Account
                </Typography>

                <TextField
                  fullWidth
                  label="Username"
                  {...registerSignup("username", {
                    required: "Username is required",
                    minLength: {
                      value: 2,
                      message: "Username must be at least 2 characters",
                    },
                  })}
                  error={!!signupErrors.username}
                  helperText={signupErrors.username?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon sx={{ color: "#B0BEC5" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ "& input": { color: "#E0E0E0" } }}
                />

                <TextField
                  fullWidth
                  label="Email"
                  {...registerSignup("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  error={!!signupErrors.email}
                  helperText={signupErrors.email?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon sx={{ color: "#B0BEC5" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ "& input": { color: "#E0E0E0" } }}
                />

                <TextField
                  fullWidth
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  {...registerSignup("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  error={!!signupErrors.password}
                  helperText={signupErrors.password?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon sx={{ color: "#B0BEC5" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ "& input": { color: "#E0E0E0" } }}
                />

                <TextField
                  fullWidth
                  label="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  {...registerSignup("confirmPassword", {
                    required: "Confirm password is required",
                    validate: (value, formValues) =>
                      value === formValues.password || "Passwords do not match",
                  })}
                  error={!!signupErrors.confirmPassword}
                  helperText={signupErrors.confirmPassword?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon sx={{ color: "#B0BEC5" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          sx={{ color: "#B0BEC5" }}
                        >
                          {showPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ "& input": { color: "#E0E0E0" } }}
                />

                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{
                    background: "linear-gradient(45deg, #5C6BC0, #26A69A)",
                    "&:hover": {
                      background: "linear-gradient(45deg, #8E99F3, #4DB6AC)",
                    },
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            )}
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default Auth;
