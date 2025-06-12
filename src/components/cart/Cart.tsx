import React from "react";
import "./cart.styles.css";
import { productImages } from "../../data/productImages";

type CartProps = {
  currentIndex: number;
  getTotal: () => number;
  quantity: number;
  removeItem: (id: number) => void;
};
// Type annotation for props
export const Cart: React.FC<CartProps> = ({
  currentIndex,
  getTotal,
  quantity,
}: CartProps) => {
  return (
    <div className="cart-container">
      <div className="cart-content">
        <div className="cart-title">
          <h2>Cart</h2>
          <div className="cart-line"></div>
        </div>
        {quantity > 0 ? (
          <div className="cart-items">
            {productImages.map((image, index) => (
              <div
                className={`cart-item ${
                  index === currentIndex ? "active" : "hidden"
                }`}
                key={image.id}
              >
                <img
                  src={image.thumbnail}
                  alt={image.alt}
                  className="cart-item-image"
                />
              </div>
            ))}
            <div className="cart-item-details">
              <span className="cart-item-name">
                Fall Limited Edition Sneakers
              </span>
              <p className="cart-item-price">
                $125.00 x {quantity}{" "}
                <span className="total-price">{getTotal()}</span>
              </p>
            </div>
            <div className="delete-svg" onClick={() => removeItem(1)}>
              <img src="/images/icon-delete.svg" alt="" />
            </div>
          </div>
        ) : (
          <div className="cart-empty">
            <h3>Cart is empty</h3>
          </div>
        )}

        <div className="btn-wrapper">
          <button className="cart-button">Checkout</button>
        </div>
      </div>
    </div>
  );
};
