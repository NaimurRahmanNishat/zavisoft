// src/components/home/Categories.tsx
"use client";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("https://api.escuelajs.co/api/v1/categories", {
        cache: "no-store",
      });
      const data = await res.json();
      setCategories(data);
    };
    load();
  }, []);

  const handleNext = () => {
    if (index + 2 < categories.length) {
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-[#232321]">
      {/* Header */}
      <div className="desktop flex items-center justify-between pt-10 md:pt-16 md:px-0 px-4 pb-6 md:pb-10">
        <h2 className="text-[28px] md:text-[74px] font-bold font-rubik leading-none text-white uppercase">
          Categories
        </h2>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={index === 0}
            className="w-9 h-9 md:w-11 md:h-11 bg-[#3a3a38] rounded-xl flex items-center justify-center disabled:opacity-40"
          >
            <MdKeyboardArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-[#E7E7E3] cursor-pointer" />
          </button>

          <button
            onClick={handleNext}
            disabled={index + 2 >= categories.length}
            className="w-9 h-9 md:w-11 md:h-11 bg-[#3a3a38] rounded-xl flex items-center justify-center disabled:opacity-40"
          >
            <MdKeyboardArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#E7E7E3] cursor-pointer" />
          </button>
        </div>
      </div>

      <div className="bg-[#ECEEF0] rounded-tl-[48px] md:ml-72 md:mr-64 ml-4 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {categories.slice(index, index + 2).map((category) => (
            <div
              key={category.id}
              className="relative w-full h-87.5 md:h-125 overflow-hidden"
            >
              {/* Full Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
              />

              {/* Bottom Absolute Content */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <h3 className="text-[#232321] md:text[36px] text-[24px] w-26 md:w-57.75 font-semibold uppercase leading-tight drop-shadow-lg">
                  {category.name}
                </h3>

                <Link
                  href={`/category/${category.slug}`}
                  className="w-12 h-12 bg-black/80 flex items-center justify-center text-white rounded-xl backdrop-blur-sm"
                >
                  <GoArrowUpRight className="w-6 h-6" />
                </Link>
              </div>

              {/* Optional dark overlay for better text visibility */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
