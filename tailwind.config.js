const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(card|ripple).js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'], // Override default sans
        heading: ['Poppins', 'Arial', 'sans-serif'], // Custom alias
      },
    },
  },
  plugins: [heroui()],
};
