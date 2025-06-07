import { useState } from "react";
import Header from "./components/header/Header";
import { Carousel } from "./components/image-carousel/Carousel";
import { productImages } from "./data/productImages";

type CartItem = {
  id: number;
  src: string;
  alt: string;
  thumbnail: string;
  price: number;
  quantity: number;
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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

  // Add to cart functionality can be added here later
  const addToCart = (item: CartItem) => {};

  // Increase item quantity in cart
  const increaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease item quantity in cart
  const decreaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // Delete item from cart
  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header currentIndex={currentIndex} removeFromCart={removeFromCart} />
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
