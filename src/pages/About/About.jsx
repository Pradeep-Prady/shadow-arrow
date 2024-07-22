import React, { useEffect } from "react";
import Meta from "../../components/General/Meta";
import AboutSection from "../../components/About/AboutSection";
import TeamSection from "../../components/Team/TeamSection";
import TestimonialsSection from "../../components/Testimonials/TestimonialsSection";
import Breadcrumbs from "../../components/General/UI/Breadcrumbs";
import leftImage from "./assets/about_left_image.svg";
import rightImage from "./assets/about_right_image.svg";
import BgSection from "../../components/General/BgSection";

const AboutPage = () => {
  return (
    <section className="pt-20">
      <Meta
        titleTxt="About - shadowarrow.com"
        metaContent="Lorem ipsum dolor sit amet"
        link_URL="http://mysite.com/example"
      />
      <BgSection left_circle={leftImage} right_circle={rightImage} />
      <Breadcrumbs
        currentPage={[{ URL: "", text: "About" }]}
        style="pt-8 py-0"
      />
      <AboutSection aboutBtn={false} />
      <TestimonialsSection />
      <TeamSection />
    </section>
  );
};

export default AboutPage;

// Meta using useEffect and DOM
//   useEffect(() => {
//     document.title = "About - shadowarrow.com";
//     const metaDescription = document.createElement("meta");
//     metaDescription.setAttribute("name", "description");
//     metaDescription.setAttribute(
//       "content",
//       "A concise description of your page."
//     );
//     document.head.appendChild(metaDescription);

//     return () => document.head.removeChild(metaDescription); // Cleanup on unmount
//   }, []);
