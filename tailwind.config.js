/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'meetup-blue': '#00455D',
        'meetup-purple': '#1F24CC',
      },
      inset: {
        '100': '26rem',
        '101': '32rem',
        '102': '42rem',
      },
      width: {
        '97': '50rem',
        '98': '60rem'
      },
      screens: {
        xll: '1440px',
      },

    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      visibility: ['group-hover']
    },
  },
  plugins: [],
}
