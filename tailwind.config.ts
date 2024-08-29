import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-custom":
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(205,89,89,1) 53%, rgba(255,239,0,1) 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-grid": "url('public/bg.jpg')",
      },
      textColor: {
        primary: "var(--background-primary)",
        purple: "#673AB7",
      },
    },
  },
  plugins: [],
};
export default config;
