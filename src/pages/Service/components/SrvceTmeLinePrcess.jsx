 
import serviceBg from "../assets/serviceBg.svg";
import TimeLineDot from "../../../components/General/UI/TimeLineDot";
import { consultantData } from "../data/serviceData";
import BgframeImg from "../../../components/General/UI/BgframeImg";
import serciceIllustration from "../assets/service_illustration.png";

const SrvceTmeLinePrcess = () => {
  return (
    <div className="pt-10 pb-20 relative">
      <BgframeImg URL={serviceBg} style="translate-y-24" />
      <div className="pdngx space-y-20">
        <div className="text-3xl md:text-5xl leading-tight font-semibold text-center mxl:w-[60%] xl:w-[40%] mx-auto">
          Our <span className="text-primary">Streamlined</span> Service Process
        </div>
        <div className="flex justify-center ml-3 sml:ml-6 mdl:ml-0 lg:justify-between xl:justify-center gap-5">
          {/* Content(s) */}
          <div className="lg:w-[50%] xl:w-[40%] ">
            <ul className="space-y-20 border-l-[3px] border-[#1D0000]">
              {consultantData.content.map(({ id, title, desc }, index) => (
                <li className="relative w-full" key={id}>
                  <TimeLineDot first={index === 0} />
                  <div className="ml-6">
                    <h4 className="font-semibold text-3xl">{title}</h4>
                    <p className="mt-2 lg:max-w-screen-sm font-medium">
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Illustration(s) */}
          <div className="w-[50%] xl:w-[45%] hidden lg:block">
            <img
              src={serciceIllustration}
              alt="Sercice's Illustration"
              className=" h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SrvceTmeLinePrcess;

// {consultantData.image.map(({ id, URl }, index) => (
//   <li
//     key={id}
//     className={`flex ${index % 2 !== 0 && "justify-end"}`}
//   >
//     <img
//       src={URl}
//       alt=""
//       className={`w-[45%] ${
//         index !== 0 ? "-translate-y-20" : "-translate-y-6"
//       }`}
//     />
//   </li>
// ))}
