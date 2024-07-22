import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { uiActions } from "../../../store/uiSlice";

const MenuItem = ({ id, URL, text, subMenu }) => {
  const [subMenuItems, setSubMenuItems] = useState(subMenu);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(
    subMenu ? false : null
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(subMenuItems);

  const clickHandler = (redirect_to) => {
    navigate(redirect_to);
    dispatch(uiActions.menuBarHanlder());
    // window.scrollTo(0, 0);  -> COMMENTED BECAUSE SCROLL_RESTORATION HAS BEEN ADDED IN ROOTLAYOUT
  };

  return (
    <li key={id} className="space-y-5">
      <div className="">
        {subMenu ? (
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsSubMenuVisible((prev) => !prev)}
          >
            <h1>{text}</h1>
            {isSubMenuVisible ? (
              <FaAngleUp className="text-primary" />
            ) : (
              <FaAngleDown className="text-primary" />
            )}
          </div>
        ) : (
          <h1
            onClick={() => clickHandler(URL)}
            className="w-fit cursor-pointer underline md:no-underline underline-offset-[3px]"
          >
            {text}
          </h1>
        )}
      </div>
      {subMenuItems && (
        <ul
          className={`space-y-5 px-1 md:px-8 py-1 text-xl md:text-2xl ${
            !isSubMenuVisible && "hidden"
          }`}
        >
          {subMenuItems.map(({ id, URL, text, subMenu }) => (
            <MenuItem key={id} subMenu={subMenu} text={text} URL={URL} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
