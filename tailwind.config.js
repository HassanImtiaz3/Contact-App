/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray: "#5A5959",
        yelllow: "#FFEAAE",
        purple: "#49236d",
        orange: "#f682bc"
      }
    },
  },
  plugins: [],
}