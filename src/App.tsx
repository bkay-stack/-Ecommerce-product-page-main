import { useState } from "react";
import Header from "./components/header/Header";
import { Carousel } from "./components/image-carousel/Carousel";
import { Cart } from "./components/cart/Cart";
import { productImages } from "./data/productImages";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % productImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + productImages.length) % productImages.length
    );
  };

  const handleThumbnailClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Header />
      <Cart currentIndex={currentIndex} />
      <Carousel
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleThumbnailClick={handleThumbnailClick}
        isModalOpen={isModalOpen}
      />
    </>
  );
}

export default App;
