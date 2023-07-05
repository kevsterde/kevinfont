/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color1' : '#1A120B',
        'color2' : '#3C2A21',
        'color3' : '#D5CEA3',
        'color4' : '#E5E5CB',
      }
    },
  },
  plugins: [],
}

