import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./Navbar.scss";

const logo = "/images/info/logo.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <Link className="link" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen)
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen && "open"}>
        <li>
          <NavLink className="link" to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <ShoppingCartIcon />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
