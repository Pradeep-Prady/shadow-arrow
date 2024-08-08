// import ServiceItem from "./ServiceItem";

import { FaChevronRight } from "react-icons/fa6";
// import { GoArrowUpRight } from "react-icons/go";
// import { Link } from "react-router-dom";
// const ServiceList = ({ data }) => {
//   return (
//     <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-between">
//       {data.map(({ id, title, desc, path }) => (
//         <ServiceItem key={id} id={id} title={title} desc={desc} path={path} />
//       ))}
//     </ul>
//   );
// };

// export default ServiceList;

// const ServiceItem = ({ id, title, desc, path }) => {
//   return (
//     <li
//       className="w-full h-auto border-b border-black  py-3 space-y-3

//      "
//     >
//       <Link
//         to={`${path}`}
//         className="flex items-start md:h-[37%] justify-between gap-3"
//       >
//         <h3 className="text-3xl font-medium">{title}</h3>
//         <GoArrowUpRight className="text-3xl font-semibold" />
//       </Link>
//       <p className="font-ligh md:h-[63%] md:pt-1 md:pb-5 items-end">{desc}</p>
//     </li>
//   );
// };



import { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiceList = ({ data }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} className="relative">
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-between">
        {data.map(({ id, title, desc, path, image }) => (
          <ServiceItem
            key={id}
            id={id}
            title={title}
            desc={desc}
            path={path}
            image={image}
            setHoveredImage={setHoveredImage}
          />
        ))}
      </ul>
      {/* {hoveredImage && (
        <motion.img
          src={hoveredImage}
          alt="Hovered Service"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed pointer-events-none"
          style={{
            top: cursorPosition.y,
            left: cursorPosition.x,
            width: '150px',
            height: '150px',
            transform: 'translate(-50%, -50%)'
          }}
        />
      )} */}
    </div>
  );
};

export default ServiceList;

const ServiceItem = ({ id, title, desc, path, image, setHoveredImage }) => {
  const handleMouseEnter = () => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <li
      className="w-full h-auto border-b border-black py-3 space-y-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={path} className="flex items-start md:h-[37%] justify-between gap-3">
        <h3 className="text-3xl font-medium">{title}</h3>
        <GoArrowUpRight className="text-3xl font-semibold" />
      </Link>
      <p className="font-light md:h-[63%] md:pt-1 md:pb-5 items-end">{desc}</p>
    </li>
  );
};


// import { useState } from 'react';
// import { GoArrowUpRight } from 'react-icons/go';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const ServiceList = ({ data }) => {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [hoveredImage, setHoveredImage] = useState(null);

//   const handleMouseMove = (e) => {
//     setCursorPosition({ x: e.clientX, y: e.clientY });
//   };

//   return (
//     <div onMouseMove={handleMouseMove} className="relative">
//       <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-between">
//         {data.map(({ id, title, desc, path, image }) => (
//           <ServiceItem
//             key={id}
//             id={id}
//             title={title}
//             desc={desc}
//             path={path}
//             image={image}
//             setHoveredImage={setHoveredImage}
//           />
//         ))}
//       </ul>
//       {hoveredImage && (
//         <motion.img
//           src={hoveredImage}
//           alt="Hovered Service"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed pointer-events-none"
//           style={{
//             position: 'absolute',
//             top: cursorPosition.y - 145, // Adjust based on half the height of the image
//             left: cursorPosition.x - 145, // Adjust based on half the width of the image
//             width: '150px',
//             height: '150px',
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default ServiceList;

// const ServiceItem = ({ id, title, desc, path, image, setHoveredImage }) => {
//   const handleMouseEnter = () => {
//     console.log(`Hovering over: ${title}`);
//     setHoveredImage(image);
//   };

//   const handleMouseLeave = () => {
//     console.log(`Mouse left: ${title}`);
//     setHoveredImage(null);
//   };

//   return (
//     <li
//       className="w-full h-auto border-b border-black py-3 space-y-3"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <Link to={path} className="flex items-start md:h-[37%] justify-between gap-3">
//         <h3 className="text-3xl font-medium">{title}</h3>
//         <GoArrowUpRight className="text-3xl font-semibold" />
//       </Link>
//       <p className="font-light md:h-[63%] md:pt-1 md:pb-5 items-end">{desc}</p>
//     </li>
//   );
// };



