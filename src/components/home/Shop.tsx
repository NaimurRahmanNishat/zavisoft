
import { StaticImageData } from "next/image";
import shoe from "../../../public/Rectangle.png";
import ProductCard from './ProductCard';

export interface Product {
  id: number;
  title: string;
  image: StaticImageData | string;
  isNew: boolean;
  price: number;
}

const products: Product[] = [
  { id: 1, title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", image: shoe, isNew: true, "price": 125, },
  { id: 2, title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", image: shoe, isNew: true, "price": 125, },
  { id: 3, title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", image: shoe, isNew: true, "price": 125, },
  { id: 4, title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", image: shoe, isNew: true, "price": 125, },
]

const Shop = () => {
  return (
    <div className="md:my-16 mt-5 desktop md:px-0 px-4">

      {/* Header Section */}
      <div className="flex items-center justify-between gap-4">
        <h2 className="uppercase text-[#232321] font-semibold font-rubik
          leading-[95%] md:text-[70px] text-[24px]">
          Don&apos;t miss out new drops
        </h2>

        <button className="bg-[#4A69E2] text-white rounded-xl
          w-39.25 h-10 md:w-47.25 md:h-12
          uppercase font-medium font-rubik text-[12px] md:text-[14px]">
          Shop New Drops
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 mb-8">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  )
}

export default Shop;