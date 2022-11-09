module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brandblue": "#082c5c",

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
        '70': '35em',
        '150': '75em',
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