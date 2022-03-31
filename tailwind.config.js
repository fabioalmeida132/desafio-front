const colors = require('tailwindcss/colors')

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  mode: 'jit',
  content: [
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./components/**/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      bgPrimary: '#EDF0F7',
      ...colors
    },
    container: {
      padding: {
        sm: '0.5rem',
        xl: '2rem',
        '2xl': '10rem',
      },
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
