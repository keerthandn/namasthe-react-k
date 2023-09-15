import "./header.css";
import { LOGO_URL } from "../../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link to="/about">About </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="nav-item">Cart</li>
          <button
            className="button"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
