import React from "react";

import "./Categories.scss";

const Categories = ({ data }) => {
  return (
    <div className="categories">
      <h2>Shop Our Products</h2>
      <div className="products-container">
        {data.map((info) => (
          <div key={info.id} className="product-cat">
            <img src={info.bgImg} alt="background" />
            <p>{info.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
