import React, { useContext } from "react";
import Order from "../components/cart/Order";
import CartItem from "../components/cart/CartItem";
import { CartContext } from "../context/CartContext";
const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">🛒 سبد خرید شما</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-md">
          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-red-500 flex justify-center items-center text-xl">
                سبد خرید شما خالی است
              </p>
            ) : (
              cartItems.map((item) => <CartItem key={item.id} item={item} />)
            )}
          </div>
        </div>
        <Order cartItems={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
