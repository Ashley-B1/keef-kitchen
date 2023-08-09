import React, { useState } from "react";

import "./ProductsPage.scss";

import ProductCard from "../../components/ProductCard";

import { products } from "../../resources/products";
import categories from "../../resources/categoryData";

const ProductsPage = () => {
  const [toggle, setToggle] = useState(false);
  const [categoryId, setCategoryId] = useState(0);

  const show = (id) => {
    if (toggle === id) return setToggle(null);

    setToggle(id);
    setCategoryId(id);
  };

  return (
    <div className="products-page">
      <div className="container">
        <section className="product-banner">
          <h3>All Products</h3>
        </section>
        <div className="product-categories">
          {categories.map((cat) => (
            <>
              <section
                onClick={() => show(cat.id)}
                key={cat.id}
                className="cat-toggle"
              >
                <h4>{cat.name}</h4>
              </section>
              {toggle === cat.id && (
                <section className="products">
                  {products.filter((item) => item.categoryId === categoryId).map(filteredProduct => (
                    <ProductCard key={filteredProduct.id} product={filteredProduct} />
                  ))}
                </section>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
