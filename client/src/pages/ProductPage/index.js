import React from "react";
import { useParams, Link } from "react-router-dom";

import { products } from "../../resources/products";
import categories from "../../resources/categoryData";

import "./ProductPage.scss";

const ProductPage = () => {
  const { id } = useParams();

  const selectedProduct = products.find((product) => product.id === Number(id));
  const category = categories.find(
    (cat) => cat.id === selectedProduct.categoryId
  );

  return (
    <div className="product-page">
      <div className="container">
        <div className="product-details">
          <div className="left">
            <img src={selectedProduct.img} alt="product" />
          </div>
          <div className="right">
            <div className="info">
              <h3>{category.name}</h3>
              <h2>{selectedProduct.name}</h2>
              <h5>${selectedProduct.price}</h5>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="more-products">
          <h2>Want to shop more products?</h2>
          <button>
            <Link to="/products" className="link">
              Shop All Products
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
