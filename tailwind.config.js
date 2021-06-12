const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.jsx', './src/**/*.js'],
  },
  theme: {
    colors: {
      bg_green: '#6ca464',
    },
    extend: {
      fontWeight: ['hover', 'focus'],
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
};
