const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#00daa0',
      'text': '#203a39',
      'white': '#fff',
      'gray': '#78909C',
      'black': '#000',
      'green': colors.green,
      'red': colors.red
    },
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100px)' },
          '100%': { transform: 'translateX(0px)' },
        }
      },
      animation: {
        'slide': 'slide 0.5s ease',
      }
    }
  },
  plugins: [
  ],
}
