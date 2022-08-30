/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      height: {
        '92': '92vh', 
      }, 
      width: {
        '75': '75vh',
      }
    },
  },
  plugins: [],
}
