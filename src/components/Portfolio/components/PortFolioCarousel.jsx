// import React, { useState } from "react";
// import { portfoliosData } from "../data/porfoliosData";
// import slider from "../../../assets/slider_image.svg";
// import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
// import WhiteBttn from "../../General/UI/WhiteBttn";

// const PortFolioCarousel = () => {
//   const [focusedIndex, setFocusedIndex] = useState(
//     Math.floor(portfoliosData.length / 2)
//   );
//   const [offset, setOffset] = useState(0);

//   const handleNext = () => {
//     setOffset((prevOffset) => (prevOffset + 1) % portfoliosData.length);
//     setFocusedIndex((prevIndex) => (prevIndex + 1) % portfoliosData.length);
//   };

//   const handlePrev = () => {
//     setOffset(
//       (prevOffset) =>
//         (prevOffset - 1 + portfoliosData.length) % portfoliosData.length
//     );
//     setFocusedIndex(
//       (prevIndex) =>
//         (prevIndex - 1 + portfoliosData.length) % portfoliosData.length
//     );
//   };

//   return (
//     <div className="flex flex-col items-center mt-8 space-y-[70px]">
//       <div className="flex justify-center items-center space-x-20 w-full">
//         {[0, 1, 2].map((i) => {
//           const index =
//             (focusedIndex + i - 1 + portfoliosData.length) %
//             portfoliosData.length;
//           return (
//             <div
//               key={index}
//               className={`relative w-[350px] h-80 cursor-pointer group transition-transform duration-300 ease-in-out ${
//                 i === 1 ? "transform scale-[1.3]" : ""
//               }`}
//               onClick={() => setFocusedIndex(index)}
//             >
//               <div
//                 className="absolute inset-44 left-0 bottom-0 rounded-tr-[40px] bg-black bg-opacity-50 text-white text-center flex flex-col justify-center
//                 items-center opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
//                 style={{ zIndex: 1 }}
//               >
//                 <h1>Branding</h1>
//                 <a href="">View Portfolio</a>
//               </div>
//               <div
//                 className="absolute inset-0 bg-cover bg-center rounded-lg"
//                 style={{
//                   backgroundImage: `url(${portfoliosData[index].url})`,
//                   zIndex: 0,
//                 }}
//               />
//             </div>
//           );
//         })}
//       </div>
//       {/* Control Buttons */}
//       <div className=" flex justify-center gap-10">
//         {/* Left Arrow */}
//         <div
//           className="rounded-full select-none p-6 bg-black/20 text-white cursor-pointer border-4 border-primary
//             hover:bg-gradient-to-br from-primary to-[#D0172D]"
//           onClick={handlePrev}
//         >
//           <FaChevronLeft className="scale-[1.7]" />
//         </div>
//         {/* Right Arrow */}
//         <div
//           className="rounded-full select-none p-6 bg-black/20 text-white cursor-pointer border-4 border-primary
//             hover:bg-gradient-to-br from-primary to-[#D0172D]"
//           onClick={handleNext}
//         >
//           <FaChevronRight className="scale-[1.7]" />
//         </div>
//       </div>
//       <div className="flex justify-end w-full">
//         <WhiteBttn text="View All" />
//       </div>
//     </div>
//   );
// };

// export default PortFolioCarousel;

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { portfoliosData } from "../data/porfoliosData";
// import WhiteBttn from "../../General/UI/WhiteBttn";

// const PortFolioCarousel = () => {

//   const [focusedIndex, setFocusedIndex] = useState(
//     Math.floor(portfoliosData.length / 2)
//   );

//   console.log(focusedIndex);
//   const handleDragEnd = (event, info) => {
//     if (info.offset.x > 50) {
//       handlePrev();
//     } else if (info.offset.x < -50) {
//       handleNext();
//     }
//   };

//   const handleNext = () => {
//     setFocusedIndex((prevIndex) => (prevIndex + 1) % portfoliosData.length);
//   };

//   const handlePrev = () => {
//     setFocusedIndex(
//       (prevIndex) =>
//         (prevIndex - 1 + portfoliosData.length) % portfoliosData.length
//     );
//   };

//   const getVisibleItems = () => {
//     const prevIndex =
//       (focusedIndex - 1 + portfoliosData.length) % portfoliosData.length;
//     const nextIndex = (focusedIndex + 1) % portfoliosData.length;
//     return [prevIndex, focusedIndex, nextIndex];
//   };

//   const visibleItems = getVisibleItems();

