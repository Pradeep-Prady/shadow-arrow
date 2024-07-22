import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const Breadcrumbs = ({ currentPage, style, bldInPdng = true }) => {
  return (
    <div
      className={`${
        bldInPdng && "pdngx"
      } flex items-center font-medium gap-3 py-4 ${style}`}
    >
      <Link to="/" className="hover:text-primary transition-all ease-linear">
        Home
      </Link>
      {currentPage && (
        <ul className="flex items-center gap-3">
          {currentPage.map(({ URL, text }) => (
            <li className="flex items-center gap-3" key={URL}>
              <FaAngleRight />
              {URL ? (
                <Link
                  to={URL}
                  className="hover:text-primary transition-all ease-linear"
                >
                  {text}
                </Link>
              ) : (
                <h3>{text}</h3>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Breadcrumbs;
