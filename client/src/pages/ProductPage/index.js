import React, { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { keefProducts } from "../../resources/keefProducts";
import categories from "../../resources/categoryData";
import { CartContext } from "../../context/CartContext";

import "./ProductPage.scss";

const ProductPage = () => {
  const { id } = useParams();

  const cart = useContext(CartContext);
  const isPriceId = (id) => typeof id === "string" && id.includes("price");

  const selectedProduct = keefProducts.find((product) => product.id === id);
  const category = categories.find(
    (cat) => cat.id === selectedProduct.categoryId
  );

  const [selectedOption, setSelectedOption] = useState(
    selectedProduct.options[0]
  );
  const [selectedFlavor, setSelectedFlavors] = useState("");
  const [selectedChoiceFlavors, setSelectedChoiceFlavors] = useState("");

  const [selectedPrice, setSelectedPrice] = useState(
    selectedProduct.price || selectedProduct.options[0].price
  );
  const [selectedPriceId, setSelectedPriceId] = useState(
    isPriceId(selectedProduct.id)
      ? selectedProduct.id
      : selectedProduct.options[0].id
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedChoice, setSelectedChoice] = useState(
    selectedOption.choices && selectedOption.choices[0]
  );

  const handleAddToCart = () => {
    cart.addToCart(
      selectedProduct.id,
      selectedProduct.name,
      parseInt(quantity, 10),
      selectedPriceId,
      selectedPrice,
      selectedOption,
      selectedFlavor,
      selectedChoice,
      selectedChoiceFlavors
    );
  };

  const handleChoiceChange = (choice) => {
    setSelectedChoice(choice);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setSelectedFlavors([]);
    setSelectedChoiceFlavors([]);
    setSelectedPrice(option.price || selectedProduct.price);

    if (isPriceId(selectedOption.id)) setSelectedPriceId(option.id);

    if (option.name === "multiple") {
      setQuantity(2);
    } else {
      setQuantity(1);
    }
  };

  const handleFlavorToggle = (flavor) => {
    setSelectedFlavors(flavor);
  };

  const handleChoiceFlavorToggle = (flavor) => {
    setSelectedChoiceFlavors(flavor);
  };

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
                {selectedProduct.options.map((option, i) => (
                  <span key={i} className="opt">
                    <input
                      type="radio"
                      name="options"
                      checked={selectedOption === option}
                      value={option.id}
                      onChange={() => handleOptionChange(option)}
                    />
                    <label key={option.id}>{option.name}</label>
                  </span>
                ))}
              </div>
              {selectedOption.flavors && (
                <div className="flavors">
                  <h4>Flavors:</h4>
                  {selectedOption?.flavors.map((flavor, i) => (
                    <span key={i} className="flav">
                      <input
                        type={
                          selectedOption.name === "cheesecake" || "donuts"
                            ? "radio"
                            : "checkbox"
                        }
                        name="flavors"
                        value={flavor}
                        checked={selectedFlavor === flavor}
                        onChange={() => handleFlavorToggle(flavor)}
                      />
                      <label key={flavor}>{flavor}</label>
                    </span>
                  ))}
                </div>
              )}
              {selectedOption.choices && (
                <div className="choices">
                  <h4>Choices:</h4>
                  {selectedOption.choices.map((choice, i) => (
                    <span key={i}>
                      <input
                        type="radio"
                        value={choice.id}
                        name="choices"
                        checked={selectedChoice === choice}
                        onChange={() => handleChoiceChange(choice)}
                      />
                      <label key={choice.id}>{choice.name}</label>
                    </span>
                  ))}
                </div>
              )}
              {selectedChoice && selectedChoice.flavors && (
                <div className="choice-flavors">
                  <h4>Second Flavor</h4>
                  {selectedChoice.flavors.map((sf, i) => (
                    <span key={i}>
                      <input
                        name="sf"
                        type={
                          selectedChoice.name === "brownie pan" || "cupcake"
                            ? "radio"
                            : "checkbox"
                        }
                        value={sf}
                        checked={selectedChoiceFlavors === sf}
                        onChange={() => handleChoiceFlavorToggle(sf)}
                      />
                      <label key={sf}>{sf}</label>
                    </span>
                  ))}
                </div>
              )}
              <div className="quantity">
                <h4>Quantity:</h4>
                <input
                  type="number"
                  value={quantity}
                  max={
                    selectedOption.name === "single" &&
                    selectedProduct === "Nerds Ropes"
                      ? 1
                      : ""
                  }
                  min={selectedOption.name === "multiple" ? 2 : 1}
                  onChange={handleQuantityChange}
                />
              </div>
            </div>
            <button onClick={handleAddToCart}>Add To Cart</button>
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
