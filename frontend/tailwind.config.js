/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      boxShadow : {
        'skillBox' : '19px 19px 38px #006bb8, -19px -19px 38px #00bfff;'
      }
    },
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
    }
  },
  plugins: [],
}

