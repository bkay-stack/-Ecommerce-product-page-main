import { useState } from "react";
import "./carosusel.styles.css";
import { productImages } from "../../data/productImages";
import arrowIMGleft from "../../assets/images/icon-next.svg";
import arrowIMGright from "../../assets/images/icon-previous.svg";
import plusIcon from "../../assets/images/icon-plus.svg";
import minusIcon from "../../assets/images/icon-minus.svg";
import cartIcon from "../../assets/images/icon-cart.svg";
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
    <>
      {/* Large Screen View */}
      <div className="sneakers-showcase showcase-container large-screen">
        {/* Sneaker Content */}
        <div className="sneaker-content ">
          <h3>Sneaker Company</h3>
          <h2>Fall Limited Edition Sneakers</h2>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="price-content">
            <div className="price">
              <h4 className="init-price">$125.00</h4>
              <span className="discount">50%</span>
            </div>
            <span className="old-price">$250.00</span>
          </div>

          {/* Add to Cart Section */}
          <div className="add-to-cart">
            <div className="quantity">
              <img src={minusIcon} alt="" className="minus" />
              <span className="number">0</span>
              <img src={plusIcon} alt="" className="plus" />
            </div>
            {/* <> */}
            <div className="cart">
              <button className="add-to-cart-btn">
                <div className="cart-icon">
                  <img src={cartIcon} alt="" />
                </div>
                <span>Add to cart</span>
              </button>
            </div>
            {/* </> */}
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
      {/* Mobile View */}
    </>
  );
};
