import { useState } from "react";
import "./carosusel.styles.css";
import { productImages } from "../../data/productImages";
import arrowIMGleft from "../../assets/images/icon-next.svg";
import arrowIMGright from "../../assets/images/icon-previous.svg";
export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % productImages.length);
  };
  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + productImages.length) % productImages.length
    );
  };

  return (
    <div className="sneakers-showcase">
      <div className="sneaker-company">
        <h1>Sneaker Company</h1>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="price">
          <span>$125.00</span>
          <span className="discount">50%</span>
        </div>
        <div className="old-price">$250.00</div>
        <div className="add-to-cart">
          <button className="add-to-cart-btn">
            <img
              src="../../assets/images/icon-cart.svg"
              alt="cart"
              className="cart-icon"
            />
            Add to cart
          </button>
          <div className="quantity">
            <button className="minus">-</button>
            <span className="quantity-number">0</span>
            <button className="plus">+</button>
          </div>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="carousel">
        <div className="arrow-left">
          <img
            src={arrowIMGright}
            alt=""
            className="arrow arrow-left"
            onClick={() => handlePrev()}
          />
        </div>
        {productImages.map((img, index) => (
          <img
            key={img.id}
            src={img.src}
            alt={img.alt}
            className={`${index === currentIndex ? "active" : "hidden"}`}
          />
        ))}
        <div className="arrow-right">
          <img
            src={arrowIMGleft}
            alt=""
            className="arrow "
            onClick={() => handleNext()}
          />
        </div>
      </div>
    </div>
  );
};
