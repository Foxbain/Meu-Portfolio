/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cor: {
          dark: '#272829',
          primary: '#fff6e0',
          secundary: '#d8d9da',
          button: '#61677a',
        },
      },
      fontFamily: {
        fontInter: ['Inter, sans-serif'],
      },
      screens: {
        tablet: { 'raw': '(max-width: 1024px)' },
      },
    },
  },
  plugins: [],
}