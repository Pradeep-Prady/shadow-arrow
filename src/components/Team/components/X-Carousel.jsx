import React from "react";
import { teamsData } from "../data/teamsData";

const Carousel = () => {
  return (
    <div className="flex fle space-x-3 overflow-hidden ">
      {teamsData.map(({ id, image, name, designation, socialLinks }) => (
        <div
        //   key={id}
          className=" w-[4500px] h-[300px] text-white border-4 border-black bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* <img src={image} alt="" className="absolute -z-10"/> */}
          <h1 className="text-3xl">{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
