module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      'article': '#C600A6'
    }),
    extend: {
      backgroundImage: theme => ({
        'pinkHeader': "url('/assets/PinkHeader.png')",
        'article': "url('/assets/bck2.png')"
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
        'button': '#FFE4B1',
        'staf':'#FFEAEA',
        'comment':'#FFE9E9'
      }),
      backgroundSize: {
        'screen': '100vw',
        '100%': '100%'
      },
      fontSize:{
        base:['18px'],
        sm:['14px'],
        tn:['10px'],
        button:['24px'],
        title:['56px'],
        content:['18px'],
        title2:['40px']
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
        photo: '180px',
        artNav: '85vw',
        artPrev: '70vw',
        dividerArt: '75%',
        viewArt: '60%',
        commentArt: '80vw',
        oneComment: '80%',
        preview:'192px'
      },
      margin: {
        xnav: '8.119vw',
        ynav: '22px',
        xnavmin: '7vw',
        xmenu: '139.68px'
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
