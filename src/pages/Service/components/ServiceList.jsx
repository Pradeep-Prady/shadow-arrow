import { useState } from "react";
import web from "../assets/web.svg";
import { serviceData } from "../data/serviceData";
import { Link } from "react-router-dom";

const ServiceList = () => {
  const [currentService, setCurrentService] = useState(serviceData[0]);

  console.log(currentService);

  const clickHandler = (id) => {
    setCurrentService(serviceData.find((service) => service.id === id));
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-10 lg:gap-5">
      <div className="flex flex-wrap items-center gap-10 md:gap-0 justify-between w-full lg:w-[69%]">
        {/* Image */}
        <div className="rounded-[30px] w-full md:w-1/2">
          <img
            src={currentService.URL}
            alt=""
            className="rounded-[30px] object-cover object-center w-full h-[450px]"
          />
        </div>
        {/* List  */}
        <ul className="w-full md:w-[45%] flex flex-col justify-center gap-6 mxl:gap-12 pl-4">
          {serviceData.map(({ id, title }) => (
            <li
              key={id}
              className={`${
                currentService.id === id ? "text-primary" : "text-[#7F7F7F]"
              } text-3xl font-medium  hover:text-primary transition-all ease-linear
            cursor-pointer w-fit`}
              onClick={() => clickHandler(id)}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
      {/* Details */}
      <div
        className="bg-primary/10 text-primary lg:bg-primar lg:text-whit   w-full lg:w-[30%] rounded-[30px] space-y-3 relative group
      border-l-2 border-b-2 border-primary hover:bg-primary/10 hover:text-primary transition-all ease-linear"
      >
        <div className="p-6 space-y-3">
          <h1 className="text-3xl font-semibold">{currentService.title}</h1>
          <p>{currentService.desc}</p>
          <ul className="space-y-2 lg:w-[70%] xl:w-[60%] overflow-y-scroll h-60 scrollbar-hide ">
            <li className="text-[12px] border-2 w-fit px-2 py-[1px] rounded-full text-primary border-primary">
              Web Design
            </li>
            <li className="text-[12px] border-2 w-fit px-2 py-[1px] rounded-full text-primary border-primary">
              Content Management
            </li>
            <li className="text-[12px] border-2 w-fit px-2 py-[1px] rounded-full text-primary border-primary">
              Responsive Web Design
            </li>
            <li className="text-[12px] border-2 w-fit px-2 py-[1px] rounded-full text-primary border-primary">
              Ui / Ux
            </li>
            <li className="text-[12px] border-2 w-fit px-2 py-[1px] rounded-full text-primary border-primary">
              Web Development
            </li>
            <li className="text-[12px] border-2 w-fit px-2 py-[1px] rounded-full text-primary border-primary">
              E-Commerce
            </li>
          </ul>
          <div
            className="bg-primary/10 text-primary lg:bg-primary lg:text-white hidden md:absolute z-10 p-3 bottom-0 right-0 rounded-br-[30px] md:h-40 md:w-40 md:rounded-tl-[120px]
        md:flex items-end justify-end lg:invisible group-hover:visible hover:bg-primary/20 border-t-2 md:border-l-2 border-primary
        hover:text-primary transition-all ease-linear"
          >
            <Link to={currentService.path} className="px-4 py-3">
              View More
            </Link>
          </div>
        </div>
        <div
          className="bg-primary/10 text-primary lg:bg-primary lg:text-white  md:hidden z-10 p-3 bottom-0 right-0 rounded-br-[30px] md:h-40 md:w-40 md:rounded-tl-[120px]
        flex items-end justify-end lg:invisible group-hover:visible hover:bg-primary/20 border-t-2 md:border-l-2 border-primary
        hover:text-primary transition-all ease-linear"
        >
          <h1 className="px-4 py-3">View More</h1>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
