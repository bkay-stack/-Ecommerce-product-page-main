import { useState, useEffect } from "react";
import "./header.styles.css";
import logo from "../../assets/images/logo.svg";
import profileImg from "../../assets/images/image-avatar.png";
import cartImg from "../../assets/images/icon-cart.svg";
import Hamburger from "../ham-menu/Hamburger";
import { Cart } from "../cart/Cart";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string; // or whatever fields your item has
};

type HeaderProps = {
  currentIndex: number;
  quantity: number;
  getTotal: () => number;
  cartItems: CartItem[];
  removeItem: (id: number) => void;
  setCartItems: (items: CartItem[]) => void;
};
const Header = ({
  currentIndex,
  cartItems,
  getTotal,
  quantity,
  removeItem,
  setCartItems,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
    console.log("clicked :", cartOpen);
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  // Toggle Menu
  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log("clicked :", isOpen);
  };

  // useEffect
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    // Logs for debugging
    console.log("Body overflow:", document.body.style.overflow);
  }, [isOpen]);

  return (
    <>
      <header className="header container">
        {/* overlay */}
        <div className={` ${isOpen ? "show-overlay" : "active-overlay"}`}></div>
        <nav className="">
          {/* Hamburger menu */}
          <div
            className="hamburger-container hamburger hamburger-desktop"
            onClick={handleToggle}
          >
            <Hamburger />
          </div>

          {/* Logo */}
          <div className="logo-wrapper">
            <div className="header-logo desktop-logo">
              <img src={logo} alt="" />
            </div>

            {/* nav links */}
            <div className={`header-menu ${isOpen ? "active" : ""}`}>
              <ul>
                <li>
                  <a href="#collections">Collections</a>
                </li>
                <li>
                  <a href="#men">Men</a>
                </li>
                <li>
                  <a href="#women">Women</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Hamburger menu */}
          <div
            className="hamburger-container hamburger hamburger-mobile"
            onClick={handleToggle}
          >
            <Hamburger />
          </div>

          {/* Mobile logo */}

          <div className="header-logo mobile-logo">
            <img src={logo} alt="" />
          </div>

          {/* Profile */}
          <div className="profile-section">
            <div
              className={`cart-icon ${cartOpen ? "active" : ""}`}
              onClick={toggleCart}
            >
              <img src={cartImg} alt="cart" className="cart-icon" />
              {totalQuantity > 0 && (
                <span className="cart-count">{totalQuantity}</span>
              )}
            </div>

            <div className="avatar">
              <img src={profileImg} alt="" className="profile-img" />
            </div>
          </div>
        </nav>
        {cartOpen && (
          <Cart
            currentIndex={currentIndex}
            getTotal={getTotal}
            quantity={quantity}
            removeItem={removeItem}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        )}
      </header>
    </>
  );
};

export default Header;
