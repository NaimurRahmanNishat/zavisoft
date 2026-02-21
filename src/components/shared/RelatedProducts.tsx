import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "next/image";
import image from "../../../public/Rectangle.png";

const RELATED = [
  { id: 1, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: 125 },
  { id: 2, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: 125 },
  { id: 3, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: 125 },
  { id: 4, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: 125 },
];

const RelatedProducts = () => {
  return (
    <section className="desktop px-4 md:px-0 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-black text-gray-900" style={{ fontFamily: "Georgia, serif" }}>
          You may also like
        </h2>
        <div className="flex gap-2">
          <button className="w-9 h-9 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            <ChevronLeft />
          </button>
          <button className="w-9 h-9 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {RELATED.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100">
            <div className="relative">
              <span className="absolute top-2 left-2 z-10 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                New
              </span>
              <Image src={image} alt="image" width={500} height={500} />
            </div>
            <div className="px-3 py-3">
              <p className="text-[11px] font-black text-gray-900 uppercase leading-tight mb-2">{item.name}</p>
              <button className="w-full bg-gray-900 text-white text-[11px] font-bold py-2 rounded-lg uppercase tracking-wide hover:bg-gray-700 transition">
                View Product · <span className="text-amber-400">${item.price}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all ${i === 0 ? "w-6 bg-blue-500" : "w-3 bg-gray-300"}`}
          />
        ))}
      </div>
    </section>
  )
}

export default RelatedProducts;