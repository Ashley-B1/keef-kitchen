import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import "./CategoriesPage.scss";
import ProductCard from "../../components/ProductCard";

import { keefProducts } from "../../resources/keefProducts";
import categories from "../../resources/categoryData";

const CategoriesPage = () => {
  const categoryId = Number(useParams().id);
  const [category, setCategory] = useState("");

  useEffect(() => {
    categories.filter((cat) => {
      cat.id === categoryId && setCategory(cat.name);
      return category;
    });
  });

  return (
    <div className="category-page">
      <div className="container">
        <div className="cat-banner">
          <h3>{category}</h3>
        </div>
        <div className="cat-products">
          <div className="cat-results">
            <div className="info">
              <span>
                {
                  keefProducts.filter(
                    (product) => product.categoryId === categoryId
                  ).length
                }{" "}
                {keefProducts.filter((product) => product.categoryId === categoryId)
                  .length > 1
                  ? `Results`
                  : `Result`}
              </span>
              <span>
                <Link className="link" to="/products">
                  View All
                </Link>
              </span>
            </div>
          </div>
          <div className="cat-products-container">
            {keefProducts
              .filter((product) => product.categoryId === categoryId)
              .map((filteredProduct) => (
                <ProductCard
                  key={filteredProduct.id}
                  product={filteredProduct}
                />
              ))}
          </div>
        </div>
        <div className="more-products">
          <h3>Explore Our Many Treats!</h3>
          <button>
            <Link className="link" to="/products">
              Find more products
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
