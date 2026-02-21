// src/app/cart/page.tsx
import PromoBanner from "@/components/shared/PromoBanner";
import CartSection from "@/components/shared/CartSection";

const CartPage = () => {
  return (
    <div className="min-h-screen">
      <PromoBanner />
      <CartSection />
    </div>
  );
};

export default CartPage;
