// src/components/shared/Header.tsx
"use client";
import Image from "next/image";
import { FaCaretDown, FaUser } from "react-icons/fa";
import logo from "../../../public/logo.png";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { api } from "@/lib/axios";

interface Product {
  id: number;
  title: string;
  images: string[];
  price: number;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const items = useSelector((state: RootState) => state.cart.items);
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleSearch = async (value: string) => {
    setQuery(value);
    if (value.trim().length === 0) {
      setResults([]);
      return;
    }
    setIsLoading(true);
    try {
      const { data } = await api.get<Product[]>(`/products/?title=${encodeURIComponent(value.trim())}`);
      setResults(data);
    } catch {
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsSearchOpen(false);
    setQuery("");
    setResults([]);
  };

  const handleProductClick = (id: number) => {
    router.push(`/product/${id}`);
    handleClose();
  };

  return (
    <div className="max-w-330 mx-auto relative">
      <div className="absolute z-50 top-8 bg-[#FAFAFA] w-full md:h-24 h-13 flex items-center justify-between rounded-2xl md:rounded-[24px] md:p-8 p-4">

        {/* left side */}
        <div>
          <ul className="hidden md:flex items-center justify-between gap-10 cursor-pointer">
            <li className="font-semibold text-[16px] leading-[100%] font-rubik">New Drops 🔥</li>
            <li className="flex items-center gap-2 font-semibold font-rubik text-[16px] leading-[100%] whitespace-nowrap">
              Men <FaCaretDown />
            </li>
            <li className="flex items-center gap-2 font-semibold font-rubik text-[16px] leading-[100%] whitespace-nowrap">
              Women <FaCaretDown />
            </li>
          </ul>
          <div
            className="flex items-center justify-center md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <IoMdMenu size={20} />
          </div>
        </div>

        {/* center logo */}
        <Link href="/" className="flex items-center justify-center">
          <Image src={logo} alt="logo" width={128} height={32} loading="lazy" className="w-20 h-5 md:w-32 md:h-8" />
        </Link>

        {/* right side */}
        <div className="flex items-center justify-end md:gap-10 gap-2.5">
          <button onClick={() => setIsSearchOpen(true)} className="hidden md:flex cursor-pointer">
            <Search className="w-6 h-6" />
          </button>
          <FaUser className="md:w-6 w-4 md:h-6 h-4" />
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
          <div className="absolute top-16 left-0 w-full bg-[#FAFAFA] rounded-b-2xl md:hidden flex flex-col items-start gap-4 p-4 z-50">
            <p className="font-semibold text-[16px] font-rubik">New Drops 🔥</p>
            <p className="flex items-center gap-2 font-semibold font-rubik text-[16px] whitespace-nowrap">Men <FaCaretDown /></p>
            <p className="flex items-center gap-2 font-semibold font-rubik text-[16px] whitespace-nowrap">Women <FaCaretDown /></p>
            <button onClick={() => setIsSearchOpen(true)} className="md:hidden w-full rounded-md px-4 py-2 border cursor-pointer flex items-center justify-center gap-2">
              <p className="font-semibold font-rubik">search products</p>
              <Search className="w-4 h-4"/>
            </button>
          </div>
        )}
      </div>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              className="fixed top-[15%] left-1/2 -translate-x-1/2 w-[95%] sm:w-125 md:w-162.5 bg-white rounded-2xl shadow-2xl z-51 p-6 border border-gray-200"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-[#232321] font-rubik uppercase">
                  Search Products
                </h2>
                <button onClick={handleClose}>
                  <X className="w-5 h-5 text-gray-500 hover:text-red-500 transition cursor-pointer" />
                </button>
              </div>

              {/* Input */}
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search by product name..."
                  autoFocus
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm outline-none focus:border-[#4A69E2] focus:ring-1 focus:ring-[#4A69E2]"
                />
                <Search className="absolute right-4 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Results */}
              <div className="mt-4 max-h-96 overflow-y-auto">

                {/* Loading */}
                {isLoading && (
                  <div className="flex items-center justify-center py-8 gap-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#4A69E2]" />
                    <p className="text-gray-500 text-sm">Searching...</p>
                  </div>
                )}

                {/* Empty query */}
                {!isLoading && query.trim().length === 0 && (
                  <div className="text-center py-8">
                    <Search className="mx-auto w-12 h-12 text-gray-200 mb-3" />
                    <p className="text-gray-400 text-sm">Search by product name...</p>
                  </div>
                )}

                {/* No results */}
                {!isLoading && query.trim().length > 0 && results.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-4xl mb-3">🔍</p>
                    <p className="text-gray-500 text-sm">&quot;{query}&quot; — product not found!</p>
                    <p className="text-gray-400 text-xs mt-1">Please try another search term</p>
                  </div>
                )}

                {/* Results list */}
                {!isLoading && results.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <p className="text-xs text-gray-500 mb-2">
                      {results.length} product{results.length > 1 && "s"} found
                    </p>
                    {results.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => handleProductClick(product.id)}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 cursor-pointer border border-transparent hover:border-gray-200 transition-all"
                      >
                        {/* Product Image */}
                        <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#FAFAFA] shrink-0">
                          <Image
                            src={product.images[0]}
                            alt={product.title}
                            width={56}
                            height={56}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-[#232321] text-sm truncate uppercase font-rubik">
                            {product.title}
                          </p>
                          <p className="text-[#4A69E2] font-bold text-sm mt-0.5">
                            ${product.price}
                          </p>
                        </div>

                        {/* Arrow */}
                        <div className="w-8 h-8 bg-[#232321] rounded-lg flex items-center justify-center shrink-0">
                          <Search className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {results.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                  <p className="text-xs text-gray-400">
                    Click to go to product details
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;

