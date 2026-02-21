import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard, { Product } from "../home/ProductCard";
import shoe from "../../../public/Rectangle.png";

const relatedProducts: Product[] = [
  {
    id: 1,
    title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    image: shoe,
    isNew: true,
    price: 125,
  },
  {
    id: 2,
    title: "NIKE AIR ZOOM PEGASUS",
    image: shoe,
    isNew: false,
    price: 140,
  },
  {
    id: 3,
    title: "PUMA RS-X",
    image: shoe,
    isNew: true,
    price: 110,
  },
  {
    id: 4,
    title: "REEBOK CLASSIC",
    image: shoe,
    isNew: false,
    price: 95,
  },
];

const RelatedProduct = () => {
  return (
    <section className="desktop px-6 md:px-0 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-gray-900">
          You may also like
        </h2>

        <div className="flex gap-2">
          <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            <ChevronLeft />
          </button>
          <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i === 0 ? "w-6 bg-blue-500" : "w-3 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProduct;