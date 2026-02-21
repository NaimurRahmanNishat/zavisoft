import Link from 'next/link';
import React from 'react'

const PromoBanner = () => {
  return (
    <div className="desktop px-4 md:px-0 pt-10 pb-4">
      <div className='md:w-195.5 md:h-23.75 flex flex-col md:gap-2 md:px-4'>
        <h1 className="font-semibold font-rubik md:text-[32px] text-[#232321] leading-[100%]">Saving to celebrate</h1>
      <p className="text-[#232321] font-sans font-semibold md:text-[14px] leading-[100%]">
        Enjoy up to 60% off thousands of styles during the End of Year sale - while suppiles last. No code needed.
      </p>
      <p className="text-sm text-gray-500">
        <Link href="#" className="underline text-[#232321] font-semibold md:text-[16px] leading-[100%]">Join us</Link>
        {" "}or{" "}
        <Link href="#" className="underline text-[#232321] font-semibold md:text-[16px] leading-[100%]">Sign-in</Link>
      </p>
      </div>
    </div>
  )
}

export default PromoBanner;