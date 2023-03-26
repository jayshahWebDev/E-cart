/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#ffd814",
        blue: "#2874f0",
        shimmerColor: "#f5f5f5",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        tablet: "481px",
        laptop: "769px",
        desktop: "1024px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
