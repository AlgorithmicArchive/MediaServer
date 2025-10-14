import React, { createContext, useState, useEffect } from "react";

// Create context
export const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState(
    () => sessionStorage.getItem("userType") || null
  );
  const [token, setToken] = useState(
    () => sessionStorage.getItem("token") || null
  );
  const [username, setUsername] = useState(
    () => sessionStorage.getItem("username") || null
  );
  const [userId, setUserId] = useState(
    () => sessionStorage.getItem("userId") || null
  );

  // Sync state with sessionStorage
  useEffect(() => {
    if (userType) sessionStorage.setItem("userType", userType);
    else sessionStorage.removeItem("userType");
  }, [userType]);

  useEffect(() => {
    if (token) sessionStorage.setItem("token", token);
    else sessionStorage.removeItem("token");
  }, [token]);

  useEffect(() => {
    if (username) sessionStorage.setItem("username", username);
    else sessionStorage.removeItem("username");
  }, [username]);

  useEffect(() => {
    if (userId) sessionStorage.setItem("userId", userId);
    else sessionStorage.removeItem("userId");
  }, [userId]);

  return (
    <UserContext.Provider
      value={{
        userType,
        setUserType,
        token,
        setToken,
        username,
        setUsername,
        userId,
        setUserId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
