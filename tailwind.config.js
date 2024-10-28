/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{vue,html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
    },
    gridTemplateColumns: {
      '70/30': '70% 28%'
    }
  },
  plugins: [],
}
