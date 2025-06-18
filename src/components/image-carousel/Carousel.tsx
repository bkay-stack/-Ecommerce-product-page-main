import "./carosusel.styles.css";
import { productImages } from "../../../public/productImages";
import arrowIMGleft from "../../assets/images/icon-next.svg";
import arrowIMGright from "../../assets/images/icon-previous.svg";
import plusIcon from "../../assets/images/icon-plus.svg";
import minusIcon from "../../assets/images/icon-minus.svg";
import cartIcon from "../../assets/images/icon-cart.svg";
// import closeIcon from "../../assets/images/icon-close.svg";
import { Modal } from "../modal/Modal";
// import { Cart } from "../cart/Cart";

type CarouselProps = {
  // Corousel functionality
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  handleNext: () => void;
  handlePrev: () => void;
  handleThumbnailClick: () => void;
  isModalOpen: boolean;

  // Quantity management
  quantity: number;
  setQuantity: (quantity: number) => void;
  quantityAddToCart: number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;

  // Add to cart functionality
  addToCart: (id: number, quantity: number) => void;
};
export const Carousel = ({
  currentIndex,
  setCurrentIndex,
  handleNext,
  handlePrev,
  handleThumbnailClick,
  isModalOpen,
  //  cartItems,
  quantity,

  setQuantity,
  addToCart,
}: CarouselProps) => {
  return (
    <>
      {/* Large Screen View */}

      <div className="sneakers-showcase showcase-container ">
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
              <h4 className="init-price">${(125 * quantity).toFixed(2)}</h4>
              <span className="discount">50%</span>
            </div>
            <div className="old-price-wrapper">
              <span className="old-price">$250.00</span>
            </div>
          </div>

          {/* Add to Cart Section */}
          <div className="add-to-cart">
            <div className="quantity">
              <img
                src={minusIcon}
                alt=""
                className="minus"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              />
              <span className="number">{quantity}</span>
              <img
                src={plusIcon}
                alt=""
                className="plus"
                onClick={() => setQuantity(quantity + 1)}
              />
            </div>
            {/* <> */}
            {/* <div className="cart"> */}
            <button className="add-to-cart-btn">
              <div className="cart-icon">
                <img src={cartIcon} alt="" />
              </div>
              <span onClick={() => addToCart(1, quantity)}>Add to cart</span>
            </button>
            {/* </div> */}
            {/* </> */}
          </div>
        </div>

        {/* Image Carousel */}
        <div className="carousel">
          <div className="arrow-left arrow-hidden">
            <img
              src={arrowIMGright}
              alt=""
              className="arrow arrow-left"
              onClick={() => handlePrev()}
            />
          </div>
          {productImages.map((img, index) => (
            <div
              className={`carousel-wrapper ${
                index === currentIndex ? "active" : "hidden"
              }`}
              key={img.id}
            >
              <img
                key={img.id}
                src={img.src}
                alt={img.alt}
                className={` carousel-img`}
              />
            </div>
          ))}
          <div className="arrow-right arrow-hidden">
            <img
              src={arrowIMGleft}
              alt=""
              className="arrow "
              onClick={() => handleNext()}
            />
          </div>
          <div className="thumbnails" onClick={handleThumbnailClick}>
            {productImages.map((img, index) => (
              <div
                key={img.id}
                className={`thumbnail-wrapper ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <img src={img.thumbnail} alt={img.alt} className="thumbnail" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal/lightbox */}

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          handleThumbnailClick={handleThumbnailClick}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          handleNext={handleNext}
          handlePrev={handlePrev}
          productImages={productImages}
        />
      )}

      {/* <Cart /> */}
    </>
  );
};
