/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#040914",
        secondary: "#F4F4F4",
        "accent-1": "#F31982",
        "accent-2": "#AEB2BA",
      },
      fontSize: {
        "2xs": ["10px", "12px"],
        "9xl": ["7rem", "1"],
      },
      height: {
        "screen-calc": "calc(100vh-8rem)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".h-screen-calc": {
          height: "calc(100vh - 8rem)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
