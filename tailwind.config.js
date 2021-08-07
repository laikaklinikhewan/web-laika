module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pinkHeader': "url('/assets/PinkHeader.png')"
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
        'button': '#FFE4B1',
        'staf':'#FFEAEA'
      }),
      backgroundSize: {
        'screen': '100vw',
        '100%': '100%'
      },
      fontSize:{
        base:['18px'],
        sm:['14px'],
        tn:['10px'],
        button:['24px']
      },
      textColor:{
        'media':'#c0c0c0',
        'mediaHover': '#8e1e74'
      },
      boxShadow: {
        'roundBtn': 'inset 0px 6px 2px rgba(0, 0, 0, 0.3);'
      },
      dropShadow: {
        'roundBtn': '0px 6px 4px rgba(0, 0, 0, 0.25)'
      },
      height: {
        nav: '141px',
        pinknav: '126px',
        logo: '65px',
        ig: '23px',
        igt: '16px',
        mail: '20px',
        mailt: '15px',
        button: '54px',
        '38': '9.5rem',
        photo: '240px',
        cover: '100vw'
      },
      width: {
        logo: '65px',
        ig: '23px',
        igt:'16px',
        mail: '20px',
        mailt: '15px',
        button: '166px',
        tbutton: '140px',
        photo: '180px'
      },
      margin: {
        xnav: '8.119vw',
        ynav: '22px',
        xnavmin: '7vw',
        xmenu: '139.68px'
      },
      padding: {
        button: '13px',
        tbutton: '11px'
      }
    },
    fontFamily:{
      'js':['"Josefin Sans"'],
      'ls':['"Londrina Solid"']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
