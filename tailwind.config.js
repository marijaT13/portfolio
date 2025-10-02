/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'], // Override default sans
        heading: ['Poppins', 'Arial', 'sans-serif'], // Custom alias
      },
       keyframes: {
        'pulse-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        'pulse-down': 'pulse-down 1s infinite',
      },
    },
  },
  plugins: [],
};
