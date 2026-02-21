// src/components/shared/ProductInfo.tsx
"use client";
import { HeartIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { toast } from "react-toastify";

interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}

interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  images: string[];
  category: Category;
}

interface ProductInfoProps {
  product: Product;
}

const SIZES = [38, 39, 40, 41, 42, 43];

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [selectedSize, setSelectedSize] = useState(38);
  const { addToCart, items } = useCartStore();
  const router = useRouter();

  const isInCart = items.some(
    (i) => i.id === product.id && i.size === selectedSize
  );

  const handleAddToCart = () => {
    if (isInCart) {
      toast.warning("Product already in cart! 🛒");
      return;
    }
    addToCart({
      id: product.id,
      title: product.title,
      images: product.images,
      price: product.price,
      size: selectedSize,
      quantity: 1,
    });
    toast.success("Cart successfully! 🛒");
  };

  const handleBuyNow = () => {
    if (!isInCart) {
      addToCart({
        id: product.id,
        title: product.title,
        images: product.images,
        price: product.price,
        size: selectedSize,
        quantity: 1,
      });
    }
    router.push("/cart");
  };

  return (
    <div className="flex flex-col gap-5">

      <span className="inline-flex w-fit px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded-md">
        {product.category?.name}
      </span>

      <h1 className="text-2xl font-black text-gray-900 uppercase">
        {product.title}
      </h1>

      <p className="text-2xl font-bold text-blue-500">
        ${product.price}
      </p>

      {/* Size */}
      <div>
        <p className="text-xs font-bold uppercase mb-2">Size</p>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-11 h-10 rounded-lg border text-sm font-semibold
                ${selectedSize === size
                  ? "bg-gray-900 text-white border-gray-900"
                  : "border-gray-300 text-gray-800"}
              `}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex gap-2">
        <button
          onClick={handleAddToCart}
          className="flex-1 h-12 bg-gray-900 cursor-pointer text-white rounded-xl"
        >
          Add to Cart
        </button>
        <button className="w-12 h-12 border rounded-xl flex items-center justify-center">
          <HeartIcon />
        </button>
      </div>

      <button
        onClick={handleBuyNow}
        className="h-12 flex items-center justify-center cursor-pointer bg-blue-500 text-white rounded-xl w-full"
      >
        Buy It Now
      </button>

      {/* Description */}
      <div className="pt-2 border-t">
        <p className="text-xs font-bold uppercase mb-2">
          About The Product
        </p>
        <p className="text-sm text-gray-500">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
