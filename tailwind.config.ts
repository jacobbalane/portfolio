import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        outfit: "var(--font-outfit-regular)",
        outfitBold: "var(--font-outfit-bold)",
        spacemono: "var(--font-spacemono-regular)",
        spacemonoBold: "var(--font-spacemono-bold)",
      },
    },
  },
  plugins: [],
};
export default config;
