import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/Landing.jsx";
import RootLayout from "./pages/layouts/RootLayout.jsx";
import { Provider } from "react-redux";
import store from "./store/store.jsx";
import AboutPage from "./pages/About/About.jsx";
import ServicePage from "./pages/Service/Service.jsx";
import PortfolioPage from "./pages/Portfolio/Portfolio.jsx";
import BlogPage from "./pages/Blog/Blog.jsx";
import TeamPage from "./pages/Team/Team.jsx";
import UiUx from "./pages/Service/pages/UiUx/UiUx.jsx";
import FramerMotion from "./framer-motion/FramerMotion.jsx";
import WebDesignDev from "./pages/Service/pages/WebDesignDev/WebDesignDev.jsx";
import Branding from "./pages/Service/pages/Branding/Branding";
import GraphicDesign from "./pages/Service/pages/GraphicDesign/GraphicDesign";
import DigitalMarketing from "./pages/Service/pages/DigitalMarketing/DigitalMarketing";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "services",
        children: [
          {
            index: true,
            element: <ServicePage />,
          },
          {
            path: "web-design-and-development",
            element: <WebDesignDev />,
          },
          {
            path: "ui-ux",
            element: <UiUx />,
          },
          {
            path: "mobile-app-development",
            element: <ServicePage />,
          },
          {
            path: "branding",
            element: <Branding />,
          },
          {
            path: "graphic-design",
            element: <GraphicDesign />,
          },
          {
            path: "digital-marketing",
            element: <DigitalMarketing />,
          },
        ],
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "team",
        element: <TeamPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FramerMotion>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </FramerMotion>
  </React.StrictMode>
);
