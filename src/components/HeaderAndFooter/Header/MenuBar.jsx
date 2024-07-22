import React from "react";
import { useDispatch, useSelector } from "react-redux";
import bg from "../../../assets/hamburger_bg.svg";
import { IoCloseCircleOutline } from "react-icons/io5";
import { uiActions } from "../../../store/uiSlice";
import { menuBarData } from "../data/headerData";
import MenuItem from "./MenuItem";
import { m } from "framer-motion";

const MenuBar = () => {
  const isOpen = useSelector((state) => state.ui.showMenuBar);
  const dispatch = useDispatch();
  return (
    <menu
      className="fixed z-50 bg-black/10 w-full h-full overflow-y-hidden flex scrollbar-hide"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="w-[30%] mxl:w-[40%] lgl:w-[54%]"
        onClick={() => dispatch(uiActions.menuBarHanlder())}
      />
      {isOpen && (
        <m.div
          className=" w-[70%] mxl:w-[60%] lgl:w-[46%] bg-black text-white ml-auto h-full pdngx py-16 space-y-16 overflow-y-scroll scrollbar-hide"
          initial={{ opacity: 0, x: "100vw" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", bounce: 0.3, damping: 14 }}
        >
          {/* Close Button */}
          <button
            className="flex justify-end w-full"
            onClick={() => dispatch(uiActions.menuBarHanlder())}
          >
            <IoCloseCircleOutline className="scale-[3]" />
          </button>

          {/* Menu Items */}
          <ul className="text-2xl md:text-[28px] font-medium space-y-8">
            {menuBarData.map(({ id, URL, text, subMenu }) => (
              <MenuItem key={id} subMenu={subMenu} text={text} URL={URL} />
            ))}
          </ul>
        </m.div>
      )}
    </menu>
  );
};

export default MenuBar;

{
  /* <menu */
}
