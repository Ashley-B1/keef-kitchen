import React from "react";
import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { FaTiktok } from "react-icons/fa";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <h4>
          Do you have any inquiries? If so please go to the{" "}
          <Link to="/contact" className="link">
            <span>Contact Page</span>!
          </Link>
        </h4>
        <div className="footer-items">
          <div className="f-item">
            <h3>Ordering</h3>
            <Link className="link" to="/shipping-and-returns">
              <span>Shipping & Returns</span>
            </Link>
          </div>
          <div className="f-item">
            <h3>Company</h3>
            <Link className="link" to="/about">
              <span>About Us</span>
            </Link>
          </div>
          <div className="f-item">
            <h3>Contact</h3>
            <Link to="/contact" className="link">
              <span>General Inquiries</span>
            </Link>
          </div>
        </div>
        <span className="copyright">© Copyright 2023. All Rights Reserved</span>
      </div>
      <div className="right">
        <div className="icons">
          <a
            href="https://www.facebook.com/thekayfkitchen?mibextid=LQQJ4d"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.tiktok.com/@1stnamechef?_t=8eW7ZhuU5qE&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.instagram.com/thekeefkitchen_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <Link className="link" to="/contact">
            <EmailIcon />
          </Link>
        </div>
        <img src="/images/info/payment.jpeg" alt="pay" />
      </div>
    </div>
  );
};

export default Footer;
