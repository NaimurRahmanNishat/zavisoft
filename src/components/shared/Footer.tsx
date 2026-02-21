// src/components/shared/Footer.tsx
import Image from "next/image";
import logo from "../../../public/whiteLogo.png";
import group from "../../../public/Group (2).png";
import { FaFacebook, FaTiktok, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="max-w-330 mx-auto pt-10 relative">
      <div className="w-full md:h-232.75 h-260 flex flex-col px-4 md:px-0">
        {/* top section */}
        <section className="w-full bg-[#4A69E2] md:h-136.25 h-85 md:rounded-t-[48px] rounded-t-[24px] flex flex-col md:flex-row relative">
          {/* left side */}
          <div className="flex flex-col md:gap-8 gap-4 md:w-127.5 md:h-59.25 md:mt-10 md:ml-10 px-4 pt-6 md:px-0 md:pt-0">
            <div className="flex flex-col md:gap-4 gap-3">
              <h2 className="md:text-[48px] text-[28px] font-semibold font-rubik leading-[110%] text-white uppercase">
                Join our KicksPlus Club & get 15% off
              </h2>
              <p className="text-[#E7E7E3] md:text-[20px] text-[14px] leading-[100%] font-semibold">
                Sign up for free! Join the community.
              </p>
            </div>
            <div className="flex w-full md:w-md h-10 md:h-12">
              <input
                type="text"
                placeholder="Email address"
                className="flex-1 h-10 md:h-12 border border-white rounded-sm px-4 text-sm outline-none bg-transparent text-white placeholder:text-white"
              />
              <button className="w-24 md:w-25.5 h-10 md:h-12 bg-black text-white rounded-sm uppercase ml-2 text-sm font-semibold shrink-0">
                Submit
              </button>
            </div>
          </div>

          {/* right side — logo */}
          <div className="relative px-4 pt-6 pb-6 md:pt-0 md:pb-0 md:w-91.75 md:h-28">
            <Image
              src={logo}
              alt="logo"
              width={351}
              height={88}
              className="md:pt-30 md:ml-40 w-36 md:w-full"
            />
            <div className="absolute md:top-23 md:-right-36 top-4 right-auto left-40 md:left-auto">
              <p className="md:w-6.5 md:h-6.5 w-5.5 h-5.5 bg-[#FFA52F] rounded-full flex items-center justify-center">
                +
              </p>
            </div>
          </div>
        </section>

        {/* bottom section */}
        <section className="absolute md:mt-85 mt-70 bg-black md:w-full mobile rounded-[24px] md:rounded-[48px] md:h-147.75 h-180">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:py-10 md:px-10 px-4 py-5">
            {/* left side */}
            <div className="md:w-111.5 md:h-32 w-full h-24.5 flex flex-col gap-1">
              <h2 className="text-[#FFA52F] font-semibold font-rubik md:text-[36px] text-[24px] leading-[100%]">About us</h2>
              <p className="text-[#E7E7E3] text-[16px] md:text-[20px] font-semibold font-sans leading-[100%]">We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.</p>
            </div>

            {/* right side */}
            <div className="md:w-166 md:h-61.5 flex flex-col md:flex-row jbustify-between md:gap-32 w-full h-111.5 gap-6">
              <div className="flex flex-col md:gap-4 gap-6">
                <h2 className="text-[#FFA52F] md:text-[24px] text-[20px] font-semibold font-rubik leading-[100%]">Categories</h2>
                <div className="flex flex-col gap-2">
                  <p className="text-[#E7E7E3] md:text-[20px] text-[16px] font-sans font-medium leading-[100%] cursor-pointer">Runners</p>
                  <p className="text-[#E7E7E3] md:text-[20px] text-[16px] font-sans font-medium leading-[100%] cursor-pointer">Sneakers</p>
                  <p className="text-[#E7E7E3] md:text-[20px] text-[16px] font-sans font-medium leading-[100%] cursor-pointer">Basketball</p>
                  <p className="text-[#E7E7E3] md:text-[20px] text-[16px] font-sans font-medium leading-[100%] cursor-pointer">Outdoor</p>
                  <p className="text-[#E7E7E3] md:text-[20px] text-[16px] font-sans font-medium leading-[100%] cursor-pointer">Golf</p>
                  <p className="text-[#E7E7E3] md:text-[20px] text-[16px] font-sans font-medium leading-[100%] cursor-pointer">Hiking</p>
                </div>
              </div>

              <div className="flex flex-col md:gap-4 gap-6">
                <h2 className="text-[#FFA52F] md:text-[24px] text-[20px] font-semibold font-rubik leading-[100%]">Company</h2>
                <div className="flex flex-col gap-2">
                  <p className="text-[#E7E7E3] md:text-[20px] text-[16px] font-sans font-medium leading-[100%] cursor-pointer">About</p>
                  <p className="text-[#E7E7E3] md:text-[20px] text-[16px] font-sans font-medium leading-[100%] cursor-pointer">Contact</p>
                  <p className="text-[#E7E7E3] md:text-[20px] text-[16px] font-sans font-medium leading-[100%] cursor-pointer">Blogs</p>
                </div>
              </div>

              <div className="flex flex-col md:gap-4 gap-6">
                <h2 className="text-[#FFA52F] md:text-[24px] text-[20px] font-semibold font-rubik leading-[100%]">Categories</h2>
                <div className="flex gap-2">
                  <FaFacebook className="text-white w-6 h-6 cursor-pointer"/>
                  <FaSquareInstagram className="text-white w-6 h-6 cursor-pointer"/>
                  <FaTwitter className="text-white w-6 h-6 cursor-pointer"/>
                  <FaTiktok className="text-white w-6 h-6 cursor-pointer"/>
                </div>
              </div>
            </div>
          </div>

          {/* Group image */}
          <div className="md:mt-16 mt-18">
            <Image
              src={group}
              alt="logo"
              width={1262}
              height={313.66}
              className="w-full md:px-12 px-8"
            />
          </div>
        </section>
      </div>

      <p className="text-center font-normal text-[16px] leading-[100%] text-[#232321] pb-5 md:py-8 -mt-4 md:mt-0">
        © All rights reserved
      </p>
    </div>
  );
};

export default Footer;
