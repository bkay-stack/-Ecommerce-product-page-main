import React from "react";
import "./cart.styles.css";
export const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-content">
        <h2 className="cart-title">Your Cart</h2>
        <p className="cart-empty-message">Your cart is currently empty.</p>
        <p className="cart-instructions">
          Browse our products and add items to your cart!
        </p>
        <button className="cart-button">Continue Shopping</button>
      </div>
    </div>
  );
};
