import React from "react";
import { Link } from "react-router-dom";

import './NotFoundPage.scss';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h3>404 page not found!</h3>
      <p>The page you requested does not exist.</p>
      <button>
        <Link className="link" to="/">return to homepage</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
