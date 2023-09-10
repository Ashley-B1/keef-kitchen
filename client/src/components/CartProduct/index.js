import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { getProductData } from "../../resources/keefProducts";

import "./CartProduct.scss";

const CartProduct = ({
  id,
  quantity,
  price,
  option,
  flavor,
  choice,
  choiceFlavor,
}) => {
  const cart = useContext(CartContext);
  const productData = getProductData(id);

  const isButtonDisabled = option === "multiple" && quantity < 3;

  return (
    <div className="mo-products">
      <h3>{productData.name}</h3>
      <p>{quantity === 1 ? `${quantity} item` : `${quantity} items`}</p>
      <p>{option} {flavor?.length ? `(${flavor})` : ""}</p>
      {choice && (
        <>
        <p>And:</p>
        <p>{choice} {choiceFlavor ? `(${choiceFlavor})` : ""}</p>
        </>
      )}
      <div className="price-adjust">
        <button disabled={isButtonDisabled} className="minus" onClick={() => cart.removeOneFromCart(id)}>-</button>
        <p>
          ${productData.price ? quantity * productData.price : quantity * price}
        </p>
        <button className="add" onClick={() => cart.addOneToCart(id)}>+</button>
      </div>
      <div className="modal-btns">
        <button onClick={() => cart.deleteFromCart(id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartProduct;
