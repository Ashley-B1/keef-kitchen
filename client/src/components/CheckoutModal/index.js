import React, { useContext } from "react";
import Modal from "react-modal";

import CartProduct from "../CartProduct";
import "./CheckoutModal.scss";

import { CartContext } from "../../context/CartContext";

const CheckoutModal = ({ isOpen, onRequestClose, cartItems }) => {
  const cart = useContext(CartContext);
  const total = cart.getTotalCost();

  const checkout = async () => {
    const data = {
      items: cart.items,
    };

    try {
      const res = await fetch(`https://thekeefkitchen-5ad8a18f7185.herokuapp.com/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const resData = await res.json();
        if (resData.url) {
          window.location.assign(resData.url);
        }
      } else {
        console.error("Checkout failed");
      }
    } catch (e) {
      console.error("Error during checkout:", e);
    }
  };

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
        <button onClick={checkout} className="checkout">
          Checkout
        </button>
      </div>
    </Modal>
  );
};

export default CheckoutModal;
