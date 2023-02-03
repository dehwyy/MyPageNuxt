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
        neo: `1rem 1rem 0 0 #3c3434`,
      },
    },
  },
  plugins: [],
}
