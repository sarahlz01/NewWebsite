/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'cream': '#FFFBF6',
        'rose': { 50: '#FFE7E7', 100: '#D1909D' },
        'blue': { 50: '#CDDFEC', 100: '#5D80B1', 150: '#20405E' },
        'gray': '#98979C',
        'black': '#342F35',
        'shutter-gray': '#DBD1CE',
      },
      fontFamily: {
        'sans': ['Instrument Sans', 'sans-serif'],
        'serif': ['Instrument Serif', 'serif'],
      },
    },
  },
  plugins: [],
}

