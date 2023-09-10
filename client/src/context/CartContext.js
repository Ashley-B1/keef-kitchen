import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export const CartProvider = ({ children }) => {
    const initialCart = JSON.parse(localStorage.getItem('cart')) || [];

  const [cartProducts, setCartProducts] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartProducts));
  }, [cartProducts])

  const getProductQuantity = (id) => {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  };

  const addToCart = (id, name, quantity, priceId, price, option, flavor, choice, choiceFlavor) => {
    quantity = parseInt(quantity, 10);
  
    const existingProductIndex = cartProducts.findIndex((product) => product.id === id);
  
    if (existingProductIndex === -1) {
      setCartProducts([...cartProducts, { id, name, quantity, priceId, price, option, flavor, choice, choiceFlavor }]);
    } else {
      const updatedCart = [...cartProducts];
      updatedCart[existingProductIndex].quantity += quantity;
      setCartProducts(updatedCart);
    }
  };

  const addOneToCart = id => {
    const quantity = getProductQuantity(id);

    if (!quantity) {
      setCartProducts(
        [
          ...cartProducts,
          {
            id,
            quantity: 1
          }
        ]
      )
    } else {
      setCartProducts(
        cartProducts.map(
          product => 
          product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
        )
      )
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

    cartProducts.forEach(item => {
      totalCost += item.price * item.quantity;
    });

    return totalCost.toFixed(2);
  };

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addToCart,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
