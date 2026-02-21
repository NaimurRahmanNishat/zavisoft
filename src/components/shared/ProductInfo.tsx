"use client";
import { HeartIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'

const SIZES = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
const UNAVAILABLE = [39, 40];
const COLORS = ["#2D3748", "#4A5568"];

const ProductInfo = () => {
      const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(38);
  return (
    <div className="flex flex-col gap-5">
      {/* Badge */}
      <span className="inline-flex w-fit px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded-md">
        New Release
      </span>

      {/* Title */}
      <h1 className="text-2xl font-black text-gray-900 leading-tight tracking-tight uppercase">
        Adidas 4DFWD X Parley
        <br />
        Running Shoes
      </h1>

      {/* Price */}
      <p className="text-2xl font-bold text-blue-500">$125.00</p>

      {/* Color */}
      <div>
        <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">
          Color
        </p>
        <div className="flex gap-2">
          {COLORS.map((color, i) => (
            <button
              key={i}
              onClick={() => setSelectedColor(i)}
              style={{ backgroundColor: color }}
              className={`w-8 h-8 rounded-full border-2 transition ${selectedColor === i ? "border-gray-900 scale-110" : "border-transparent"}`}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-gray-900 uppercase tracking-widest">
            Size
          </p>
          <button className="text-xs font-semibold text-gray-500 underline uppercase tracking-widest">
            Size Chart
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((size) => {
            const unavail = UNAVAILABLE.includes(size);
            return (
              <button
                key={size}
                disabled={unavail}
                onClick={() => !unavail && setSelectedSize(size)}
                className={`w-11 h-10 text-sm font-semibold rounded-lg border transition
                  ${unavail ? "text-gray-300 border-gray-200 cursor-not-allowed line-through" : ""}
                  ${!unavail && selectedSize === size ? "bg-gray-900 text-white border-gray-900" : ""}
                  ${!unavail && selectedSize !== size ? "text-gray-800 border-gray-300 hover:border-gray-700" : ""}
                `}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-2">
        <button className="flex-1 h-12 bg-gray-900 text-white text-sm font-bold uppercase tracking-widest rounded-xl hover:bg-gray-700 transition">
          Add to Cart
        </button>
        <button className="w-12 h-12 border border-gray-300 rounded-xl flex items-center justify-center text-gray-700 hover:border-gray-900 transition">
          <HeartIcon />
        </button>
      </div>

      {/* Buy Now */}
      <Link href="/cart" className="w-full h-12 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold uppercase tracking-widest rounded-xl transition">
        Buy It Now
      </Link>

      {/* About */}
      <div className="pt-2 border-t border-gray-100">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-2">
          About The Product
        </p>
        <p className="text-sm text-gray-500 mb-3">Shadow Navy / Army Green</p>
        <p className="text-sm text-gray-500 mb-3">
          This product is excluded from all promotional discounts and offers.
        </p>
        <ul className="text-sm text-gray-500 space-y-1 list-disc list-inside">
          <li>
            Pay over time in interest-free installments with Affirm, Klarna or
            Afterpay.
          </li>
          <li>
            Join adiClub to get unlimited free standard shipping, returns, &
            exchanges.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProductInfo