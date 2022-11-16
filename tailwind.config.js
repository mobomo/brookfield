module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    keyframes: {
      coverLayer: {
        "0%": {
          opacity: "0.5",
          transform: "translateY(20%) scale(0.6)",
        },
        "50%": {
          opacity: "0.8",
          transform: "translateY(30%) scale(0.8)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0) scale(1)",
        },
      },
      layerOpacity: {
        "0%": {
          opacity: "0",
        },
        "100%": {
          opacity: "1",
        },
      }


    },
    animation: {
      "fade-in-down": "fade-in-down 0.5s ease-out",
      expand: "expand 1.5s ease-out",
      move: "move 2s ease-out",
      coverLayer: "coverLayer 0.75s ease-out",
      layerOpacity: "layerOpacity 2s ease-out",
    },



    screens: {

      'sm': '410px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1850px',
      // => @media (min-width: 1905px) { ... }

      '4xl': '2300px',
      // => @media (min-width: 2545px) { ... }
    },
    extend: {
      // margin: {
      //   '5px': '5px',
      //   '120px': '120px',
      // },
      colors: {
        // "brandblue": "#082c5c",
        "brandblue": "#002A4E",
        "lightBlue": "#96CFF1",

      },
      width: {
        "1/7": "14.2857143%",
        "2/7": "28%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        '100': '50em',
        '99': '45em',
        '98': '40em',
        '97': '35em',
        '975': '32.5em',
        '977': '30em',
        '9775': '27.5em',
        '9777': '25em',
        '70': '35em',
        '150': '75em',
      },
      maxWidth: {
        "1/7": "14.2857143%",
        "2/7": "28%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        '100': '50em',
        '99': '45em',
        '98': '40em',
        '97': '35em',
        '975': '32.5em',
        '977': '30em',
        '9775': '27.5em',
        '9777': '25em',
        '70': '35em',
        '150': '75em',
      },
      margin: {
        '100': '25rem',
        '120': '30rem',
          '130': '32.5rem',
        '140': '35rem',
        '150': '37.5rem',
        '160': '40rem',
        '180': '45rem',
          '190': '47.5rem',
        '200': '50rem',
         '210': '52.5rem',
        '220': '55rem',
        '240': '60rem',
        '250': '65rem',
        '260': '70rem',
        '270': '75rem',
      },
      fontFamily: {
        'custom': ['ubuntu-mono', 'Ubuntu', 'sans-serif'],
        'playfair': ['playfair-display', 'serif'],
        'opensans': ['open-sans', 'sans-serif'],
      },
      fontSize: {
        'xs': '.70rem',
        'ms': '.8rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '2.5xl': '1.65rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '4.5xl': '2.65rem',
        '4.75xl': '2.85rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      fontWeight: {
        'thin': 100,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'mediumplus': 530,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
    },
    // fontFamily: {
    //         'custom': ['playfair-display', 'sans-serif'],
    //     },
    plugins: [],
  },
};