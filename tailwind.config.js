/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        right: "0px 10px 10px #131313",
      },
      backgroundPosition: {
        "left-1": "1rem",
      },
      backgroundImage: {
        search: "url('/src/components/img/search.svg')",
      },
      colors: {
        red: "#ff0000",
        pikedDark: "#131313",
      },
    },
  },
  plugins: [],
};
