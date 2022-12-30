/** @type {import('tailwindcss').Config} */

const {screens} = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens:{
      'xxsm': '340px',
      'xsm': '480px',
      ...screens
    },
    extend: {},
  },
  plugins: [],
}
