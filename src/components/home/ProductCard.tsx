// components/ProductCard.tsx
import Image from "next/image";
import Link from "next/link";

export interface Product {
  id: number;
  title: string;
  images: string[];
  isNew: boolean;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="md:w-79.5 md:h-121.5 w-full h-75.25 flex flex-col">
      {/* Product Image */}
      <div className="md:w-79.5 md:h-87.5 rounded-[28px] p-2 bg-[#FAFAFA] relative">
        <Image
          src={product.images?.[0]}
          alt={product.title}
          width={1320}
          height={750}
          loading="lazy"
          className="w-full h-full rounded-[24px]"
        />

        {product.isNew && (
          <p className="bg-[#4A69E2] md:w-14.5 md:h-9.5 w-10.5 h-5.5 absolute top-2 left-2 text-white
            md:rounded-tl-[28px] md:rounded-br-[28px]
            rounded-tl-2xl rounded-br-[13px]
            text-[12px] font-semibold font-rubik
            flex items-center justify-center">
            New
          </p>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-4 mt-4 flex-1">
        <p className="font-semibold font-rubik text-[#232321] text-[16px] md:text-[24px] leading-[100%]">
          {product.title}
        </p>

        <Link
          href={`/product/${product.id}`}
          className="mt-auto bg-[#232321] rounded-xl flex items-center justify-center uppercase font-medium text-white font-rubik h-10 md:h-12"
        >
          View Product -{" "}
          <span className="text-yellow-600">${product.price}</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;