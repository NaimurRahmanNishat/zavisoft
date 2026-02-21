import PromoBanner from "@/components/shared/PromoBanner";
import CartSection from "@/components/shared/CartSection";
import RelatedProducts from "@/components/shared/RelatedProducts";

const CartPage = () => {
  return (
    <div className="min-h-screen">
      <PromoBanner />
      <CartSection />
      <RelatedProducts />
    </div>
  )
}

export default CartPage

