/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        navbar: "1fr 4fr .6fr",
      },
      letterSpacing: {
        normal: "2px",
      },
    },
  },
  plugins: [],
};
