import React, { useContext } from 'react';

import { CartContext } from "../../context/CartContext";
import { getProductData } from '../../resources/keefProducts';

const CartProduct = ({ id, quantity }) => {
  const cart = useContext(CartContext);
  const productData = getProductData(id);

  return (
    <>
      <h3>{productData.name}</h3>
      <p>{quantity === 1 ? `${quantity} item` : `${quantity} items`}</p>
      {/* <p>${(quantity * price)}</p> */}
      <button onClick={() => cart.deleteFromCart(id)}>Remove</button>
    </>
  )
}

export default CartProduct