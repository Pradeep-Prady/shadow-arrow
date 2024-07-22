import React from "react";
import Carousel from "../../Team/components/Carousel";
import bg from "../../../assets/footer_bg1.png";
// import bg from "../../../assets/footer_bg.svg";
import logo from "../../../assets/logo_white.svg";

import { LuPhone, LuMail, LuSend } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { socialData } from "../data/footerData";
import { serviceData } from "../../Service/data/serviceData";

const Footer = () => {
  return (
    <footer
      className=" px-4 md:px-12 lgl:px-16 xl:px-32  pt-24 pb-10 
      text-white space-y-16
      bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className=" md:w-[86%] rounded-3xl px-6 md:px-14 pt-20 pb-14 
        backdrop-filter backdrop-blur-lg bg-opacity-30
        bg-white/10 space-y-5 mx-auto text-center"
      >
        <h1 className="text-5xl md:text-[66px] md:leading-[66px] font-bold text-center">
          <span>Lets Talk </span>
          <span className="text-primary">Growth</span>
        </h1>
        <h1 className=" text-3xl md:text-4xl font-medium ">
          Schedule a call to discuss your specific needs.
        </h1>
        <div className="flex justify-center">
          <button
            className="flex gap-3 items-center border-2 border-primary p-3 rounded-lg
            hover:bg-gradient-to-r from-primary via-[#FF294B] to-primary transition-all
            ease-linear shadow-2xl hover:shadow-primary"
          >
            <span className="text-xl">Schedule a Call</span>
            <LuPhone className="scale-[1.4]" />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 lg:flex-nowrap justify-between w-full">
        {/* Company Info */}
        <div className="w-full md:w-[45%] lg:w-[20%] space-y-3 lg:h-full">
          <img src={logo} alt="" className="mb-5 mx-auto md:mx-0" />
          <h1 className="flex items-start gap-3 justify-center md:justify-start">
            <SlLocationPin className="scale-[3]" />
            
            <span>No.82/85, Sthithi Square Complex, Pankaja Mill Road, Coimbatore, Tamil Nadu 641045</span> 
          </h1>
          <h1 className="flex items-center gap-3 justify-center md:justify-start">
            <LuPhone className="scale-[1.2]" />
            <span>+91 95005 65168</span>
          </h1>
          {/* <h1 className="flex items-center gap-3 justify-center md:justify-start">
            <LuMail className="scale-[1.2]" />
            <span>Mail: XYZ@gmail.com</span>
          </h1> */}
        </div>
        {/* Contact With Us */}
         <div className="w-full md:w-[45%] lg:w-[17%] space-y-3">
          <h1 className="text-center text-xl font-medium">Contact With Us </h1>
          <div className="flex gap-3 justify-center">
            {socialData.map(({ id, Icon, link_to }) => (
              <a
                key={id}
                href={link_to}
                className="border w-10 h-10 rounded-full flex justify-center items-center
            border-primary group hover:bg-gradient-to-b from-primary to-[#FF294B]
            transition-colors ease-linear duration-500"
              >
                <Icon className="scale-[1.37] text-primary group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>
        {/* Services */}
        <div className="w-full md:w-[45%] lg:w-[18%] space-y-3 text-center md:text-left">
          <h1 className="text-xl font-medium text-primary">Services </h1>
          <ul className="space-y-1">
            {serviceData.map(({ id, title, desc }) => (
              <li key={id} className="text-[13px]">
                {title}
              </li>
            ))}
          </ul>
        </div>
        {/* Newsletter */}
        <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col space-y-3 text-center md:text-left">
          <h1 className="text-primary text-4xl font-medium">Subscribe</h1>
          <p className="font-light w-full md:w-[77%] leading-7">
            {` "Stay informed. Subscribe to our newsletter for the latest insights
            and strategies."`}
          </p>
          <div className="border-2 border-primary rounded flex justify-between items-center p-2 pr-3 gap-6">
            <input
              type="text"
              className="h-full w-full py-1 px-2 bg-transparent outline-none peer"
              placeholder="Enter Your Email"
            />
            <LuSend className="scale-[1.5] peer-focus:text-primary cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
