/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor : {
        'primary': 'black'
      }
    },
    fontFamily: {
      'hero-font' : 'Sriracha'
    }
  },
  plugins: [],
}

