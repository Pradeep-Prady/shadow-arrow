import BgframeImg from "../../components/General/UI/BgframeImg";
import Breadcrumbs from "../../components/General/UI/Breadcrumbs";
import MainContext from "../../components/General/MainContext";
import portfolioBg from "../Service/assets/servicesBg1.svg";
import ImageGallery from "./components/ImageGallery";

const Portfolio = () => {
  return (
    <section className=" xxl:mx-auto pt-20 relative">
      <BgframeImg URL={portfolioBg} style="right-0 top-0" />
      <Breadcrumbs
        currentPage={[{ URL: "", text: "Portfolio" }]}
        style="py-8"
      />
      <div className="px-4 md:px-16 lg:px-9 xl:px-20 space-y-12 pt-4 pb-20">
        <MainContext
          style="space-y-3"
          title="Our Portfolio"
          desc="Our portfolio reflects the successful partnerships we've built with our clients. We believe in working closely with you to understand your vision and translate it into exceptional results."
          descStyle="text-xl leading-8"
        />
        <ImageGallery />
      </div>
    </section>
  );
};

export default Portfolio;
