module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      'article': '#C600A6',
      'spotify': '#1DB954',
      'lightPink': '#FFBDD8'
    }),
    extend: {
      backgroundImage: theme => ({
        'pinkHeader': "url('/assets/PinkHeader.webp')",
        'article': "url('/assets/bck2.webp')"
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
        'button': '#FFE4B1',
        'staf':'#FFEAEA',
        'comment':'#FFE9E9',
        'spotify':'#1ED760',
        'lightPink': '#FFBDD8'
      }),
      backgroundSize: {
        'screen': '100vw',
        '100%': '100%'
      },
      fontSize:{
        base:['18px'],
        sm:['14px'],
        tn:['10px'],
        spotify:['11px'],
        button:['24px'],
        title:['56px'],
        content:['18px'],
        title2:['40px']
      },
      textColor:{
        'media':'#c0c0c0',
        'mediaHover': '#8e1e74',
        'purp': '#c8217b'
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
        photo: '260px',
        cover: '100vw',
        preview: '120px'
      },
      width: {
        logo: '65px',
        ig: '23px',
        igt:'16px',
        mail: '20px',
        mailt: '15px',
        button: '166px',
        tbutton: '140px',
        photo: '195px',
        artNav: '85vw',
        artPrev: '70vw',
        dividerArt: '75%',
        viewArt: '60%',
        commentArt: '80vw',
        oneComment: '80%',
        preview:'192px',
        160: '40rem'
      },
      margin: {
        xnav: '8.119vw',
        ynav: '22px',
        xnavmin: '7vw',
        xmenu: '139.68px',
        spotify: '-0.075rem'
      },
      padding: {
        button: '13px',
        tbutton: '11px',
        oembed: '56.25%'
      },
      inset: {
        'tight': '65%',
        '0%': '0%'
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
