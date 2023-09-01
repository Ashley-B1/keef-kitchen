import React, { useContext } from 'react';
import Modal from "react-modal";

import CartProduct from "../CartProduct";
import "./CheckoutModal.scss"

import { CartContext } from "../../context/CartContext"

const CheckoutModal = ({ isOpen, onRequestClose, cartItems }) => {
  const cart = useContext(CartContext);

  const total = cart.getTotalCost().toFixed(2)

  return (
    <Modal overlayClassName="co-overlay" className="co-modal" isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Your Cart:</h2>
      {/* {cartItems.map(item => (
        <CartProduct quantity={cart.getProductQuantity(item.id)} id={item.id} />
      ))} */}

      <h3>Total: {total}</h3>
    </Modal>
  );
}

// price={item.price} 

export default CheckoutModal