// src/app/cart/page.tsx
import PromoBanner from "@/components/shared/PromoBanner";
import CartSection from "@/components/shared/CartSection";
import RelatedProduct from "@/components/shared/RelatedProducts";

const CartPage = () => {
  return (
    <div className="min-h-screen">
      <PromoBanner />
      <CartSection />
      <RelatedProduct/>
    </div>
  );
};

export default CartPage;
