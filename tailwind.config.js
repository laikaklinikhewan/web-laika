module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      js:['Josefin Sans']
    },
    fontSize:{
      base:['1.249vw'],
      sm:['0.972vw']
    },
    textColor:{
      'media':'#c0c0c0'
    },
    extend: {},
    height: {
      nav: '9.785vw',
      logo: '6.731vw',
      info: '30px',
      home: '32px'
    },
    width: {
      logo: '6.731vw',
      screen: '100vw'
    },
    margin: {
      xnav: '8.119vw',
      ynav: '1.654vw',
      xmenu: '7.275vw'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
