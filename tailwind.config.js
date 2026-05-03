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
        vol: ["Vollkorn", "serif"],
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
        Keyimg1: "url('/src/assets/Keyimg1 (1).png')",
        Abimg1: "url('/src/assets/Abimg1.png')",
        Apimg: "url('/src/assets/Apimg.png')",
        Awimg: "url('/src/assets/Awimg.png')",
        Atimg1: "url('/src/assets/Atimg1.png')",
        Atimg2: "url('/src/assets/Atimg2.png')",
        Acimg1: "url('/src/assets/Acimg1.png')",
        Bv: "url('/src/assets/Bv.png')",
      },

      keyframes: {
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
        Brotate: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-400px)' },
        },
        siring: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(120px)' },
        },
        siring2: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(-120px)' },
        },
        plus: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(-120px)' },
        },
        Tb: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(650px)' },
        },
        Tb2: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(353px)' },
        },
        Tb3: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(609px)' },
        },
        Tb4: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(220px)' },
        },
        Tb5: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(280px)' },
        },
        Bt: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-609px)' },
        },
        Bt2: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-220px)' },
        },
        rotate1: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },

      animation: {
        rotateBorder: 'rotateBorder 1s linear infinite',
        shake: 'shake 0.4s ease-in-out',
        Brotate: 'Brotate 3s linear infinite',
        Tb: 'Tb 3s linear infinite',
        Tb2: 'Tb2 3s linear infinite',
        Tb3: 'Tb3 3s linear infinite',
        Tb4: 'Tb4 3s linear infinite',
        Tb5: 'Tb5 3s linear infinite',
        Bt: 'Bt 3s linear infinite',
        Bt2: 'Bt2 3s linear infinite',
        siring: 'siring 3s linear infinite',
        siring2: 'siring2 3s linear infinite',
        plus: 'plus 3s linear infinite',
        rotate1: 'rotate1 3s linear infinite',
      },
    },
  },
  plugins: [],
}