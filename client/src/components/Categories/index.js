import React from "react";
import { Link } from "react-router-dom";

import "./Categories.scss";

const Categories = ({ data }) => {
  return (
    <div className="categories">
      <h2>Shop Our Products</h2>
      <div className="products-container">
        {data.map((info) => (
          <Link to={`/categories/${info.id}`} className="link">
            <div key={info.id} className="product-cat">
              <img src={info.bgImg} alt="background" />
              <p>{info.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <Link className="link" to="/products">
        <button>All Products</button>
      </Link>
    </div>
  );
};

export default Categories;
