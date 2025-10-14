import React, { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const ProtectedRoute = ({ requiredRoles }) => {
  const { token, userType, setToken, setUserType, setUsername, setUserId } =
    useContext(UserContext);
  const navigate = useNavigate();

  // Effect to handle unauthorized access
  useEffect(() => {
    const isAuthorized =
      token && (!requiredRoles || requiredRoles.includes(userType));

    if (!isAuthorized) {
      // Clear all user context
      setToken(null);
      setUserType(null);
      setUsername(null);
      setUserId(null);

      sessionStorage.clear(); // Clear all sessionStorage

      // Redirect user
      navigate(!token ? "/" : "/unauthorized", { replace: true });
    }
  }, [
    token,
    userType,
    requiredRoles,
    navigate,
    setToken,
    setUserType,
    setUsername,
    setUserId,
  ]);

  // Render outlet only if authorized
  const isAuthorized =
    token && (!requiredRoles || requiredRoles.includes(userType));

  return isAuthorized ? <Outlet /> : null;
};

export default ProtectedRoute;
