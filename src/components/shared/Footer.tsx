// import Image from "next/image";
// import logo from "../../../public/whiteLogo.png";
// import group from "../../../public/Group (2).png";
// import { FaFacebook, FaTiktok, FaTwitter } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";


// const Footer = () => {
//   return (
//     <div className="max-w-330 mx-auto pt-10 relative">
//       <div className="w-full md:h-232.75 h-256 flex flex-col">
//         {/* top section */}
//         <section className="md:w-full w-89.5 bg-[#4A69E2] h-85 md:h-136.25 md:rounded-t-[48px] rounded-t-[24px] flex flex-col md:flex-row">
//           {/* left side */}
//           <div className="flex flex-col md:gap-8 gap-2 md:w-127.5 md:h-59.25 h-42.5 md:mt-10 md:ml-10 ml-2"> 
//             <div className="w-full md:h-39.25 h-26.5 flex flex-col md:gap-4 gap-2 px-1 pt-5">
//               <h2 className="md:text-[48px] text-[30px] font-semibold font-rubik leading-[100%] text-white uppercase">Join our KicksPlus Club & get 15% off</h2>
//               <p className="text-[#E7E7E3] md:text-[20px] mt-1 md:mt-0 text-[16px] leading-[100%] font-semibold">Join our KicksPlus Club & get 15% off</p>
//             </div>
//             <div className="flex md:gap-1 md:w-md w-81.5 h-10 md:h-12 ml-1 mt-4 md:mt-0">
//               <input type="text" placeholder="Email address" className="md:w-85.5 w-59 md:h-12 h-10 border border-white rounded-sm px-5 text-sm outline-none"/>
//               <button className="md:w-25.5 w-21.5 md:h-12 h-10 bg-black text-white rounded-sm uppercase ml-4 text-sm">Submit</button>
//             </div>
//           </div>
//           {/* right side */}  
//           <div className="relative w-50 h-[61.04px] md:w-91.75 md:h-28">
//             <Image src={logo} alt="logo" width={351} height={88} className="md:pt-30 md:ml-40 pt-10 ml-4"/>
//             <div className="absolute md:top-23 md:-right-36 top-4 -right-6">
//               <p className="w-6.5 h-6.5 bg-[#FFA52F] text-center rounded-full">+</p>
//             </div>
//           </div>
//         </section>
//         {/* bottom section */}
//         <section className="absolute right-0  md:w-330 w-89.5 gap-10 md:left-0 left-4 -bottom-198 md:bottom-22 bg-[#232321] h-180 md:h-147.75 md:rounded-[48px] rounded-[24px] flex flex-col md:flex-row">
//           {/* left side */}
//           <div className="flex flex-col gap-1 md:pt-10 md:pl-10 pt-6 pl-4 w-81.5 md:w-111.5 md:h-32 h-24.5">
//             <h2 className="font-rubik font-semibold md:text-[36px] text-[24px] leading-[100%] text-[#FFA52F]">About us</h2>
//             <p className="text-[#E7E7E3] font-semibold leading-[100%] md:text-[18px] text-[16px]">We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.</p>
//           </div>
//           {/* right side */}
//           <div className="flex flex-col md:flex-row md:justify-between md:pt-10 md:gap-32 md:pr-4 md:w-166 md:h-61.5 w-81.5 h-111.5 gap-6 pl-4">
//             <div className="md:w-32.25 w-27 h-53 md:h-61.5 flex flex-col gap-4">
//               <h3 className="text-[#FFA52F] font-rubik font-semibold md:text-[24px] text-[20px] leading-[100%]">Categories</h3>
//               <ul className="flex flex-col gap-2">
//                 <li className="text-[#E7E7E3] font-semibold md:text-[20px] text-[16px] leading-[100%]">Runners</li>
//                 <li className="text-[#E7E7E3] font-semibold md:text-[20px] text-[16px] leading-[100%]">Sneakers</li>
//                 <li className="text-[#E7E7E3] font-semibold md:text-[20px] text-[16px] leading-[100%]">Basketball</li>
//                 <li className="text-[#E7E7E3] font-semibold md:text-[20px] text-[16px] leading-[100%]">Outdoor</li>
//                 <li className="text-[#E7E7E3] font-semibold md:text-[20px] text-[16px] leading-[100%]">Golf</li>
//                 <li className="text-[#E7E7E3] font-semibold md:text-[20px] text-[16px] leading-[100%]">Hiking</li>
//               </ul>
//             </div>
//             <div className="md:w-32.25 w-27 h-53 md:h-61.5 flex flex-col gap-4">
//               <h3 className="text-[#FFA52F] font-rubik font-semibold md:text-[24px] text-[20px] leading-[100%]">Company</h3>
//               <ul className="flex flex-col gap-2">
//                 <li className="text-[#E7E7E3] font-semibold md:text-[20px] text-[16px] leading-[100%]">About</li>
//                 <li className="text-[#E7E7E3] font-semibold md:text-[20px] text-[16px] leading-[100%]">Contact</li>
//                 <li className="text-[#E7E7E3] font-semibold md:text-[20px] text-[16px] leading-[100%]">Blogs</li>
//               </ul>
//             </div>
//             <div className="md:w-32.25 w-27 h-53 md:h-61.5 flex flex-col gap-4">
//               <h3 className="text-[#FFA52F] font-rubik font-semibold md:text-[24px] text-[20px] leading-[100%]">Follow us</h3>
//               <div className="flex gap-4">
//                 <FaFacebook className="text-white w-6 h-6"/>
//                 <FaSquareInstagram className="text-white w-6 h-6"/>
//                 <FaTwitter className="text-white w-6 h-6"/>
//                 <FaTiktok className="text-white w-6 h-6"/>
//               </div>
//             </div>
//           </div>
//         </section>
//         <div className="absolute z-10 md:w-315.5 w-89.5 md:mt-185 md:px-16 mt-240">
//           <Image src={group} alt="logo" width={1262} height={313.66} className="rounded-2xl md:rounded-none"/>
//         </div>
//       </div>
//       <p className="text-center font-normal text-[16px] leading-[100%] text-[#232321] py-5 md:py-8">© All rights reserved</p>
//     </div>
//   )
// }

// export default Footer;


import React from 'react'

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Footer