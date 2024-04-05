/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'thunder': ['Thunder'],
        'schabo': ['Schabo'],
        'zallord':['Zallord'],
      },
      colors:{
        'ivory':'#E6E6FA',
        'primary':'#00A8CC',
        'dark':'#231F20',
        'greyText':'#3F4755',
      },
      borderRadius:{
        '4xl':'38px',
      }
    },
  },
  plugins: [],
}