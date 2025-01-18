import React, { createContext } from "react";

// Create the context
export const UserContext = createContext();

// Provide the context
export const UserProvider = ({ children }) => {
  const userData = {
    name: "Jane Doe",
    age: 28,
    bio: "Software developer and avid learner",
  };

  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  );
};
