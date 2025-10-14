import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: "/", // Same origin as backend
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      console.log("Sending request with token:", token.slice(0, 20) + "...");
    } else {
      console.warn("No token found in sessionStorage for request:", config.url);
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("401 Unauthorized for:", error.config.url);
      toast.error("Session expired or unauthorized. Please log in again.");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userType");
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("userId");
      window.location.href = "/";
    } else {
      console.error("Response error:", error.message, error.config.url);
      toast.error(
        error.response?.data?.error || "An error occurred. Please try again."
      );
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
