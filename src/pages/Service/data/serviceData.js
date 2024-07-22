import web from "../assets/web.svg";
import mobile from "../assets/mobile.svg";
import ui from "../assets/ui.svg";
import graphic from "../assets/graphic.svg";
import dm from "../assets/dm.svg";
import branding from "../assets/branding.svg";

// Consultant
import consultation1 from "../assets/consultation_1.svg";
import consultation2 from "../assets/consultation_2.svg";
import consultation3 from "../assets/consultation_3.svg";
import consultation4 from "../assets/consultation_4.svg";

export const serviceData = [
  {
    id: "sdId_1",
    URL: web,
    path: "/services/web-design-and-development",
    title: "Web Design and Development",
    desc: "Our skilled developers ensure your website functions flawlessly, is secure, and optimized for performance across all devices.",
    keys: [
      {
        id: "sdkId_1",
        key: "Web Design",
      },
      {
        id: "sdkId_2",
        key: "Content Management",
      },
      {
        id: "sdkId_3",
        key: "Responsive Web Design",
      },
      {
        id: "sdkId_4",
        key: "UI / UX",
      },
      {
        id: "sdkId_5",
        key: "Web Development",
      },
      {
        id: "sdkId_6",
        key: "E-Commerce Development",
      },
    ],
    redirectTo: "/",
  },
  {
    id: "sdId_2",
    URL: mobile,
    path: "/services/mobile-app-development",

    title: "Mobile App Development",
    desc: "Whether it's an iOS or Android app, we deliver seamless user experiences and functionalities tailored to your specific needs.",
    keys: [
      {
        id: "sdkId_1",
        key: "Web Design",
      },
      {
        id: "sdkId_2",
        key: "Content Management",
      },
      {
        id: "sdkId_3",
        key: "Responsive Web Design",
      },
      {
        id: "sdkId_4",
        key: "UI / UX",
      },
      {
        id: "sdkId_5",
        key: "Web Development",
      },
      {
        id: "sdkId_6",
        key: "E-Commerce Development",
      },
    ],
    redirectTo: "/",
  },
  {
    id: "sdId_3",
    URL: ui,
    title: "UX/UI Design",
    path: "/services/ui-ux",

    desc: "Our skilled graphic designers craft compelling visuals that elevate your brand identity and leave a lasting impression.",
    keys: [
      {
        id: "sdkId_1",
        key: "Web Design",
      },
      {
        id: "sdkId_2",
        key: "Content Management",
      },
      {
        id: "sdkId_3",
        key: "Responsive Web Design",
      },
      {
        id: "sdkId_4",
        key: "UI / UX",
      },
      {
        id: "sdkId_5",
        key: "Web Development",
      },
      {
        id: "sdkId_6",
        key: "E-Commerce Development",
      },
    ],
    redirectTo: "/",
  },
  {
    id: "sdId_4",
    URL: dm,
    path: "/services/digital-marketing",

    title: "Digital Marketing",
    desc: " From SEO and social media marketing to email marketing and paid advertising, we create effective campaigns that deliver measurable results.",
    keys: [
      {
        id: "sdkId_1",
        key: "Web Design",
      },
      {
        id: "sdkId_2",
        key: "Content Management",
      },
      {
        id: "sdkId_3",
        key: "Responsive Web Design",
      },
      {
        id: "sdkId_4",
        key: "UI / UX",
      },
      {
        id: "sdkId_5",
        key: "Web Development",
      },
      {
        id: "sdkId_6",
        key: "E-Commerce Development",
      },
    ],
    redirectTo: "/",
  },
  {
    id: "sdId_5",
    URL: branding,
    path: "/services/branding",

    title: "Branding",
    desc: "We develop data-driven digital marketing strategies to increase brand awareness, drive qualified leads, and ultimately boost your conversions.",
    keys: [
      {
        id: "sdkId_1",
        key: "Web Design",
      },
      {
        id: "sdkId_2",
        key: "Content Management",
      },
      {
        id: "sdkId_3",
        key: "Responsive Web Design",
      },
      {
        id: "sdkId_4",
        key: "UI / UX",
      },
      {
        id: "sdkId_5",
        key: "Web Development",
      },
      {
        id: "sdkId_6",
        key: "E-Commerce Development",
      },
    ],
    redirectTo: "/",
  },
  {
    id: "sdId_6",
    URL: graphic,
    path: "/services/graphic-design",

    title: "Graphic Designing",
    desc: "We specialize in logo design, branding materials, social media graphics, and more, ensuring your visual communication is on point.",
    keys: [
      {
        id: "sdkId_1",
        key: "Web Design",
      },
      {
        id: "sdkId_2",
        key: "Content Management",
      },
      {
        id: "sdkId_3",
        key: "Responsive Web Design",
      },
      {
        id: "sdkId_4",
        key: "UI / UX",
      },
      {
        id: "sdkId_5",
        key: "Web Development",
      },
      {
        id: "sdkId_6",
        key: "E-Commerce Development",
      },
    ],
    redirectTo: "/",
  },
];

export const consultantData = {
  content: [
    {
      id: "cdcId_1",
      title: "Consultation",
      desc: "We discuss your project goals, need, and budget.",
    },
    {
      id: "cdcId_2",
      title: "Propasal and agreement",
      desc: "We Present a tailored proposal outlining the scope of work and timeline.",
    },
    {
      id: "cdcId_3",
      title: "Project Kick Off",
      desc: "We assign a dedicated team and begin inital planning.",
    },
    {
      id: "cdcId_4",
      title: "Project Execution",
      desc: "Our team works diligently on your projects, keeping your informed throughout",
    },
    {
      id: "cdcId_5",
      title: "Delivery and Revisions",
      desc: "We Present the final project and addess any necessary revisions.",
    },
    {
      id: "cdcId_6",
      title: "Ongoing Support",
      desc: "We Offer ongoing maintanance and support as needed.",
    },
  ],
  image: [
    {
      id: "cdId_1",
      URl: consultation2,
    },
    {
      id: "cdId_2",
      URl: consultation1,
    },
    {
      id: "cdId_3",
      URl: consultation2,
    },
    {
      id: "cdId_4",
      URl: consultation3,
    },
    {
      id: "cdId_5",
      URl: consultation4,
    },
    {
      id: "cdId_6",
      URl: consultation4,
    },
  ],
};
