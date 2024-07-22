// import background from "../../assets/portfolio_section_bg.svg";
import background from "../../assets/portfolio_section_bg1.png";
import PortFolioCarousel from "./components/PortFolioCarousel";
// import { portfoliosData } from "./data/porfoliosData";

const PortfolioSection = () => {
  return (
    <section
      className="h-[900px] bg-cover bg-no-repeat bg-center pdng space-y-24
      flex flex-col justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="text-primary space-y-3 text-center md:text-left">
        <h1 className="text-[66px] leading-[66px] font-medium ">Portfolio</h1>
        <h5 className="text-3xl leading-snug">
          <span className="text-white">Showcasing Our </span>
          <span>Expertise</span>
        </h5>
      </div>
      <PortFolioCarousel />
    </section>
  );
};

export default PortfolioSection;
