export type ProductImage = {
  id: number;
  src: string;
  thumbnail: string;
  alt: string;
};

export const productImages: ProductImage[] = [
  {
    id: 1,
    src: "/images/image-product-1.jpg",
    thumbnail: "/images/image-product-1-thumbnail.jpg",
    alt: "Orange sneakers side view",
  },
  {
    id: 2,
    src: "/images/image-product-2.jpg",
    thumbnail: "/images/image-product-2-thumbnail.jpg",
    alt: "Orange sneakers top view",
  },
  {
    id: 3,
    src: "/images/image-product-3.jpg",
    thumbnail: "/images/image-product-3-thumbnail.jpg",
    alt: "Orange sneakers sole view",
  },
  {
    id: 4,
    src: "/images/image-product-4.jpg",
    thumbnail: "/images/image-product-4-thumbnail.jpg",
    alt: "Orange sneakers angled",
  },
];
