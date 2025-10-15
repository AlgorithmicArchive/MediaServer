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
  Divider,
  Fade,
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

const Auth = () => {
  const [tabValue, setTabValue] = useState(0);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
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
    setShowLoginPassword(false);
    setShowRegisterPassword(false);
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
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0F0F23 0%, #1A1A2E 50%, #16213E 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
        position: "relative",
        overflow: "hidden",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
          zIndex: 0,
        },
      }}
    >
      <Container
        component="main"
        maxWidth="sm"
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Fade in timeout={600}>
          <Card
            variant="outlined"
            sx={{ p: { xs: 3, sm: 4 }, transition: "all 0.4s ease" }}
          >
            <CardContent sx={{ pb: 0 }}>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  centered
                  variant="fullWidth"
                  sx={{ maxWidth: "300px" }}
                >
                  <Tab label="Sign In" />
                  <Tab label="Sign Up" />
                </Tabs>
              </Box>
              <Divider sx={{ my: 2, backgroundColor: "divider" }} />

              {alert.message && (
                <Fade in={!!alert.message} timeout={300}>
                  <Alert
                    severity={alert.severity}
                    sx={{ mt: 1, mb: 3, transition: "all 0.3s ease" }}
                    onClose={() => setAlert({ message: "", severity: "" })}
                  >
                    {alert.message}
                  </Alert>
                </Fade>
              )}

              {/* Login Form */}
              {tabValue === 0 && (
                <Fade in={tabValue === 0} timeout={400}>
                  <Box
                    component="form"
                    onSubmit={handleLoginSubmit(onLoginSubmit)}
                    sx={{
                      mt: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 3,
                    }}
                  >
                    <Box sx={{ textAlign: "center", mb: 1 }}>
                      <Typography variant="h5">Welcome Back</Typography>
                      <Typography variant="h6">
                        Enter your credentials
                      </Typography>
                    </Box>

                    <TextField
                      fullWidth
                      label="Email Address"
                      autoComplete="email"
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
                            <EmailIcon sx={{ color: "text.secondary" }} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <TextField
                      fullWidth
                      type={showLoginPassword ? "text" : "password"}
                      label="Password"
                      autoComplete="current-password"
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
                            <LockIcon sx={{ color: "text.secondary" }} />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() =>
                                setShowLoginPassword(!showLoginPassword)
                              }
                              edge="end"
                              sx={{ color: "text.secondary" }}
                            >
                              {showLoginPassword ? (
                                <VisibilityOffIcon />
                              ) : (
                                <VisibilityIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                        />
                      }
                      label="Remember me"
                    />

                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{
                        background:
                          "linear-gradient(135deg, primary.main 0%, secondary.main 100%)",
                        boxShadow: "0 4px 14px 0 rgba(99, 102, 241, 0.4)",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, primary.light 0%, secondary.main 100%)",
                          boxShadow: "0 8px 25px 0 rgba(99, 102, 241, 0.5)",
                        },
                      }}
                    >
                      Sign In
                    </Button>
                  </Box>
                </Fade>
              )}

              {/* Register Form */}
              {tabValue === 1 && (
                <Fade in={tabValue === 1} timeout={400}>
                  <Box
                    component="form"
                    onSubmit={handleSignupSubmit(onRegisterSubmit)}
                    sx={{
                      mt: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 3,
                    }}
                  >
                    <Box sx={{ textAlign: "center", mb: 1 }}>
                      <Typography variant="h5">Create Account</Typography>
                      <Typography variant="h6">Join us today</Typography>
                    </Box>

                    <TextField
                      fullWidth
                      label="Username"
                      autoComplete="username"
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
                            <PersonIcon sx={{ color: "text.secondary" }} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Email Address"
                      autoComplete="email"
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
                            <EmailIcon sx={{ color: "text.secondary" }} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <TextField
                      fullWidth
                      type={showRegisterPassword ? "text" : "password"}
                      label="Password"
                      autoComplete="new-password"
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
                            <LockIcon sx={{ color: "text.secondary" }} />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() =>
                                setShowRegisterPassword(!showRegisterPassword)
                              }
                              edge="end"
                              sx={{ color: "text.secondary" }}
                            >
                              {showRegisterPassword ? (
                                <VisibilityOffIcon />
                              ) : (
                                <VisibilityIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />

                    <TextField
                      fullWidth
                      type={showRegisterPassword ? "text" : "password"}
                      label="Confirm Password"
                      autoComplete="new-password"
                      {...registerSignup("confirmPassword", {
                        required: "Confirm password is required",
                        validate: (value, formValues) =>
                          value === formValues.password ||
                          "Passwords do not match",
                      })}
                      error={!!signupErrors.confirmPassword}
                      helperText={signupErrors.confirmPassword?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon sx={{ color: "text.secondary" }} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{
                        background:
                          "linear-gradient(135deg, primary.main 0%, secondary.main 100%)",
                        boxShadow: "0 4px 14px 0 rgba(99, 102, 241, 0.4)",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, primary.light 0%, secondary.main 100%)",
                          boxShadow: "0 8px 25px 0 rgba(99, 102, 241, 0.5)",
                        },
                      }}
                    >
                      Sign Up
                    </Button>
                  </Box>
                </Fade>
              )}
            </CardContent>
          </Card>
        </Fade>
      </Container>
    </Box>
  );
};

export default Auth;
