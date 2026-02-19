import Image from "next/image";
import logo from "../../../public/whiteLogo.png";


const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10">
      <div className="w-full md:h-232.75 h-256 flex flex-col">
        {/* top section */}
        <section className="md:w-full w-89.5 bg-[#4A69E2] h-85 md:h-136.25 md:rounded-t-[48px] rounded-t-[24px] flex flex-col md:flex-row">
          {/* left side */}
          <div className="flex flex-col md:gap-8 gap-2 md:w-127.5 md:h-59.25 h-42.5 md:mt-10 md:ml-10 ml-2"> 
            <div className="w-full md:h-39.25 h-26.5 flex flex-col md:gap-4 gap-2 px-1 pt-5">
              <h2 className="md:text-[48px] text-[30px] font-semibold font-rubik leading-[100%] text-white uppercase">Join our KicksPlus Club & get 15% off</h2>
              <p className="text-[#E7E7E3] md:text-[20px] mt-1 md:mt-0 text-[16px] leading-[100%] font-semibold">Join our KicksPlus Club & get 15% off</p>
            </div>
            <div className="flex md:gap-1 md:w-md w-81.5 h-10 md:h-12 ml-1 mt-4 md:mt-0">
              <input type="text" placeholder="Email address" className="md:w-85.5 w-59 md:h-12 h-10 border border-white rounded-sm px-5 text-sm outline-none"/>
              <button className="md:w-25.5 w-21.5 md:h-12 h-10 bg-black text-white rounded-sm uppercase ml-4 text-sm">Submit</button>
            </div>
          </div>
          {/* right side */}  
          <div className="relative w-50 h-[61.04px] md:w-91.75 md:h-28">
            <Image src={logo} alt="logo" width={351} height={88} className="md:pt-30 md:ml-40 pt-10 ml-4"/>
            <div className="absolute md:top-23 md:-right-36 top-4 -right-6">
              <p className="w-6.5 h-6.5 bg-[#FFA52F] text-center rounded-full">+</p>
            </div>
          </div>
        </section>
        {/* bottom section */}
        <section className="absolute right-0  md:w-7xl w-89.5 md:left-69 left-4 -bottom-198 md:-bottom-296 bg-[#232321] h-180 md:h-147.75 rounded-[48px]"></section>
      </div>
      <p className="text-center font-normal text-[16px] leading-[100%] text-[#232321] py-5 md:py-8">© All rights reserved</p>
    </div>
  )
}

export default Footer;