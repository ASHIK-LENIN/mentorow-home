/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {

      'xl': { 'max': '1100px' },
      // => @media (max-width: 1279px) { ... }

      'xs': { 'max': '600px' },
      // => @media (max-width: 639px) { ... }
    },

    extend: {
      fontFamily: {
        'sans': ['Mulish', 'Helvetica', 'Arial', 'sans-serif']
      },

      animation:{
        "loop-scroll": "loop-scroll 20s  infinite linear"
      },

    keyframes: {
      "loop-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },

  },
},
plugins: [],
}

