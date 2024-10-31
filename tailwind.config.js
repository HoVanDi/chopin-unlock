/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#0B0E18",
        "color-dark": "#423ef41a",
        custom: {
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
