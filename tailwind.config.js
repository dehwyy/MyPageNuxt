const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.vue', './nuxt.config.{js,ts}'],
  theme: {
    extend: {
      colors: {
        'pale-yellow': '#ffd791',
        'pale-ocean': '#99d8e9',
        'new-gray': '#c3b49e',
        'neo-dark': '#3c3434',
        'light-yellow': '#f9d409',
        'pale-pink': '#ffa9b0',
        'pale-green': '#b7feb8',
        'pale-violet': '#c7bfe8',
      },
      boxShadow: {
        neo: `10px 0.5rem 0 0 black`,
        wh: `10px 0.5rem 0 0 #ffa9b0`,
      },
      fontFamily: {
        inco: ['Inconsolata', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        18: '18 px',
      },
      screens: {
        vsm: { max: '450px' },
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
  },

  plugins: [],
}
