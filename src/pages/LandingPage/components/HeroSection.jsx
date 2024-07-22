// import React from "react";
// import { FaChevronRight } from "react-icons/fa6";
// import WhiteBttn from "../../../components/General/UI/WhiteBttn";
// import { Link } from "react-router-dom";
// import hero from '../../../assets/videos/hero.mp4'

// const HeroSection = () => {
//   return (
//     <section
//       className="bg-gradient-to-tr from-[#F37715] from-10% via-[#C73003]
//      via-30% to-black to-110%  flex justify-center items-center pt-44 pb-20 md:pb-60 px-4 md:px-20"
//     >
//       <div
//         className=" w-full rounded-3xl px-4 md:px-16 py-8 md:pt-20 md:pb-14 
//         backdrop-filter backdrop-blur-lg bg-opacity-30
//         bg-white/10 space-y-7 md:space-y-5"
//       >
//         <div className="text-5xl leading-tight text-center md:text-left md:text-[66px] md:leading-[66px] space-y-3">
//           <h1 className=" font-bold">
//             <span>WE HIT THE </span>
//             <span className="text-primary">MARK</span>
//           </h1>
//           <h1 className="font-bold">
//             <span>YOUR TARGET IS </span>
//             <span className="text-primary">SUCCESS</span>
//           </h1>
//         </div>
//         <h6 className="w-full lg:w-[72%] text-center md:text-left font-medium ">
//           From captivating websites and user-friendly experiences to strategic
//           branding and targeted marketing, we empower you to build a powerful
//           online presence and achieve your digital goals.
//         </h6>
//         <Link to={`/services`} className="flex justify-center md:justify-end md:pt-12">
//           <WhiteBttn text="Explore Our Services" />
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import WhiteBttn from "../../../components/General/UI/WhiteBttn";
import { Link } from "react-router-dom";
import heroVideo from '../../../assets/videos/hero.mp4';

const HeroSection = () => {
  return (
    <section
      className="bg-gradient-to-tr from-[#F37715] from-10% via-[#C73003] via-30% to-black to-110% relative flex justify-center items-center pt-44 pb-20 md:pb-60 px-4 md:px-20"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="relative z-10 w-full rounded-3xl px-4 md:px-16 py-8 md:pt-20 md:pb-14 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white/10 space-y-7 md:space-y-5"
      >
        <div className="text-5xl leading-tight text-center md:text-left md:text-[66px] md:leading-[66px] space-y-3">
          <h1 className="font-bold">
            <span>WE HIT THE </span>
            <span className="text-primary">MARK</span>
          </h1>
          <h1 className="font-bold">
            <span>YOUR TARGET IS </span>
            <span className="text-primary">SUCCESS</span>
          </h1>
        </div>
        <h6 className="w-full lg:w-[72%] text-center md:text-left font-medium">
          From captivating websites and user-friendly experiences to strategic
          branding and targeted marketing, we empower you to build a powerful
          online presence and achieve your digital goals.
        </h6>
        <Link to={`/services`} className="flex justify-center md:justify-end md:pt-12">
          <WhiteBttn text="Explore Our Services" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
