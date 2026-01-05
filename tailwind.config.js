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
      keyframes: {
        billow: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-10px)', rotate: '-3deg' },
        },
        'billow-rotated': {
          '0%, 100%': { transform: 'translateX(0) rotate(-25deg)' },
          '50%': { transform: 'translateX(-10px) rotate(-28deg)' },
        },
      },
      animation: {
        billow: 'billow 3s ease-in-out infinite',
        'billow-rotated': 'billow-rotated 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

