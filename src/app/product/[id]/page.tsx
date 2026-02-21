// src/app/product/[id]/page.tsx
import ProductInfo from "@/components/shared/ProductInfo";
import ProductImage from "@/components/shared/ProductImage";
import RelatedProduct from "@/components/shared/RelatedProducts";

interface PageProps {
  params: Promise<{ id: string }>;
}

const page = async ({ params }: PageProps) => {
  const { id: rawId } = await params;
  const id = Number(rawId);

  if (isNaN(id)) {
    throw new Error("Invalid product id");
  }

  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const product = await res.json();

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
