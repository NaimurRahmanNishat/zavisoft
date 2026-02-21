// src/app/product/[id]/page.tsx
import ProductInfo from "@/components/shared/ProductInfo";
import ProductImage from "@/components/shared/ProductImage";
import RelatedProduct from "@/components/shared/RelatedProducts";
import { api } from "@/lib/axios";

interface PageProps {
  params: Promise<{ id: string }>;
}

const page = async ({ params }: PageProps) => {
  const { id: rawId } = await params;
  const id = Number(rawId);

  if (isNaN(id)) {
    throw new Error("Invalid product id");
  }

  const { data: product } = await api.get(`/products/${id}`);

  return (
    <div className="min-h-screen">
      <main className="desktop px-4 md:px-0 py-10">
        <div className="flex flex-col md:flex-row gap-10">
          <ProductImage images={product.images ?? []} />
          <div className="md:w-107.5 w-full h-full">
            <ProductInfo product={product} />
          </div>
        </div>
      </main>

      <RelatedProduct currentProductId={product.id} />
    </div>
  );
};

export default page;
