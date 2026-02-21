// src/components/shared/CartSection.tsx
"use client";

import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const CartSection = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const delivery = items.length > 0 ? 6.99 : 0;
  const total = subtotal + delivery;

  return (
    <div className="desktop px-4 md:px-0 pb-8">
      <div className="flex flex-col md:flex-row justify-between gap-4 items-start">

        <div className="bg-white rounded-2xl p-4 shadow-sm md:w-[781.81px] w-full md:h-97.25 flex flex-col md:gap-12 gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="md:text-[32px] font-semibold">
              Your Bag
            </h2>
          </div>

          <CartItem />
        </div>

        <div className="md:w-104.5 w-full rounded-3xl flex flex-col md:gap-6 bg-[#FAFAFA] p-4">

          <h2 className="text-xl font-black mb-5">Order Summary</h2>

          <div className="space-y-3 mb-5">

            <div className="flex justify-between text-sm">
              <span>
                {items.length} Item{items.length !== 1 ? "s" : ""}
              </span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Delivery</span>
              <span>${delivery.toFixed(2)}</span>
            </div>

            <div className="border-t pt-3 flex justify-between">
              <span className="font-black">Total</span>
              <span className="font-black">
                ${total.toFixed(2)}
              </span>
            </div>

          </div>

          <button className="w-full h-12 bg-gray-900 text-white rounded-xl">
            Checkout
          </button>

        </div>
      </div>
    </div>
  );
};

export default CartSection;
