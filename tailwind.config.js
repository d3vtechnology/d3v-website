module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home-section': "url('/background.svg')",
      })
    },
    width: {
      '90': '90%',
    },
    fontFamily: {
      'body': ['Calistoga'],
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
