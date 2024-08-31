/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'purple': '#8860D0',
        'dark-blue-1': '#5680E9',
        'dark-blue-2': '#5AB9EA',
        'dark-blue-3': '#84CEEB',
        'pink':'#C1C8E4',
        'black-1':'#222629',
        'black-2': '#474B4F',
        'black-3': '#19181A',
      },

    },
  },
  plugins: [

  ],
}
