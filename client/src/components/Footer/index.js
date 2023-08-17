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
            <span>Shipping & Returns</span>
          </div>
          <div className="f-item">
            <h3>Company</h3>
            <Link className="link" to="/about">
              <span>About Us</span>
            </Link>
            <span>Social Responsibility</span>
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
          <FacebookIcon />
          <FaTiktok />
          <InstagramIcon />
          <EmailIcon />
        </div>
        <img src="/images/info/payment.jpeg" alt="pay" />
      </div>
    </div>
  );
};

export default Footer;
