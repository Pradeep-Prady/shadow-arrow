 
import ServiceList from "./components/ServiceList";
import { serviceData } from "./data/serviceData";
import MainContext from "../General/MainContext";

const ServiceSection = () => {
  return (
    <section className="px-4 md:px-16 lg:px-9 xl:px-24 py-24 space-y-10">
      <MainContext
        title="Services We Offer"
        subTitle="Crafting Your Digital"
        stOrngeText="Success"
        desc="From crafting captivating websites and user-centric interfaces to
          building a strong brand identity and executing data-driven marketing
          strategies, we provide everything you need to thrive in the digital
          landscape."
      />
      <ServiceList data={serviceData} />
    </section>
  );
};

export default ServiceSection;
