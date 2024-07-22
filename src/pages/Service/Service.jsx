import Breadcrumbs from "../../components/General/UI/Breadcrumbs";
import MainContext from "../../components/General/MainContext";
import ServiceList from "./components/ServiceList";
import serviceBg1 from "./assets/servicesBg1.svg";
import SrvceTmeLinePrcess from "./components/SrvceTmeLinePrcess";
import BgframeImg from "../../components/General/UI/BgframeImg";
// import {
//   Timeline,
//   TimelineItem,
//   TimelineConnector,
//   TimelineHeader,
//   TimelineIcon,
//   TimelineBody,
//   Typography,
// } from "@material-tailwind/react";

const ServicePage = () => {
  return (
    <section className=" xxl:mx-auto pt-20 relative">
      <BgframeImg URL={serviceBg1} style="right-0 top-0" />
      <Breadcrumbs currentPage={[{ URL: "", text: "Service" }]} style="py-8" />
      <div className="px-4 md:px-16 lg:px-9 xl:px-20 space-y-12 pt-4 pb-20">
        <MainContext
          style="space-y-3"
          title="Our Services"
          desc="Explore Our Web design, development, marketing, branding solutions to see how  we can help you."
          descStyle="text-xl"
        />
        <ServiceList />
      </div>
      <SrvceTmeLinePrcess />
    </section>
  );
};

export default ServicePage;

{
  /* <div className="w-[32rem]">
              <Timeline>
                <TimelineItem color="">
                  <TimelineConnector className=""/>
                  <TimelineHeader className="h-3 ">
                    <TimelineIcon />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="leading-none"
                    >
                      Timeline Title Here.
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <Typography
                      variant="small"
                      color="gary"
                      className="font-normal text-gray-600"
                    >
                      The key to more success is to have a lot of pillows. Put
                      it this way, it took me twenty five years to get these
                      plants, twenty five years of blood sweat and tears, and
                      I&apos;m never giving up, I&apos;m just getting started.
                      I&apos;m up to something. Fan luv.
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader className="h-3">
                    <TimelineIcon />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="leading-none"
                    >
                      Timeline Title Here.
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <Typography
                      variant="small"
                      color="gary"
                      className="font-normal text-gray-600"
                    >
                      The key to more success is to have a lot of pillows. Put
                      it this way, it took me twenty five years to get these
                      plants, twenty five years of blood sweat and tears, and
                      I&apos;m never giving up, I&apos;m just getting started.
                      I&apos;m up to something. Fan luv.
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                  <TimelineHeader className="h-3">
                    <TimelineIcon />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="leading-none"
                    >
                      Timeline Title Here.
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody>
                    <Typography
                      variant="small"
                      color="gary"
                      className="font-normal text-gray-600"
                    >
                      The key to more success is to have a lot of pillows. Put
                      it this way, it took me twenty five years to get these
                      plants, twenty five years of blood sweat and tears, and
                      I&apos;m never giving up, I&apos;m just getting started.
                      I&apos;m up to something. Fan luv.
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
              </Timeline>
            </div> */
}
