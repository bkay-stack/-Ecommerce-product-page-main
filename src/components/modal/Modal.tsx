import arrowIMGleft from "../../assets/images/icon-next.svg";
import arrowIMGright from "../../assets/images/icon-previous.svg";

import closeIcon from "../../assets/images/icon-close.svg";
import "./modal.style.css";

// Types
type ModalProps = {
  isOpen: boolean;

  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  handleNext: () => void;
  handlePrev: () => void;
  handleThumbnailClick: () => void;

  productImages: {
    id: number;
    src: string;
    alt: string;
    thumbnail: string;
  }[];
};
export const Modal = ({
  handleThumbnailClick,
  handleNext,
  handlePrev,
  currentIndex,
  setCurrentIndex,
  productImages,
}: ModalProps) => {
  return (
    <div className={`modal `}>
      <div
        className="close-modal close-modal-icon"
        onClick={() => {
          console.log("Close modal");
          handleThumbnailClick();
        }}
      >
        <img src={closeIcon} alt="" />
      </div>
      {/* Image Carousel */}
      <div className="carousel carousel-modal-mobile">
        <div className="arrow-left-modal arrow-hidden-modal">
          <img
            src={arrowIMGright}
            alt=""
            className="arrow-modal arrow-left"
            onClick={() => handlePrev()}
          />
        </div>
        {productImages.map((img, index) => (
          <img
            key={img.id}
            src={img.src}
            alt={img.alt}
            className={` carousel-img ${
              index === currentIndex ? "active" : "hidden"
            }`}
          />
        ))}
        <div className="arrow-right-modal arrow-hidden-modal">
          <img
            src={arrowIMGleft}
            alt=""
            className="arrow-modal "
            onClick={() => handleNext()}
          />
        </div>
        <div className="thumbnails">
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
  );
};
