import React from "react";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" className="link">
          <img id="logo" src="/images/info/logo.jpeg" alt="logo" />
        </Link>
      </div>
      <div className="right">
        <div className="wrapper">
          <ul className="nav-options">
            <li className="nav-option">
              <Link className="link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-option">Contact</li>
            <Link className="link" to="/about">
              <li className="nav-option">About</li>
            </Link>
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
