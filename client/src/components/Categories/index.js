import React from "react";
import { Link } from "react-router-dom";

import "./Categories.scss";

const Categories = ({ data }) => {
  return (
    <div className="categories">
      <h2>Shop Our Products</h2>
      <div className="products-container">
        {data.map((info) => (
          <Link key={info.id} to={`/categories/${info.id}`} className="link">
            <div className="product-cat">
              <img src={info.bgImg} alt="background" />
              <p>{info.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="prod-btn">
        <Link className="link" to="/products">
          <button>All Products</button>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
