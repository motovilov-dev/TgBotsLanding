/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': {
          '900': '#2D0A4E',
          '950': '#1A0632',
        },
        'gold': {
          '300': '#FFD380',
          '400': '#FFBB38',
          '500': '#F0A500',
          '600': '#D69000',
          '700': '#B37800',
        },
        'bg': {
          'primary': '#130426',
          'secondary': '#08021A',
        }
      },
      fontFamily: {
        'main': ['Montserrat', 'sans-serif'],
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
} 