/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // SECTION 1
        primary: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
        // SECTION 2
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        mxl: "858px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        xxl: "1540px",
        // 2xl: "1535px"
      },
      colors: {
        // SECTION 1
        primeBlue: "#035DED",
        primary: "#FF7229",
        secondary: "#051B79",
        ternary: "#0D1536",
        quadra: "#575757",
        cement: "#F8F9FA",
        // SECTION 2
        bodyColor: "#0B1120",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
      },
      boxShadow: {
        shadowOne: "0px 9px 31px -6px rgba(0,0,0,0.3)",
      },
      scale: {
        115: "1.15",
        120: "1.2",
      },
    },
  },
  plugins: [],
});