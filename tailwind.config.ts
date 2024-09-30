import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      darkMode: "selector",
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent1: "var(--accent1)",
        accent2: "var(--accent2)",
        accent3: "var(--accent3)",
        accent4: "var(--accent4)",
      },
      fontFamily: {
        outfit: "var(--font-outfit-regular)",
        outfitBold: "var(--font-outfit-bold)",
        spacemono: "var(--font-spacemono-regular)",
        spacemonoBold: "var(--font-spacemono-bold)",
      },
      maxWidth: {
        mdMaxWidth: "50rem",
        lgMaxWidth: "80rem",
      },
      width: {
        progressWidth: "calc(calc(100% - 4rem) + 12px)",
      },
    },
  },
  plugins: [],
};
export default config;
