/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState } from "react";
import products from "./products";

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < products.length; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  const [quantity, setQuantity] = useState(getDefaultCart());
  const [cartAmount, setCartAmount] = useState(0);
  const handleClick = (id) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [id]: prevQuantity[id] + 1,
    }));
    setCartAmount(
      (PrevcartAmount) => PrevcartAmount + products[id].productPrice
    );
    console.log(cartAmount);
  };
  const contextValue = { cartAmount, quantity, handleClick };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
