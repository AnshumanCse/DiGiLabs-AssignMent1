import React from "react";
import logo from "../../imgs/Company Logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img className="logo" src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>Our Produt</li>
          <li className="dropdown">
            Resources <i class="ri-arrow-drop-down-line"> </i>
            <div class="dropdown-content">
              <span>
                <i class="ri-telegram-line"></i>Visit Telegram
              </span>
              <span>
                <i class="ri-youtube-line"></i>Checkout YouTube
              </span>
              <span>
                <i class="ri-store-3-fill"></i>Visit Products
              </span>
              <span>
                <i class="ri-more-2-line"></i> View More
              </span>
            </div>
          </li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="nav-right">
        <button className="login ">Login</button>
        <button className="sign">Sign up</button>
      </div>
      <i class="ri-menu-fold-line"></i>
    </div>
  );
};

export default Navbar;
