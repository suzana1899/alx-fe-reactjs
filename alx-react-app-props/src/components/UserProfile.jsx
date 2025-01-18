import React, { useContext } from "react";
import { UserContext } from "../UserContext"; // Import UserContext

const UserProfile = () => {
  const { userData } = useContext(UserContext); // Consume the context

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default UserProfile;
