/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          600: '#2BD6BE',
          blue : "#1D2864",
          sky: '#2AD2C1'
        },
       
      },
      animation: {
        "fade-in": "fadeIn  ease-in-up",
        "fade-in-up": "fadeInUp  ease-in-up",
        "slide-left": "slideLeft  ease-in-up",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 1 },
          "100%": { opacity: 1.5 },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: 0, transform: "translateX(-10px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
    },

  },
  plugins: [],
}

}