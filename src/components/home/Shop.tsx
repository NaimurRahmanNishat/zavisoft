// src/components/home/Shop.tsx
import ProductCard from './ProductCard';
import { api } from '@/lib/axios';

export interface Product {
  id: number;
  title: string;
  images: string[];
  isNew: boolean;
  price: number;
}

const Shop = async () => {

  const {data: products} = await api.get(`/products`);

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
        {products.slice(0, 4).map((product: Product) => (
          <ProductCard key={product.id} product={{ ...product, isNew: true }} />
        ))}
      </div>

    </div>
  )
}

export default Shop;
