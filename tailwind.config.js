/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        card: "#191919",
        secondary: "var(--background-secondary)",
      },
      backgroundImage: {
        "gradient-linear":
          "linear-gradient(90deg, rgba(232, 111, 58, 0) 0%, rgb(243, 87, 50) 53.5%, rgba(232, 111, 58, 0) 100%)",
        "gradient-radial":
          " radial-gradient(circle, rgba(51,49,49,1) 36%, rgba(46,44,44,1) 37%, rgba(52,50,50,1) 46%, rgba(128,122,121,1) 100%)",
        "gradient-radial-reverse":
          "radial-gradient(circle, rgba(128,122,121,1) 49%, rgba(46,44,44,1) 91%, rgba(52,50,50,1) 93%, rgba(51,49,49,1) 100%);",
        "gradient-radial-orange":
          "radial-gradient(64.5947% 78.6119% at 50.1416% 84.4193%, rgba(249, 172, 129, 0) 0%, rgb(255, 132, 63) 43.5%, rgba(241, 73, 36, 0) 100%)",
        "gradient-custom":
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(205,89,89,1) 53%, rgba(255,239,0,1) 100%)",
        "gradient-card":
          "linear-gradient(180deg,#191919 0%,rgba(26,26,26,0) 100%)",
      },
      textColor: {
        primary: "var(--text-primary-color)",
        secondary: "var(--text-secondary-color)",
        purple: "#673AB7",
      },
    },
  },
  plugins: [],
};
