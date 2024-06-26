/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        banner: "220%",
      },
      maxWidth: {
        remembering: "750px",
      },
      height: {
        bannerContainer: "1050px",
        header: "12rem",
      },
      fontSize: {
        menu: "17px",
        min: "10px",
      },
      inset: {
        60: "63%",
      },
      gridTemplateColumns: {
        navbar: "1fr 6fr 1.7fr",
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
      letterSpacing: {
        remembering: "2px",
        menu: "2px",
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
