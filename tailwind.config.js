/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./*.js",
    "./js/**/*.js",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
       fontFamily: {
        hylia: ['Hylia64'],
      },
      backgroundImage: {
        zelda: "url('../ressource/zelda_bg.gif')",
      },
    },
  },
  plugins: [],
}
