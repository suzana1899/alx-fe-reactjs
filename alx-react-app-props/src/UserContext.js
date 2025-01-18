// src/UserContext.js
import React, { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

// Provide the context to the components
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
