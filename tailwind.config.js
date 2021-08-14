const colors = require('tailwindcss/colors')


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      bgColor:"#f9fafc",
      btnColor:"#4263eb",
      primary:{
        DEFAULT:"#4263eb",
        hover:"#2342c0",
        disabled:"#4264eb80",
        light:"#5472ED"
      },
      secondary:{
        DEFAULT:"#7048e8",
        hover:"5028c6",
        disabled:"5028c6"
      },
      pink:"#F784AD",
      success:{
        DEFAULT:"#2BBB94"
      },
      danger:"#FF2052",
      purple:{
        DEFAULT:"#7048E8",
        hover:"#F4F1FD"
      },



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
