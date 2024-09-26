/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Noto: ["Noto Serif Display", "serif"],
      },
    },
  },
  plugins: [],
};
