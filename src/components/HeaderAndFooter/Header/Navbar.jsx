import { CgMenuRound } from "react-icons/cg";
import logo from "../../../assets/logo.svg";
import hamburgerIcon from "../../../assets/hamburger_icon.svg";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/uiSlice";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <nav
      className=" flex justify-between items-center pdngx py-3 lg:py-2
      bg-white/30 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-primary/50"
    >
      <img
        src={logo}
        alt=""
        className="w-32 sml:w-auto cursor-pointer"
        onClick={() => navigate("/")}
      />
      {/* <CgMenuRound className="scale-[3]"/> */}
      <img
        src={hamburgerIcon}
        alt=""
        className="cursor-pointer"
        onClick={() => dispatch(uiActions.menuBarHanlder())}
      />
    </nav>
  );
};

export default Navbar;
