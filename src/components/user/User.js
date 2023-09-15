import { useState } from "react";
import "./user.css";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <p>count: {count}</p>
      <h2>Name: {name}</h2>
      <h3>Location: Mangalore</h3>
      <h4>Contact: testac8547@gmail.com</h4>
    </div>
  );
};

export default User;
