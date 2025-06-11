import { useState, useEffect } from "react";
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
  const [quantity, setQuantity] = useState(1);

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

  // Increase item quantity in cart
  const increaseQuantity = (id: number) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === id);

      if (existingItem) {
        // Item exists - increase quantity
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Item doesn't exist - add it with quantity 1
        return [
          ...prev,
          {
            id,
            src: productImages[0].src, // assuming first product
            alt: productImages[0].alt,
            thumbnail: productImages[0].thumbnail,
            price: 125,
            quantity: 1, // start with 0 quantity
          },
        ];
      }
    });
  };

  const decreaseQuantity = (id: number) => {
    setCartItems(
      (prev) =>
        prev
          .map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(0, item.quantity - 1) }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove items with 0 quantity
    );
  };

  // Get cart total
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Get quantity of item in cart by id
  // const getQuantity = (id: number) => {
  //   return cartItems.find((item) => item.id === id)?.quantity || 0;
  // };

  // Add to cart functionality can be added here later
  const addToCart = (id: number, quantity: number) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === id);

      if (existingItem) {
        // If it's already in the cart, increase the quantity
        return prev.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new item with given quantity
        return [
          ...prev,
          {
            id,
            src: productImages[0].src,
            alt: productImages[0].alt,
            thumbnail: productImages[0].thumbnail,
            price: 125,
            quantity,
          },
        ];
      }
    });
  };

  // Delete item from cart
  // const removeFromCart = (id: number) => {
  //   setCartItems((prev) => prev.filter((item) => item.id !== id));
  // };

  useEffect(() => {
    console.log("🛒 Cart Updated:", cartItems);
  }, [cartItems]);

  return (
    <>
      <Header currentIndex={currentIndex} />
      <Carousel
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleThumbnailClick={handleThumbnailClick}
        isModalOpen={isModalOpen}
        quantity={quantity}
        setQuantity={setQuantity}
        quantityAddToCart={quantity}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        addToCart={addToCart}
      />
    </>
  );
}

export default App;
