import { useState, useEffect } from "react";
import "./header.styles.css";
import logo from "../../assets/images/logo.svg";
import profileImg from "../../assets/images/image-avatar.png";
import cartImg from "../../assets/images/icon-cart.svg";
import Hamburger from "../ham-menu/Hamburger";
import { Cart } from "../cart/Cart";

type HeaderProps = {
  currentIndex: number;
  quantity: number;
  getTotal: () => number;
  cartItems: CartItem[];
  removeItem: (id: number) => void;
};
const Header = ({
  currentIndex,
  cartItems,
  getTotal,
  quantity,
  removeItem,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
            <div className="cart">
              <img src={cartImg} alt="cart" />
              {totalQuantity > 0 && (
                <span className="cart-count">{totalQuantity}</span>
              )}
            </div>

            <div className="avatar">
              <img src={profileImg} alt="" />
            </div>
          </div>
        </nav>
        <Cart
          currentIndex={currentIndex}
          getTotal={getTotal}
          quantity={quantity}
          removeItem={removeItem}
          cartItems={cartItems}
        />
      </header>
    </>
  );
};

export default Header;
