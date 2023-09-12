import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./SuccessPage.scss";

const SuccessPage = () => {
  useEffect(() => {
    localStorage.removeItem("cart");
  }, []);

  return (
    <div className="success-page">
      <h4>Your payment has been processed successfully!</h4>
      <Link to="/" className="link">
        <img src="/images/info/logo.jpeg" alt="logo" />
      </Link>
      <p>
        Please make sure to check your email for payment and shipment details.
        If you have any issues or questions with the order please use the{" "}
        <Link className="link in-line" to="/contact">
          Contact Page
        </Link>
        .
      </p>
    </div>
  );
};

export default SuccessPage;
