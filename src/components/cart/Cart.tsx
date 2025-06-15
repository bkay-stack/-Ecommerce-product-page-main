import React from "react";
import "./cart.styles.css";
import { productImages } from "../../../public/data/productImages";

type CartProps = {
  currentIndex: number;
  getTotal: () => number;
  quantity: number;
  removeItem: (id: number) => void;
  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;
};
// Type annotation for props
export const Cart: React.FC<CartProps> = ({
  currentIndex,
  getTotal,
  quantity,
  removeItem,
  cartItems,
  setCartItems,
}: CartProps) => {
  const checkout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    // Optional: confirm with the user
    const confirmed = window.confirm(
      "Are you sure you want to complete the purchase?"
    );
    if (!confirmed) return;

    // Clear the cart
    setCartItems([]);

    // Optional: success feedback
    alert("Thank you for your purchase!");

    //
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  return (
    <div className="cart-container">
      <div className="cart-content">
        <div className="cart-title">
          <h2>Cart</h2>
          <div className="cart-line"></div>
        </div>
        {cartItems.length ? (
          <>
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

            <div className="btn-wrapper" onClick={checkout}>
              <button className="cart-button">Checkout</button>
            </div>
          </>
        ) : (
          <p className="cart-empty">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};
