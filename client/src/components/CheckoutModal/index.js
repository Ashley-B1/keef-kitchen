import React, { useContext } from "react";
import Modal from "react-modal";

import CartProduct from "../CartProduct";
import "./CheckoutModal.scss";

import { CartContext } from "../../context/CartContext";

const CheckoutModal = ({ isOpen, onRequestClose, cartItems }) => {
  const cart = useContext(CartContext);

  const total = cart.getTotalCost();

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
      </div>
    </Modal>
  );
};

export default CheckoutModal;