// Scroll Design
// import { serviceData } from "../data/serviceData";

// import { motion, useTransform, useScroll } from "framer-motion";
// import { useRef } from "react";
// import { Link } from "react-router-dom";

// const ServiceList = () => {
//   return (
//     <div className="relative">
//       <HorizontalScrollCarousel />
//     </div>
//   );
// };

// export default ServiceList;

// const HorizontalScrollCarousel = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83%"]);

//   return (
//     <section ref={targetRef} className="relative h-[500vh] dark:bg-neutral-900">
//       <div className="sticky top-0 h-[100vh] flex flex-col">
//         <div className="flex-grow flex items-center gap-10 overflow-hidden">
//           <motion.div style={{ x }} className="flex">
//             {serviceData.map((card) => (
//               <Card card={card} key={card.id} />
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Card = ({ card }) => {
//   return (
//     <div
//       key={card.id}
//       className="group  relative h-[100vh] md:h-[100vh]  w-[85vw] overflow-hidden p-2 md:p-10 flex  items-center justify-between bg-neutral-200"
//     >
//       <div className="  h-full   relative  cursor-pointer rounded-r-lg p-2 md:p-10 group-hover:border-primar rounded-b-lg flex flex-col md:flex-row items-center justify-between w-full">
//         <div className="w-1/2 flex items-center justify-center  border-2 border-gray-600 serviceCard py-5 px-10">
//           <img
//             src={card.image}
//             className="w-auto h-full  transition-transform duration-300  "
//           />
//         </div>{" "}
//         <div
//           className="w-[55%] right-0 absolute bg-gradient-to-br from-[#F37715] from-10% via-[#C73003] p-5
//      via-90% to-black to-100% serviceCard-glass grid place-content-center"
//         >
//           <p className="    p-3 group-hover:text-primar text-xl md:text-6xl font-bold ">
//             {card.title}
//           </p>
//           <p className=" text-gray-300 my-3  md:text-xl   ">{card.desc}</p>

//           <div className="w-full  p-3 flex ">
//             <Link
//               to={card.path}
//               //  className="bg-gradient-to-br   text-xl border-2 border-black rounded-md px-4 py-2 "
//               className="flex justify-center items-center px-3 py-2
//  text-black hover:text-primary border-[3px] rounded-lg space-x-2
//   border-black hover:border-primary transition-all ease-linear cursor-pointer"
//             >
//               Explore
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // const Card = ({ card }) => {
// //   return (
// //     <div
// //       key={card.id}
// //       className="group  relative h-[100vh] md:h-[60vh] w-[85vw] overflow-hidden p-2 md:p-10 flex  items-center justify-between bg-neutral-200"
// //     >
// //       <div className="border-black border-r-4 border-b-4 cursor-pointer rounded-r-lg p-2 md:p-10 group-hover:border-primar rounded-b-lg flex flex-col md:flex-row items-center justify-between w-full">
// //         <div className="w-full  grid place-content-center">
// //           <p className="bg-gradient-to-br from-white/20 to-white/0 p-3 group-hover:text-primar text-xl md:text-6xl font-bold backdrop-blur-lg">
// //             {card.title}
// //           </p>
// //           <p className="bg-gradient-to-br from-white/20 to-white/0 p-3  md:text-xl  backdrop-blur-lg">
// //             {card.desc}
// //           </p>

// //           <div className="w-full  p-3 flex ">
// //             <Link
// //               to={card.path}
// //               //  className="bg-gradient-to-br   text-xl border-2 border-black rounded-md px-4 py-2 "
// //               className="flex justify-center items-center px-3 py-2
// //  text-black hover:text-primary border-[3px] rounded-lg space-x-2
// //   border-black hover:border-primary transition-all ease-linear cursor-pointer"
// //             >
// //               Explore
// //             </Link>
// //           </div>
// //         </div>
// //         <div className="w-full flex items-center justify-center p-5">
// //           <img
// //             src={card.image}
// //             className="w-full  transition-transform duration-300  "
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
