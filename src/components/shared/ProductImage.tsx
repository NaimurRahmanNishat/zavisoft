"use client";
import Image from "next/image";
import { useState } from "react";

interface ProductImageProps {
  images?: string[];
}

const ProductImage = ({ images = [] }: ProductImageProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) {
    return null;
  }

  return (
    <>
      {/* Desktop — 2x2 grid */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-4">
        {images.slice(0, 4).map((img, i) => (
          <Image
            key={i}
            src={img}
            alt="product image"
            width={500}
            height={500}
            className={`
              ${i === 0 ? "md:rounded-tl-[48px]" : ""}
              ${i === 1 ? "md:rounded-tr-[48px]" : ""}
              ${i === 2 ? "md:rounded-bl-[48px]" : ""}
              ${i === 3 ? "md:rounded-br-[48px]" : ""}
            `}
          />
        ))}
      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-3 md:hidden">

        {/* Main image + dots */}
        <div className="w-full rounded-2xl overflow-hidden relative">
          <Image
            src={images[activeIndex]}
            alt="product main image"
            width={500}
            height={500}
            className="w-full object-cover"
          />

          {/* Dots */}
          <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
            {images.slice(0, 4).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`rounded-full transition-all duration-300
                  ${activeIndex === i
                    ? "bg-[#4A69E2] w-4 h-2"
                    : "bg-white/70 w-2 h-2"}
                `}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail images */}
        <div className="flex gap-2">
          {images.slice(0, 4).map((img, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-xl overflow-hidden cursor-pointer border-2 transition-all
                ${activeIndex === i ? "border-[#4A69E2]" : "border-transparent"}
              `}
            >
              <Image
                src={img}
                alt={`product image ${i + 1}`}
                width={200}
                height={200}
                className="w-16 h-16 rounded-xl object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default ProductImage;