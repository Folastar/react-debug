import React, { useState } from "react";
import Counter from "./Counter";
import UserCard from "./UserCard";

function App() {
  const [user, setUser] = useState({ name: "Alice", age: 25 });

  const updateUser = () => {
    setUser((prevUser) => ({ ...prevUser, name: "Bob" }))
  };

  return (
    <div>
      <h1>React Debugging App</h1>
      <Counter initialCount={5} />
      <UserCard user={user} />
      <button onClick={updateUser}>Change User Name</button>
    </div>
  );
}

export default App;
