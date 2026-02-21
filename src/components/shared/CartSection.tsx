import React from 'react'
import CartItem from './CartItem';

const CartSection = () => {
  return (
    <div className="desktop px-4 md:px-0 pb-8">
      <div className="flex flex-col md:flex-row justify-between gap-4 items-start">

        {/* Your Bag */}
        <div className="bg-white rounded-2xl p-4 shadow-sm md:w-[781.81px] w-full md:h-97.25 flex flex-col md:gap-12 gap-6">
          <div className='flex flex-col gap-2'>
            <h2 className="md:text-[32px] font-semibold font-rubik leading-[100%] text-[#232321]">Your Bag</h2>
            <p className="text-[#232321] font-sans font-semibold md:text-[16px] text-[14px] leading-[100%]">Items in your bag not reserved- check out now to make them yours.</p>
          </div>
          <CartItem />
        </div>

        {/* Order Summary */}
        <div className='md:w-104.5 w-full rounded-3xl  h-full flex flex-col md:gap-6 bg-[#FAFAFA] p-4 md:p-0 md:bg-transparent'>
          <h2 className="text-xl font-black text-gray-900 mb-5">Order Summary</h2>
          <div className="space-y-3 mb-5">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-gray-700 uppercase tracking-wide">1 Item</span>
              <span className="font-semibold text-gray-900">$130.00</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Delivery</span>
              <span className="text-gray-900">$6.99</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Sales Tax</span>
              <span className="text-gray-400">-</span>
            </div>
            <div className="border-t border-gray-200 pt-3 flex items-center justify-between">
              <span className="text-base font-black text-gray-900">Total</span>
              <span className="text-base font-black text-gray-900">$136.99</span>
            </div>
          </div>

          <button className="w-full h-12 bg-gray-900 hover:bg-gray-700 text-white text-sm font-black uppercase tracking-widest rounded-xl transition mb-3">
            Checkout
          </button>
          <button className="w-full text-sm text-gray-500 hover:text-gray-900 underline transition text-left">
            Use a promo code
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartSection;