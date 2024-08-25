import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>
            <img src="public/brand_logo.png" alt="Logo" />
          </h1>
        </div>
        <ul className="navbar-menu">
          <li>
            <a href="#">MENU</a>
          </li>
          <li>
            <a href="#">LOCATION</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
        <div className="navbar-login">
          <button>Login</button>
        </div>
      </nav>
    </div>
  );
}
