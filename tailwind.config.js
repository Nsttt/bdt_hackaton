const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: {
    safeList: [],
    content: ['./index.html', './src/**/*.jsx', './src/**/*.js'],
  },
  theme: {
    colors: {
      bgcolor: '#301934',
      accentcolor: '#DE0F3F',
      white: '#ffffff',
    },
    extend: {
      fontWeight: ['hover', 'focus'],
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    // eslint-disable-next-line no-unused-vars
    backgroundImage: (theme) => ({
      'feature-image': "url('/public/Background.png')",
    }),
  },
  variants: {
    extend: {
      display: ['group-hover'],
      visibility: ['hover', 'focus'],
    },
  },
  plugins: [],
};
