import React from "react";
import { Link } from "react-router-dom";

import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <Link className="link" to={`/products/${product.id}`}>
      <div className="product-card">
        <div className="product-img">
          <img src={product.img} alt={product.name} />
        </div>
        <div className="product-info">
          <p>${product.price}</p>
          <h5>{product.name}</h5>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
