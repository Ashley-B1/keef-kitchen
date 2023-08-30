import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import { keefProducts } from "../../resources/keefProducts";
import categories from "../../resources/categoryData";

import "./ProductPage.scss";

const ProductPage = () => {
  const { id } = useParams();

  const selectedProduct = keefProducts.find(
    (product) => product.id === Number(id)
  );
  const category = categories.find(
    (cat) => cat.id === selectedProduct.categoryId
  );

  const [selectedOption, setSelectedOption] = useState(
    selectedProduct.options[0]
  );
  const [selectedFlavors, setSelectedFlavors] = useState([]);
  const [selectedChoiceFlavors, setSelectedChoiceFlavors] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(
    selectedProduct.price || selectedProduct.options[0].price
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedChoice, setSelectedChoice] = useState(
    selectedOption.choices && selectedOption.choices[0]
  );

  const handleChoiceChange = (choice) => {
    setSelectedChoice(choice);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setSelectedFlavors([]);
    setSelectedChoiceFlavors([])
    setSelectedPrice(option.price || selectedProduct.price);

    if (option.name === "multiple") {
      setQuantity(2);
    } else {
      setQuantity(1);
    }
  };

  const handleFlavorToggle = (flavor) => {
    if (selectedFlavors.includes(flavor)) {
      setSelectedFlavors(selectedFlavors.filter((fl) => fl !== flavor));
    } else {
      setSelectedFlavors([...selectedFlavors, flavor]);
    }
  };

  const handleChoiceFlavorToggle = flavor => {
    if (selectedChoiceFlavors.includes(flavor)) {
      setSelectedChoiceFlavors(selectedChoiceFlavors.filter((fl) => fl !== flavor));
    } else {
      setSelectedChoiceFlavors([...selectedChoiceFlavors, flavor]);
    }
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const totalPrice = () => {
    const optionPrice = selectedPrice || 0;
    return optionPrice * quantity;
  };

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
              <h5>${totalPrice()}</h5>
              <div className="options">
                <h4>Options:</h4>
                {selectedProduct.options.map((option) => (
                  <label key={option.id}>
                    <input
                      type="radio"
                      name="options"
                      value={option.id}
                      onChange={() => handleOptionChange(option)}
                    />
                    {option.name}
                  </label>
                ))}
              </div>
              {selectedOption.flavors && (
                <div className="flavors">
                  <h4>Flavors:</h4>
                  {selectedOption?.flavors.map((flavor) => (
                    <label key={flavor}>
                      <input
                        type={selectedOption.name === "cheesecake" ? "checkbox" : "radio"}
                        value={flavor}
                        checked={selectedFlavors.includes(flavor)}
                        onChange={() => handleFlavorToggle(flavor)}
                      />
                      {flavor}
                    </label>
                  ))}
                </div>
              )}
              {selectedOption.choices && (
                <div className="choices">
                  <h4>Choices:</h4>
                  {selectedOption.choices.map((choice) => (
                    <label key={choice.id}>
                      <input
                        type="radio"
                        value={choice.id}
                        name="choices"
                        onChange={() => handleChoiceChange(choice)}
                      />
                      {choice.name}
                    </label>
                  ))}
                </div>
              )}
              {selectedChoice && selectedChoice.flavors && (
                <div className="choice-flavors">
                  {selectedChoice.flavors.map((sf) => (
                    <label key={sf}>
                      <input
                        type={selectedChoice.name === "brownie pan" ? "radio" : "checkbox"}
                        value={sf}
                        checked={selectedChoiceFlavors.includes(sf)}
                        onChange={() => handleChoiceFlavorToggle(sf)}
                      />
                      {sf}
                    </label>
                  ))}
                </div>
              )}
              <div className="quantity">
                <h4>Quantity:</h4>
                <input
                  type="number"
                  value={quantity}
                  max={selectedOption.name === "single" && 1}
                  min={selectedOption.name === "multiple" ? 2 : 1}
                  onChange={handleQuantityChange}
                />
              </div>
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
