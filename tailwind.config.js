const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    screens: {
      'xs': {'min': '300px', 'max': '476px'},
      'sm': {'min': '477px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1122px'},
      'lg': {'min': '1123px'},
    },
    extend: {
      colors: {
        primary: '#002BC2',
        secondary: '#2C3B6F',
        // Add more custom colors as needed
      },
      fontFamily: {
        'Inter': ['Inter', 'Jura'],
        // Add more custom font families
      },
      skew: {
        '360': '360deg',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        // Add more custom spacing utilities
      },
      fontSize: {
        '2xl': '1.5rem',
        '4xl': '2.25rem',
        // Add more custom font sizes
      },
    },
  },
  plugins: [],
};
