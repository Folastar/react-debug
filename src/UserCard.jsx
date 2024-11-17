import React from "react";

const UserCard = ({ user }) => {
  if (!user) return <p>No user data available.</p>;

  return (
    <div>
      <h2>User Card</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default UserCard;
