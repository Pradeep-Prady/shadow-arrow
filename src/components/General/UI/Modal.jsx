import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/uiSlice";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ${
        isOpen ? "z-40" : "hidden"
      }`}
      onClick={onClose}
    >
      {children}
    </div>
  );
};

export default Modal;
