/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        bannerContainer: "955px",
      },
      fontSize: {
        min: "10px",
      },
      inset: {
        60: "63%",
      },
      gridTemplateColumns: {
        navbar: "1fr 6fr 1.5fr",
        ballonCard: "2fr 1fr",
      },
      letterSpacing: {
        normal: "2px",
      },
      borderColor: {
        modal: "#3C3C3C",
        input: "#434343",
      },
      backgroundColor: {
        input: "#181818",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
