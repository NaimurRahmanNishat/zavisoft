// src/components/shared/ProductInfo.tsx
// src/components/shared/ProductInfo.tsx
"use client";

import { HeartIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import { addToCart } from "@/redux/cart/cartSlice";

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
  const [selectedSize, setSelectedSize] = useState<number>(38);

  const router = useRouter();
  const dispatch = useDispatch();

  // ✅ Redux cart items
  const items = useSelector((state: RootState) => state.cart.items);

  // ✅ check if already in cart (same product + same size)
  const isInCart = items.some(
    (item) => item.id === product.id && item.size === selectedSize
  );

  const handleAddToCart = () => {
    if (isInCart) {
      toast.warning("Product already in cart 🛒");
      return;
    }

    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        images: product.images,
        price: product.price,
        size: selectedSize,
        quantity: 1,
      })
    );

    toast.success("Added to cart 🛒");
  };

  const handleBuyNow = () => {
    if (!isInCart) {
      dispatch(
        addToCart({
          id: product.id,
          title: product.title,
          images: product.images,
          price: product.price,
          size: selectedSize,
          quantity: 1,
        })
      );
    }

    router.push("/cart");
  };

  return (
    <div className="flex flex-col gap-5">

      {/* Category */}
      <span className="inline-flex w-fit px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded-md">
        {product.category?.name}
      </span>

      {/* Title */}
      <h1 className="text-2xl font-black text-gray-900 uppercase">
        {product.title}
      </h1>

      {/* Price */}
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
                ${
                  selectedSize === size
                    ? "bg-gray-900 text-white border-gray-900"
                    : "border-gray-300 text-gray-800"
                }`}
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
          className="flex-1 h-12 bg-gray-900 text-white rounded-xl cursor-pointer"
        >
          Add to Cart
        </button>

        <button className="w-12 h-12 border rounded-xl flex items-center justify-center">
          <HeartIcon />
        </button>
      </div>

      {/* Buy now */}
      <button
        onClick={handleBuyNow}
        className="h-12 w-full bg-blue-500 text-white rounded-xl cursor-pointer"
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
