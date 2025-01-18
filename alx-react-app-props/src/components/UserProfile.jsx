import React, { useContext } from "react";
import { UserContext } from "../UserContext"; // Import UserContext

const UserProfile = () => {
  const userData = useContext(UserContext); // Access user data from context

  return (
    <div
      style={{ border: "1px solid black", paddingLeft: "10px", margin: "20px" }}
    >
      <h2 style={{ color: "blue" }}>{userData.name}</h2>
      <p>
        Age: <span style={{ fontWeight: "semi-bold" }}>{userData.age}</span>
      </p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
};

export default UserProfile;
