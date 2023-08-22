import React from "react";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./Navbar.scss";

const Navbar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" className="link">
          <img id="logo" src="/images/info/logo.jpeg" alt="logo" />
        </Link>
      </div>
      <div className={`right`}> {/*  ${menuOpen ? "open" : ""} */}
        {/* <div className="toggle-button" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div> */}
        <div className="wrapper">
          <ul className="nav-options">
            <li className="nav-option">
              <Link className="link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-option">
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
            <Link className="link" to="/about">
              <li className="nav-option">About</li>
            </Link>
            <li className="nav-option">
              <ShoppingCartIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
