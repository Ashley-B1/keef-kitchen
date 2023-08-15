import React from "react";
import { Link } from "react-router-dom";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./AboutFooter.scss";

const AboutFooter = () => {
  return (
    <div className="about-footer">
      <section className="top">
        <h3>
          Want to know what all we have to offer? Come explore our products!
        </h3>
        <Link className="link" to="/products">
          <div className="a-links">
            <span>Check out our products </span>
            <ArrowForwardIcon />
          </div>
        </Link>
      </section>
      <section className="bottom">
        <h3>Have any questions?</h3>
        <Link className="link" to="/contact">
          <div className="a-links">
            <span>Shoot us an email</span>
            <ArrowForwardIcon />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default AboutFooter;
