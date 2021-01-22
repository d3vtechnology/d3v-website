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
    },
    textColor: theme => theme('colors'),
    textColor: {
      'telegram': '#38A3E6',
      'whatsapp': '#06d755',
      'white': '#fff'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
