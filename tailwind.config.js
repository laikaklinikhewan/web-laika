module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      js:['Josefin Sans']
    },
    fontSize:{
      base:['18px'],
      sm:['14px']
    },
    textColor:{
      'media':'#c0c0c0'
    },
    extend: {},
    height: {
      nav: '141px',
      logo: '100px'
    },
    height:{
      ig: '23px',
      mail: '20px'
    },
    width: {
      logo: '100px',
      screen: '100vw',
      ig: '23px',
      mail: '20px'
    },
    margin: {
      xnav: '8.119vw',
      ynav: '30px',
      xmenu: '139.68px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
