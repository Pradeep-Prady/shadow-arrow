import React from "react";
import Breadcrumbs from "../../components/General/UI/Breadcrumbs";
import topImg from "../../assets/contact-top.svg";
import bottomImg from "../../assets/contact-bottom.svg";

import mailIcon from "../../assets/icons/Mail.svg";
import locationIcon from "../../assets/icons/Location.svg";
import callIcon from "../../assets/icons/Call.svg";
import messageIcon from "../../assets/icons/Message.svg";

const ContactUs = () => {


    

  return (
    <div className="  xxl:mx-auto pt-20 relative">
      <Breadcrumbs currentPage={[{ URL: "", text: "Contact" }]} style="py-8" />

      <div className="px-4 md:px-16 lg:px-9 xl:px-20 space-y-5 pt-4 pb-20">
        <h1
          className={`text-4xl md:w-4/12 md:text-[40px] md:leading-[50px] text-center md:text-left text-primary font-semibold `}
        >
          Don't hesitate to reach out
        </h1>

        <h3 className={`text-xl md:text-2xl font-semibold `}>
          Our team is here to support you every step of the way.
          <span className="text-primary"> </span>
        </h3>
      </div>

      <div className=" w-full relative h-screen grid grid-cols-2">
        <img
          className="absolute z-0 left-0 top-0"
          src={topImg}
          alt="Contact Us Image"
        />
        <div className="relative z-50 px-4 md:px-16 lg:px-9 xl:px-20 space-y-5 pt-4 pb-20 flex items-center justify-center">
          <div className="h-[70%] flex flex-col justify-between">
            <div>
              <h2 className="text-[#FFBF9D] text-xl pb-7 md:text-2xl">
                Get In Touch
              </h2>

              <h1 className="text-4xl  md:text-[40px] md:leading-[50px] text-center md:text-left font-semibold ">
                Reach out to us and let us know how we can assist you.
              </h1>
            </div>

            <div className="flex flex-col gap-7">
              <div className="flex gap-3">
                <img src={locationIcon} alt="Mail Icon" />

                <p>No.82/85, Sthithi Square Complex, Pankaja Mill Road, Coimbatore, Tamil Nadu 641045</p>
              </div>

              <div className="flex gap-3">
                <img src={callIcon} alt="Mail Icon" />
                <p>+91  95005 65168</p>
              </div>

              <div className="flex gap-3">
                <img src={mailIcon} alt="Mail Icon" />

                <p>Mail: shadowarrow@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-16 lg:px-9 xl:px-20 space-y-5 pt-4 pb-20 flex items-center justify-center">
          <div className="contact- p-10 rounded-3xl">
            <form className="h-[70%] flex flex-col gap-7">
              <div className="flex items-center justify-between gap-5">
                <input
                  className="border-black   px-3 py-[10px] border-2 rounded-md "
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="border-black   px-3 py-[10px] border-2 rounded-md "
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex w-full items-center justify-between gap-5">
                <input
                  className="border-black  w-full px-3 py-[10px] border-2 rounded-md "
                  type="email"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="flex items-center justify-between gap-5">
                <p
                  className="border-black w-2/12  px-3 py-[10px] border-2 rounded-md "
                >
                  + 91
                </p>
                <input
                  className="border-black w-full  px-3 py-[10px] border-2 rounded-md "
                  type="number"
                  placeholder="Mobile Number"
                />
              </div>

              <div className="flex w-full items-center justify-between gap-5">
                <textarea
                  style={{ resize: "none" }}
                  className="border-black h-[120px] w-full px-3 py-[10px] border-2 rounded-md "
                  type="text"
                  placeholder="Message"
                />
              </div>

              <div className="flex w-full items-center justify-center gap-5">
                <div className="flex items-center justify-between gap-3 border-[3px] border-primary p-5 rounded-full">
                  <button>Send Message</button>
                  <img src={messageIcon} alt="messageIcon" />
                </div>
              </div>
            </form>
          </div>
        </div>

        <img
          className="absolute z-0 right-0 bottom-0"
          src={bottomImg}
          alt="Contact Us Image"
        />
      </div>
    </div>
  );
};

export default ContactUs;
