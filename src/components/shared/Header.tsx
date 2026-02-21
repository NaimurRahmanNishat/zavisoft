// src/components/shared/Header.tsx
"use client";
import Image from "next/image";
import { FaCaretDown, FaUser } from "react-icons/fa";
import logo from "../../../public/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const items = useCartStore((state) => state.items);
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="max-w-330 mx-auto relative">
      <div className="absolute z-50 top-8 bg-[#FAFAFA] w-full md:h-24 h-13 flex items-center justify-between rounded-2xl md:rounded-[24px] md:p-8 p-4">

        {/* left side */}
        <div>
          <ul className="hidden md:flex items-center justify-between gap-10 cursor-pointer">
            <li className="font-semibold text-[16px] leading-[100%] font-rubik">
              New Drops 🔥
            </li>
            <li className="flex items-center gap-2 font-semibold font-rubik text-[16px] leading-[100%] whitespace-nowrap">
              Men <span><FaCaretDown /></span>
            </li>
            <li className="flex items-center gap-2 font-semibold font-rubik text-[16px] leading-[100%] whitespace-nowrap">
              Women <span><FaCaretDown /></span>
            </li>
          </ul>

          <div
            className="flex items-center justify-center md:hidden gap-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <IoMdMenu size={20} />
          </div>
        </div>

        {/* center logo */}
        <Link href="/" className="flex items-center justify-center">
          <Image
            src={logo}
            alt="logo"
            width={128}
            height={32}
            loading="lazy"
            className="w-20 h-5 md:w-32 md:h-8"
          />
        </Link>

        {/* right side */}
        <div className="flex items-center justify-end md:gap-10 gap-2.5">
          <CiSearch className="w-6 h-6 hidden md:block" />
          <FaUser className="md:w-6 w-4 md:h-6 h-4" />

          {/* Cart — Link দিয়ে wrap করা */}
          <Link href="/cart">
            <div className="bg-[#FFA52F] md:w-8 w-5 md:h-8 h-5 rounded-full flex items-center justify-center">
              <p className="md:text-[16px] text-[14px] leading-[100%] text-[#232321] font-semibold">
                {cartCount}
              </p>
            </div>
          </Link>
        </div>

        {/* mobile dropdown */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#FAFAFA] rounded-b-2xl md:hidden flex flex-col items-start justify-start gap-4 p-4 z-50">
            <p className="font-semibold text-[16px] leading-[100%] font-rubik">
              New Drops 🔥
            </p>
            <p className="flex items-center gap-2 font-semibold font-rubik text-[16px] leading-[100%] whitespace-nowrap">
              Men <span><FaCaretDown /></span>
            </p>
            <p className="flex items-center gap-2 font-semibold font-rubik text-[16px] leading-[100%] whitespace-nowrap">
              Women <span><FaCaretDown /></span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
