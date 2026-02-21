// src/app/search/page.tsx
import axios from "axios";
import ProductCard from "@/components/home/ProductCard";

interface Product {
  id: number;
  title: string;
  images: string[];
  price: number;
}

interface PageProps {
  searchParams: Promise<{ q: string }>;
}

const SearchPage = async ({ searchParams }: PageProps) => {
  const { q } = await searchParams;

  if (!q) {
    return (
      <div className="min-h-screen desktop px-4 md:px-0 pt-36">
        <p className="text-gray-400 text-center py-20">
          Please enter a search term
        </p>
      </div>
    );
  }

  const { data: products } = await axios.get<Product[]>(
    `https://api.escuelajs.co/api/v1/products/?title=${encodeURIComponent(q)}`
  );

  return (
    <div className="min-h-screen">
      <div className="desktop px-4 md:px-0 pt-36 pb-10">

        <div className="mb-8">
          <h1 className="text-[#232321] md:text-[48px] text-[24px] font-rubik font-bold uppercase leading-none">
            Search Results
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            &quot;{q}&quot; — {products.length}টি product পাওয়া গেছে
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg mb-2">
              Product not found!
            </p>
            <p className="text-gray-300 text-sm">
              try searching for something else
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  id: product.id,
                  title: product.title,
                  images: product.images,
                  price: product.price,
                  isNew: true,
                }}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default SearchPage;