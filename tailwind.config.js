const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.vue', './nuxt.config.{js,ts}'],
  theme: {
    extend: {
      colors: {
        'pale-yellow': '#f9d16a',
        'pale-ocean': '#2a687a',
        'pale-green': '72a25e',
        'new-gray': '#c3b49e',
        'neo-dark': '#3c3434',
        'light-yellow': '#f9d409',
      },
      boxShadow: {
        neo: `5px 5px 0 0 black`,
      },
      fontFamily: {
        inco: ['Inconsolata', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        18: '18 px',
      },
    },
  },
  plugins: [],
}
