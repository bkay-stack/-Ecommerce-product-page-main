import { useState, useEffect } from "react";
import "./header.styles.css";
import logo from "../../assets/images/logo.svg";
import profileImg from "../../assets/images/image-avatar.png";
import cartImg from "../../assets/images/icon-cart.svg";
import Hamburger from "../ham-menu/Hamburger";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log("clicked :", isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <header className="header container">
      <nav>
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
        <div className="hamburger-container hamburger hamburger-mobile">
          <Hamburger />
        </div>

        {/* Mobile logo */}

        <div className="header-logo mobile-logo">
          <img src={logo} alt="" />
        </div>

        {/* Profile */}
        <div className="profile-section">
          <div className="cart">
            <img src={cartImg} alt="" />
          </div>
          <div className="avatar">
            <img src={profileImg} alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
