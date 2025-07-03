import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
function CartProvider({ children }) {
  const savedCard = localStorage.getItem("cartItems");
  const getCard = savedCard ? JSON.parse(savedCard) : [];
  const [cartItems, setCartItems] = useState(getCard);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (course) => {
    const findItem = cartItems.find((item) => item.id === course.id);
    if (!findItem) {
      setCartItems((prev) => [...prev, course]);
    }
  };

  const removeFromCart = (courseId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== courseId));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
