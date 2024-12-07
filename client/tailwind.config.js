/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      }
    },
    screens: {
      sm: "350px",
      md: "680px",
      lg: "1024px"
    }
  },
  plugins: [],
}

