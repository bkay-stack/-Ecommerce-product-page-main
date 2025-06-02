import React from "react";
import "./cart.styles.css";
import { productImages } from "../../data/productImages";

type CartProps = {
  currentIndex: number;
};

// type Cart annotation
export const Cart: React.FC<CartProps> = ({ currentIndex }) => {
  return (
    <div className="cart-container">
      <div className="cart-content">
        <h2 className="cart-title">Cart</h2>
        <div className="cart-line"></div>
        <div className="cart-items">
          {productImages.map((imag, index) => (
            <div
              className={`cart-item ${
                index === currentIndex ? "active" : "hidden"
              }`}
              key={imag.id}
            >
              <img
                src={imag.thumbnail}
                alt={imag.alt}
                className="cart-item-image"
              />
            </div>
          ))}
        </div>
        <button className="cart-button">Continue Shopping</button>
      </div>
    </div>
  );
};
