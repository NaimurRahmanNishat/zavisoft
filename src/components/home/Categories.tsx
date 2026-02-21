import Image from 'next/image';
import shoe from "../../../public/image 31.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

const Categories = () => {
  return (
    <div className='bg-[#232321]'>
      {/* Header */}
      <div className='desktop flex items-center justify-between pt-10 md:pt-16 md:px-0 px-4 pb-6 md:pb-10'>
        <h2 className='text-[28px] md:text-[74px] font-bold font-rubik leading-none text-[#FFFFFF] uppercase'>
          Categories
        </h2>
        <div className='flex items-center gap-2'>
          <button className='w-9 h-9 md:w-11 md:h-11 bg-[#3a3a38] hover:bg-[#4a4a48] rounded-xl flex items-center justify-center cursor-pointer transition'>
            <MdKeyboardArrowLeft className='w-5 h-5 md:w-6 md:h-6 text-[#E7E7E3]' />
          </button>
          <button className='w-9 h-9 md:w-11 md:h-11 bg-[#3a3a38] hover:bg-[#4a4a48] rounded-xl flex items-center justify-center cursor-pointer transition'>
            <MdKeyboardArrowRight className='w-5 h-5 md:w-6 md:h-6 text-[#E7E7E3]' />
          </button>
        </div>
      </div>

      {/* Cards container */}
      <div className='bg-[#ECEEF0] rounded-tl-[32px] md:rounded-tl-[48px] md:mr-64 md:ml-72 pl-8 ml-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>

          {/* Lifestyle Shoes */}
          <div className='bg-[#ECEEF0] rounded-2xl px-4 md:px-6 py-4'>
            <div className='flex items-center justify-center h-52 md:h-64'>
              <Image
                src={shoe}
                alt="Lifestyle Shoes"
                width={400}
                height={300}
                className='object-contain w-full h-full'
              />
            </div>
            <div className='flex items-center justify-between mt-4'>
              <p className='text-[#232321] text-[20px] md:text-[32px] font-bold font-rubik leading-tight'>
                Lifestyle<br />Shoes
              </p>
              <Link
                href={"#"}
                className='w-10 h-10 md:w-12 md:h-12 bg-[#232321] flex items-center justify-center text-[#E7E7E3] rounded-xl shrink-0'
              >
                <GoArrowUpRight className='w-5 h-5 md:w-6 md:h-6' />
              </Link>
            </div>
          </div>

          {/* Basketball Shoes */}
          <div className='bg-[#ECEEF0] rounded-2xl px-4 md:px-6 py-4'>
            <div className='flex items-center justify-center h-52 md:h-64'>
              <Image
                src={shoe}
                alt="Basketball Shoes"
                width={400}
                height={300}
                className='object-contain w-full h-full'
              />
            </div>
            <div className='flex items-center justify-between mt-4'>
              <p className='text-[#232321] text-[20px] md:text-[32px] font-bold font-rubik leading-tight'>
                Basketball<br />Shoes
              </p>
              <Link
                href={"#"}
                className='w-10 h-10 md:w-12 md:h-12 bg-[#232321] flex items-center justify-center text-[#E7E7E3] rounded-xl shrink-0'
              >
                <GoArrowUpRight className='w-5 h-5 md:w-6 md:h-6' />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Categories;