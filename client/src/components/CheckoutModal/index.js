import React, { useContext } from "react";
import Modal from "react-modal";

import CartProduct from "../CartProduct";
import "./CheckoutModal.scss";

import { CartContext } from "../../context/CartContext";

const CheckoutModal = ({ isOpen, onRequestClose, cartItems }) => {
  const cart = useContext(CartContext);
  const total = cart.getTotalCost();
  console.log("HELLO")

  const checkout = async () => {
    await fetch(`http://localhost:5001/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items })
    }).then(res => {
      return res.json();
    }).then(res => {
      res.url && window.location.assign(res.url);
    }).catch(e => {
      console.log(e)
    })
  }

  return (
    <Modal
      overlayClassName="co-overlay"
      className="co-modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Your Cart</h2>
      <div className="modal-items">
        {cartItems.map((item) => (
          <CartProduct
            item={item}
            key={item.id}
            quantity={cart.getProductQuantity(item.id)}
            id={item.id}
            price={item.price}
            option={item.option?.name}
            flavor={item.flavor}
            choice={item.choice?.name}
            choiceFlavor={item.choiceFlavor}
          />
        ))}

        <h3>Total: {total}</h3>
        <button onClick={checkout} className="checkout">Checkout</button>
      </div>
    </Modal>
  );
};

export default CheckoutModal;
