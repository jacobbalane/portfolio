/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      spacing: {
        side: "12.5%",
      },
      fontSize: {
        "1xs": ["10px", "12px"],
      },
    },
  },
  plugins: [],
};
