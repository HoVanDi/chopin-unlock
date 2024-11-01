/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color-bg": "#0B0E18",
        "gray-color": "#423ef41a",
        borderColor: {
          DEFAULT: "#313856",
        },
        fontFamily: {
          anuphan: ["Anuphan", "sans-serif"],
        },
      },
      spacing: {
        "70px": "70px", // custom spacing light
      },
    },
  },
  variants: {},
  plugins: [],
};
