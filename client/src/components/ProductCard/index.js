import React from "react";

import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="product-info">
        <p>${product.price}</p>
        <h5>{product.name}</h5>
      </div>
    </div>
  );
};

export default ProductCard;
