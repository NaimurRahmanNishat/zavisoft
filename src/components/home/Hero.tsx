import Image from 'next/image';
import React from 'react'
import hero from '../../../public/hero.png';
import hero1 from '../../../public/Rectangle 1.png';
import hero2 from '../../../public/Rectangle 2.png';

const Hero = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto flex flex-col items-center gap-6'>
        <h1 className="md:text-[215.5px] text-[60px] font-bold font-rubik uppercase leading-[100%]">Do it <span className='text-blue-600'>right</span></h1>
        {/* image section */}
        <div className='w-full relative h-[382px] md:h-[750px] w-full'>
            <Image src={hero} alt="hero image" width={1320} height={750} className='md:object-contain w-full h-[382px] md:h-[750px] md:rounded-[64px] rounded-[24px]'/>
            {/* text */}
          <div className='absolute z-10 md:bottom-20 bottom-6 left-4 md:left-12'>
            <div className='md:w-125.5 w-[235px] h-[106px] md:h-56.5 flex flex-col md:gap-6 gap-2'>
              <div className='w-full h-[66px] md:h-38.5 flex flex-col md:gap-6 gap-2'>
                <h1 className='font-semibold text-white text-[24px] md:text-[74px] leading-[100%]'>NIKE AIR MAX</h1>
                <p className='text-[#E7E7E3] font-semibold text-[14px] md:text-[24px] leading-[100%]'>Nike introducing the new air max for everyone&apos;s comfort</p>
              </div>
              <button className='bg-[#4A69E2] md:w-34.5 md:h-12 w-[112px] h-[32px] rounded-xl uppercase text-[#FFFFFF] font-medium text-[14px] font-rubik leading-[100%]'>shop now</button>
            </div>
          </div>
          {/* image */}
          <div className='absolute z-10 md:top-90.5 top-54 right-5'>
            <div className='flex flex-col gap-4 w-[64px] md:w-[160px] md:h-[336px] h-[136px]'>
              <Image src={hero1} alt="hero image" width={160} height={160} loading='lazy'/>
              <Image src={hero2} alt="hero image" width={160} height={160} loading='lazy'/>
            </div>
          </div>
          {/* side */}
          <div className='absolute z-10 bg-[#232321] rotate-90 md:w-59.25 w-[157px] h-[30px] md:h-16.75 md:top-40 top-24 md:-left-21 -left-16 flex items-center justify-center rounded-tr-[16px] rounded-tl-[16px]'>
            <p className='text-[#E7E7E3] md:text-[16px] text-[12px] rotate-180 md:rotate-0 leading-[100%] font-rubik font-semibold'>Nike product of the year</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;