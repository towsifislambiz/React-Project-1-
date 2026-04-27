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
  Service: "url('/src/assets/Ani1.png')",
  Aimg1: "url('/src/assets/Aimg1.png')",
  Aimg2: "url('/src/assets/Aimg2.jpg')",
  Aimg3: "url('/src/assets/Aimg3.jpg')",
  Pimg1: "url('/src/assets/Pimg1.png')",
  Pimg2: "url('/src/assets/Pimg2.jpg')",
  Pimg3: "url('/src/assets/Pimg3.jpg')",
  Wimg1: "url('/src/assets/Wimg1.png')",
  Wimg2: "url('/src/assets/Wimg2.jpg')",
  Wimg3: "url('/src/assets/Wimg3.jpg')",
  Wimg4: "url('/src/assets/Wimg4.jpg')",
  Timg1: "url('/src/assets/Timg1.jpg')",
  Timg2: "url('/src/assets/Timg2.jpg')",
  Cimg: "url('/src/assets/Cimg.jpg')",
  Bimg1: "url('/src/assets/Bimg1.jpg')",
  Bimg2: "url('/src/assets/Bimg2.jpg')",
  Bimg3: "url('/src/assets/Bimg3.jpg')",
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

