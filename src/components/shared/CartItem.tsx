// components/shared/CartItem.tsx
"use client";

import { HeartIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeFromCart, updateQuantity } from "@/redux/cart/cartSlice";

const quantities = [1,2,3,4,5,6,7,8,9,10];

const CartItem = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  if (!items.length) {
    return <p className="text-gray-400 text-sm">Your bag is empty.</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <CartItemCard
          key={`${item.id}-${item.size}`}
          item={item}
          onRemove={() =>
            dispatch(removeFromCart({ id: item.id, size: item.size }))
          }
        />
      ))}
    </div>
  );
};

const CartItemCard = ({
  item,
  onRemove,
}: {
  item: {
    id: number;
    title: string;
    images: string[];
    price: number;
    size: number;
    quantity: number;
  };
  onRemove: () => void;
}) => {
  const dispatch = useDispatch();

  const totalPrice = item.price * item.quantity;

  return (
    <div className="flex md:gap-6 gap-3 md:w-[733.33px] md:h-56.25 w-81.5 h-54">

      <Image
        src={item.images[0]}
        alt={item.title}
        width={500}
        height={500}
        className="md:w-52 md:h-56 w-39.25 h-54 rounded-[24px] object-cover"
      />

      <div className="flex flex-col md:gap-12 gap-2 md:w-full w-38.25 h-54">
        <div className="flex flex-col md:flex-row justify-between md:gap-6 w-full">
          <div className="flex flex-col md:gap-5">

            <div className="flex flex-col gap-1">
              <p className="md:text-[24px] text-[16px] font-semibold uppercase">
                {item.title}
              </p>
              <p className="text-[14px] md:text-[16px] font-medium text-gray-600">
                Size: {item.size}
              </p>
            </div>

            <div className="flex items-center md:gap-4 gap-2">

              <select
                value={item.quantity}
                onChange={(e) =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      size: item.size,
                      quantity: Number(e.target.value),
                    })
                  )
                }
                className="text-sm focus:outline-none"
              >
                {quantities.map((q) => (
                  <option key={q} value={q}>
                    Qty: {q}
                  </option>
                ))}
              </select>

            </div>
          </div>

          <p className="text-[20px] md:text-[24px] font-semibold text-[#4A69E2]">
            ${totalPrice.toFixed(2)}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-gray-400 hover:text-red-500 transition">
            <HeartIcon />
          </button>
          <button
            onClick={onRemove}
            className="text-gray-400 hover:text-red-500 transition"
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
