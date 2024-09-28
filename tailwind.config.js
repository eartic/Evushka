/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        magenta: {
          500: '#d74399', // Custom magenta color
        },
      },
    },
  },
  darkMode: 'class', // Enable class-based dark mode
  plugins: [],
});
