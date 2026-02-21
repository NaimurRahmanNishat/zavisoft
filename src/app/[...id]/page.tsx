
import RelatedProduct from "@/components/shared/RelatedProduct";
import ProductInfo from "@/components/shared/ProductInfo";
import ProductImage from "@/components/shared/ProductImage";

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Product Section */}
      <main className="desktop px-4 md:px-0 py-10">
        <div className="flex flex-col md:flex-row gap-10">
          <div>
            <ProductImage/>
          </div>
          <div className="md:w-107.5 md:h-207.5 w-full h-full">
            <ProductInfo />
          </div>
        </div>
      </main>

      {/* Related */}
      <RelatedProduct />
    </div>
  );
};

export default page;

