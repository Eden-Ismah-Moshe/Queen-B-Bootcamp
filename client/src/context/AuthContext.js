import { createContext } from "react";

// Create the context for authentication and role management
export const AuthContext = createContext(null);

// Retrieve the currentUser value from sessionStorage.
export const getInitialState = () => {
  const currentUser = sessionStorage.getItem("user");
  return currentUser ? JSON.parse(currentUser) : null;
};
