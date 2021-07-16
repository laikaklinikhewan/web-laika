module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      js:['Josefin Sans']
    },
    fontSize:{
      base:['18px'],
      sm:['14px'],
      tn:['10px'],
      button:['24px']
    },
    textColor:{
      'media':'#c0c0c0'
    },
    extend: {},
    height: {
      nav: '141px',
      logo: '100px',
      ig: '23px',
      igt: '16px',
      mail: '20px',
      mailt: '15px'
    },
    width: {
      logo: '100px',
      screen: '100vw',
      ig: '23px',
      igt:'16px',
      mail: '20px',
      mailt: '15px',
      button: '166px',
      tbutton: '140px'
    },
    margin: {
      xnav: '8.119vw',
      ynav: '30px',
      xnavmin: '7vw',
      xmenu: '139.68px'
    },
    padding: {
      '0.5':'0.125rem',
      '1':'0.25rem',
      button: '13px',
      tbutton: '11px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
