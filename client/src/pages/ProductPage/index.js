import React, { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { keefProducts } from "../../resources/keefProducts";
import categories from "../../resources/categoryData";
import { CartContext } from "../../context/CartContext";

import "./ProductPage.scss";

const ProductPage = () => {
  const { id } = useParams();

  const cart = useContext(CartContext);

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

  const handleAddToCart = () => {
    cart.addToCart(selectedProduct.id, parseInt(quantity, 10), selectedPrice, selectedOption, selectedFlavors, selectedChoice, selectedChoiceFlavors);
  };


  const handleChoiceChange = (choice) => {
    setSelectedChoice(choice);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setSelectedFlavors([]);
    setSelectedChoiceFlavors([]);
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

  const handleChoiceFlavorToggle = (flavor) => {
    if (selectedChoiceFlavors.includes(flavor)) {
      setSelectedChoiceFlavors(
        selectedChoiceFlavors.filter((fl) => fl !== flavor)
      );
    } else {
      setSelectedChoiceFlavors([...selectedChoiceFlavors, flavor]);
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const totalPrice = () => {
    const optionPrice = selectedPrice || 0;
    return optionPrice * quantity;

    // console.log("Selected Option:", selectedOption);
    // console.log("Quantity:", quantity);

    // if (selectedOption && quantity > 0) {
    //   console.log("Calculating price...");
    //   console.log(selectedOption?.price * quantity)
    //   return selectedOption?.price * quantity;
    // }

    // return 0;
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
                        checked={selectedFlavors.includes(flavor)}
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
                        checked={selectedChoiceFlavors.includes(sf)}
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
            <button onClick={handleAddToCart}>
              Add To Cart
            </button>
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
