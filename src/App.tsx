import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import { Carousel } from "./components/image-carousel/Carousel";
import { productImages } from "../public/images/data/productImages";

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
  const [isCartLoaded, setIsCartLoaded] = useState(false);

  // STEP 1: Load cart data first (runs once on startup)
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cartItems");
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          setCartItems(parsedCart);
        }
      }
    } catch (error) {
      console.error("Error parsing cart from localStorage", error);
    } finally {
      setIsCartLoaded(true);
    }
  }, []);

  // STEP 2: Save cart data (only after initial load is complete)
  useEffect(() => {
    if (isCartLoaded) {
      // ← This prevents overwriting on initial render
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      console.log("Cart saved to localStorage:", cartItems);
    }
  }, [cartItems, isCartLoaded]);

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
            src: productImages[0].src,
            alt: productImages[0].alt,
            thumbnail: productImages[0].thumbnail,
            price: 125,
            quantity: 1,
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

  // Add to cart functionality
  const addToCart = (id: number, quantity: number) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === id);

      if (existingItem) {
        // If it's already in the cart, update the quantity
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: quantity } : item
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
  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header
        currentIndex={currentIndex}
        getTotal={getCartTotal}
        cartItems={cartItems}
        quantity={quantity}
        removeItem={removeFromCart}
        setCartItems={setCartItems}
      />
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
