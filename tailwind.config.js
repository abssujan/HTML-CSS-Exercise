/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'meetup-blue': '#00455D',
        'meetup-purple': '#1F24CC',
      }
    },
  },
  plugins: [],
}
