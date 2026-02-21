// src/app/category/[slug]/page.tsx
import Image from "next/image";
import ProductCard from "@/components/home/ProductCard";
import { api } from "@/lib/axios";

interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}

interface Product {
  id: number;
  title: string;
  images: string[];
  price: number;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

const CategoryPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  const { data: category } = await api.get<Category>(`/categories/slug/${slug}`);
  const { data: products } = await api.get<Product[]>(`/categories/${category.id}/products`);

  return (
    <div className="min-h-screen">

      {/* Category Banner */}
      <div className="bg-[#232321] pt-32 pb-10">
        <div className="desktop px-4 md:px-0 flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl overflow-hidden bg-[#ECEEF0] flex items-center justify-center shrink-0">
            <Image
              src={category.image}
              alt={category.name}
              width={200}
              height={200}
              className="object-contain w-full h-full"
            />
          </div>
          <div>
            <p className="text-[#E7E7E3] text-sm font-medium font-rubik mb-2 uppercase tracking-widest">
              Category
            </p>
            <h1 className="text-[#FFFFFF] text-[32px] md:text-[64px] font-bold font-rubik uppercase leading-none">
              {category.name}
            </h1>
            <p className="text-[#a0a09e] text-sm mt-2">
              {products.length} Products
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="desktop px-4 md:px-0 py-10">
        {products.length === 0 ? (
          <p className="text-gray-400 text-center py-20">
            No products found!
          </p>
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

export default CategoryPage;
