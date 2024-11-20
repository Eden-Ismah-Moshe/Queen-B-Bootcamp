import React, { useState, useEffect } from "react";
import { AuthContext, getInitialState } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getInitialState);

  //"setting" or replacing the user data stored in sessionStorage
  //with the JSON stringified verison of the newly updated user data.
  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const login = (role) => {
    if (role === "Mentor" || role === "Mentee") {
      setUser({ role });
    } else {
      console.error("Invalid role");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
