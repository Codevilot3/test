import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT_USER" });
    navigate("/login");
  };

  return (
    <div className="home-container">
      <h2>Welcome, {user && user.name}!</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user && user.email}</td>
            <td>{user && user.name}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
