import HeroSection from "./components/HeroSection";
import Value from "./components/Values/Values";
import AboutAndService from "./components/AboutAndService";
import PortfolioSection from "../../components/Portfolio/PortfolioSection";
import TeamSection from "../../components/Team/TeamSection";
import TestimonialsSection from "../../components/Testimonials/TestimonialsSection";
import BlogSection from "../../components/Blog/BlogSection";
import Meta from "../../components/General/Meta";

const App = () => {
  return (
    <div className=" xxl:mx-auto">
      {/* Meta Data */}
      <Meta
        titleTxt="Home - shadowarrow.com"
        metaContent="Lorem ipsum dolor sit amet"
        link_URL="http://mysite.com/example"
      />
      <HeroSection />
      <Value />
      <AboutAndService />
      <PortfolioSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
    </div>
  );
};

export default App;
