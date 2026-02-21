// components/shared/RelatedProducts.tsx
"use client";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ProductCard from "../home/ProductCard";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

interface Props {
  currentProductId?: number;
}

interface Product {
  id: number;
  title: string;
  images: string[];
  price: number;
}

const RelatedProduct = ({ currentProductId }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const load = async () => {
      try {
        const {data} = await api.get(`/products?offset=0&limit=9`);
      const filtered = data.filter((p: Product) => p.id !== currentProductId);
      setProducts(filtered);
      } catch (error) {
        console.error("Failed to load categories", error);
      }
    };
    load();
  }, [currentProductId]);

  const visibleCount = 4;

  const handlePrev = () => {
    if (index > 0) setIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (index + visibleCount < products.length) setIndex((prev) => prev + 1);
  };

  const visible = products.slice(index, index + visibleCount);

  return (
    <section className="desktop px-4 md:px-0 py-16">
      <div className="w-full flex items-center justify-between mb-8 md:mb-12">
        <h2 className="text-[#232321] md:text-[48px] text-[24px] font-rubik font-semibold leading-[100%]">
          You may also like
        </h2>
        <div className="flex md:gap-4 gap-2">
          <button
            onClick={handlePrev}
            disabled={index === 0}
            className="md:w-10 w-8 h-8 md:h-10 bg-black flex items-center justify-center rounded-sm disabled:opacity-40"
          >
            <MdKeyboardArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-[#E7E7E3]" />
          </button>
          <button
            onClick={handleNext}
            disabled={index + visibleCount >= products.length}
            className="md:w-10 w-8 h-8 md:h-10 bg-black flex items-center justify-center rounded-sm disabled:opacity-40"
          >
            <MdKeyboardArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#E7E7E3]" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {visible.map((p) => (
          <ProductCard
            key={p.id}
            product={{
              id: p.id,
              title: p.title,
              images: p.images,
              isNew: true,
              price: p.price,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProduct;