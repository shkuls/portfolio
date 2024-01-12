/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily :{
        'poppins' : ['Poppins' , 'sans-serif'],
        'microgramma' : ['Microgramma' , 'sans-serif'],
        
      }
      ,
      boxShadow : {
        'skillBox' : '29px 29px 72px #649cb3,-29px -29px 72px #a4feff;' ,

        'contBox' : '29px 29px 59px #362653,-29px -29px 59px #da9aff;'
      },
      
      background : {
       'grad' : 'linear-gradient(145deg, #7a56bb, #9267df);'
      }
    },
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
    }
    ,
  },
  plugins: [],
}

