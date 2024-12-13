/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primary: "#fea928",
        secondary: "#ed8900",
      },
      container: {
        center: true ,
        padding:{
          DEFAULT: "1rem" ,
          sm: "3rem" ,
        } ,
      } ,
      dropShadow: {
        custom: '1px 1px 1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

