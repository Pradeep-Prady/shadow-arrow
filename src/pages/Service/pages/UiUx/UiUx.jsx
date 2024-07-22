import BgframeImg from "../../../../components/General/UI/BgframeImg";
import MainContext from "../../../../components/General/MainContext";
import Breadcrumbs from "../../../../components/General/UI/Breadcrumbs";
import uiuxbg1 from "../../assets/uiuxbg1.svg";
import uiuxbg2 from "../../assets/uiuxbg2.svg";
import { designProcessData, keyFeaturesData } from "./uiuxData";
import Accordion from "../../../../components/General/Accordion";

const UiUx = () => {
  return (
    <section className=" xxl:mx-auto pt-20 relative">
      <BgframeImg URL={uiuxbg1} style="right-0 top-0" />
      <Breadcrumbs
        currentPage={[
          { URL: "..", text: "Service" },
          { URL: "", text: "UI / UX" },
        ]}
      />
      <div className="px-4 md:px-16 lg:px-9 xl:px-20 space-y-12 pt-4 pb-20">
        <MainContext
          style="space-y-4"
          title="Our Services"
          tStyle="text-[#666666] text-[38px] leading-[50px] font-semibold"
          subTitle=" "
          stStyle="text-5xl"
          stOrngeText="UX/UI Design"
          desc="At Shadow Arrow, we understand the importance of user-centric design in creating engaging and intuitive digital products. Our UI/UX design services are tailored to help businesses of all sizes deliver seamless experiences that delight users and drive results."
          descStyle="text-xl"
        />
        {/* <ServiceList /> */}
      </div>
      <div className="bg-[#FCEAE2] px-4 md:px-16 lg:px-9 xl:px-20 py-14 ">
        <h2 className=" text-4xl font-semibold">Our Design Process</h2>
        <ul className="">
          {designProcessData.map(({ id, title, desc, image, isLeft }) => (
            <li
              key={id}
              className="flex justify-between gap-32 items-center w-[100%]"
            >
              {isLeft && (
                <div className="w-[35%]">
                  <img src={image} alt="" className="object-contain" />
                </div>
              )}
              <div className="w-[75%] space-y-5">
                <h1 className="text-primary text-4xl font-semibold">{title}</h1>
                <p className="text-2xl font-medium border">{desc}</p>
              </div>
              {!isLeft && (
                <div className="w-[35%] border">
                  <img src={image} alt="" className="object-contain" />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className=" px-4 md:px-16 lg:px-9 xl:px-20 py-20 space-y-16">
        <h2 className=" text-4xl font-semibold">Key Features</h2>
        <ul className="space-y-9">
          {keyFeaturesData.map(({ id, body, header }) => (
            <Accordion key={id} {...{ id, body, header }} />
          ))}
        </ul>
      </div>
      <div className="text-center space-y-5 pt-10 pb-20">
        <h3 className={`text-[40px] leading-[40px] font-semibold`}>
          {`  Let's Create a Better`}
          <span className="text-primary">User Experience </span>
          Together
        </h3>
        <p className="text-2xl font-medium w-[80%] mx-auto">
          {`   Whether you're launching a new product or redesigning an existing one,
          we're here to help you create a seamless user experience that drives
          engagement, conversions, and customer satisfaction. Let's collaborate
          to turn your vision into reality.`}
        </p>
      </div>
      <BgframeImg URL={uiuxbg2} style=" bottom-0 left-0" />
    </section>
  );
};

export default UiUx;