//   return (
//     <div className="flex flex-col items-center mt-8 space-y-[70px]">
//       <motion.div
//         className="flex justify-center items-center space-x-10 w-full cursor-grab"
//         drag="x"
//         dragConstraints={{ left: 0, right: 0 }}
//         onDragEnd={handleDragEnd}
//       >
//         {visibleItems.map((index) => {
//           const isCenter = index === focusedIndex;
//           return (
//             <motion.div
//               key={index}
//               className={`relative w-[350px] h-80 cursor-pointer group transition-transform duration-300 ease-in-out ${
//                 isCenter ? "transform scale-[1.3]" : ""
//               }`}
//               style={{
//                 scale: isCenter ? 1.3 : 1,
//                 opacity: isCenter ? 1 : 0.5,
//               }}
//               onClick={() => setFocusedIndex(index)}
//             >
//               <div
//                 className="absolute inset-44 left-0 bottom-0 rounded-tr-[40px] bg-black bg-opacity-50 text-white text-center flex flex-col justify-center
//                 items-center opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
//                 style={{ zIndex: 1 }}
//               >
//                 <h1>{portfoliosData[index].title}</h1>
//                 <a href={portfoliosData[index].link}>View Portfolio</a>
//               </div>
//               <div
//                 className="absolute inset-0 bg-cover bg-center rounded-lg"
//                 style={{
//                   backgroundImage: `url(${portfoliosData[index].url})`,
//                   zIndex: 0,
//                 }}
//               />
//             </motion.div>
//           );
//         })}
//       </motion.div>
//       <div className="flex justify-end w-full">
//         <WhiteBttn text="View All" />
//       </div>
//     </div>
//   );
// };

// export default PortFolioCarousel;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { portfoliosData } from "../data/porfoliosData";
import WhiteBttn from "../../General/UI/WhiteBttn";

const PortFolioCarousel = () => {
  const [focusedIndex, setFocusedIndex] = useState(
    Math.floor(portfoliosData.length / 2)
  );
  const [numVisibleCards, setNumVisibleCards] = useState(3); // Default number of visible cards

  useEffect(() => {
    // Adjust visible cards based on screen width
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNumVisibleCards(1); // Mobile view, one card visible
      } else if (window.innerWidth < 1024) {
        setNumVisibleCards(2); // Tablet view, two cards visible
      } else {
        setNumVisibleCards(3); // Default desktop view, three cards visible
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 50) {
      handlePrev();
    } else if (info.offset.x < -50) {
      handleNext();
    }
  };

  const handleNext = () => {
    setFocusedIndex((prevIndex) => (prevIndex + 1) % portfoliosData.length);
  };

  const handlePrev = () => {
    setFocusedIndex(
      (prevIndex) =>
        (prevIndex - 1 + portfoliosData.length) % portfoliosData.length
    );
  };

  const getVisibleItems = () => {
    const items = [];
    const startIndex = focusedIndex - Math.floor(numVisibleCards / 2);
    for (let i = 0; i < numVisibleCards; i++) {
      items.push((startIndex + i + portfoliosData.length) % portfoliosData.length);
    }
    return items;
  };
  
  const visibleItems = getVisibleItems();

  return (
    <div className="flex flex-col items-center mt-8 space-y-10">
      <motion.div
        className={`flex justify-center items-center space-x-10 w-full cursor-grab overflow-x-aut`}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        style={{ scrollSnapType: "x mandatory" }}
      >
        {visibleItems.map((index) => {
          const isCenter = index === focusedIndex;
          return (
            <motion.div
              key={index}
              className={`relative w-full ${
                numVisibleCards === 1 ? "h-[300px]" : "h-[300px]"
              } cursor-pointer group transition-transform duration-300 ease-in-out ${
                isCenter ? "transform scale-[1.1]" : ""
              }`}
              style={{
                scale: isCenter ? 1.1 : 1,
                opacity: isCenter ? 1 : 0.5,
                minWidth: `${100 / numVisibleCards}%`,
              }}
              onClick={() => setFocusedIndex(index)}
            >
              <div
                className="absolute inset-0 rounded-lg overflow-hidden"
                style={{
                  backgroundImage: `url(${portfoliosData[index].url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-50 text-white text-center flex flex-col justify-center items-center opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                style={{ zIndex: 1 }}
              >
                <h1>{portfoliosData[index].title}</h1>
                <a href={portfoliosData[index].link}>View Portfolio</a>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div className="flex justify-end w-full">
        <WhiteBttn text="View All" />
      </div>
    </div>
  );
};

export default PortFolioCarousel;
