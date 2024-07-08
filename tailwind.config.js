/** @type {import('tailwindcss').Config} */
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
      },
    },
  },
  plugins: [],
};
