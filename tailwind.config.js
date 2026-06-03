/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "navy": "#1a3a5c",
        "navy-dark": "#0f2744",
        "navy-light": "#2a5082",
        "sdgs-red": "#e5243b",
        "sdgs-gold": "#dda63a",
      },
      fontFamily: {
        heading: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Source Sans 3'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
