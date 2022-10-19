module.exports = {
  content: ["./mega-website/**/*.{html,js}"],
  theme: {
    screens:{
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    container: {
      center: 'true',
      padding: '1rem'
    },
    extend: {
      width: {
        '97': '35.5rem',
        '100': '50rem',
        '101': '70rem'
      }
    },
  },
  plugins: [],
}
