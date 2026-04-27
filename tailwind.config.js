/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        vol : ["Vollkorn", "serif"]
      },
      colors: {
        c1: "#00413D",
        c2: "#E5745D",
      },
      maxWidth: {
        container: "1320px",
      },
   backgroundImage: {
  banner: "url('/src/assets/banner.jpg')",
  Service: "url('/src/assets/Ani1.png')"
},
keyframes:{
   rotateBorder: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
            shake: {
      '0%, 100%': { transform: 'translateX(0)' },
      '25%': { transform: 'translateX(-3px)' },
      '50%': { transform: 'translateX(3px)' },
      '75%': { transform: 'translateX(-3px)' },
    },
},
 animation: {
        rotateBorder: 'rotateBorder 1s linear infinite',
         shake: 'shake 0.4s ease-in-out',
      },
      
},
 
  },
  plugins: [],
}

