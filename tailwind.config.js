const colors = require('tailwindcss/colors')


module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      bgColor:"#f9fafc",
      btnColor:"#4263eb",
      primary:{
        DEFAULT:"#4263eb",
        hover:"#2342c0",
        disabled:"#4264eb80"
      },
      secondary:{
        DEFAULT:"#7048e8",
        hover:"5028c6",
        disabled:"5028c6"
      },
      pink:"#51cf66",



      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
