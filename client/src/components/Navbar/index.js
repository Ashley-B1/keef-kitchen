import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import CheckoutModal from "../CheckoutModal";

import { CartContext } from "../../context/CartContext"

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./Navbar.scss";

const logo = "/images/info/logo.jpeg";

const Navbar = () => {
  const cart = useContext(CartContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // console.log(cart.items);

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

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
      <ul className={menuOpen ? "open" : ""}>
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
        <li className="cart-items">
          <ShoppingCartIcon onClick={() => setIsModalOpen(true)} className="icon" />
          <span className="cart-badge">{productsCount}</span>
        </li>
      </ul>
      <CheckoutModal 
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        cartItems={cart.items}
      />
    </nav>
  );
};

export default Navbar;
