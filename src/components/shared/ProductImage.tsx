// components/shared/ProductImage.tsx
import Image from "next/image";

interface ProductImageProps {
  images?: string[];
}

const ProductImage = ({ images = [] }: ProductImageProps) => {
  if (!images.length) {
    return null; 
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
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
  );
};

export default ProductImage;
