import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const WhiteBttn = ({ text, redirect_to = "/", black, style }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(redirect_to)}
      className={`${style} flex justify-center items-center px-3 py-2
      ${
        black
          ? "text-black border-black"
          : "text-gray-100/70 border-transparent"
      } hover:text-primary  rounded-lg space-x-2 border-2
        hover:border-primary transition-all ease-linear`}
    >
      <span className="text-xl">{text}</span>
      <FaChevronRight className="scale-[1.3]" />
    </button>
  );
};

export default WhiteBttn;
