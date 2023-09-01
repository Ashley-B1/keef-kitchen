import { createContext, useState } from "react";
import { getProductData } from "../resources/keefProducts";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const getProductQuantity = (id) => {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  };

  const addOneToCart = (id) => {
    const quantity = getProductQuantity(id);

    if (!quantity) {
      setCartProducts([...cartProducts, { id, quantity: 1 }]);
    } else {
      setCartProducts(
        cartProducts.map((product) => {
          return product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product;
        })
      );
    }
  };

  const removeOneFromCart = (id) => {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  };

  const deleteFromCart = (id) => {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currProduct) => {
        return currProduct.id !== id;
      })
    );
  };

  const getTotalCost = () => {
    let totalCost = 0;

    cartProducts.map((item) => {
      const productData = getProductData(item.id);
      totalCost += Number(productData.price) * item.quantity;
    });

    return totalCost;
  };

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
