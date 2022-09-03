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
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000',
      'blue': {
        '50': '#008080',
        '100': '#174950'
      },
      'red': {
        '50': '#E60234',
        '100': '#8B0F32',
      },
      white: '#fff',
    },
  },
  plugins: [],
}
