/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffff",
        dark: "#2B2B2B",
        para: "#858584",
        secondary: "#A259FF",
        links: "#cccccc",
        green: "#24FF00",
        blue: "rgba(5, 0, 255, 0.33);",
        grey: "#3b3b3b"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        clash_display: ["Clash Display", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "1070px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};