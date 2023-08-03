import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img id="logo" src="/images/info/logo.jpeg" alt="logo" />
      </div>
      <div className="right">
        <div className="wrapper">
          <ul className="nav-options">
            <li className="nav-option">Products</li>
            <li className="nav-option">Contact</li>
            <li className="nav-option">About</li>
          </ul>
          <div className="icon">
            <ShoppingCartIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
