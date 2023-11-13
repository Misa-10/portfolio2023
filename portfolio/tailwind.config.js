/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#fbfaff',
        background: '#05010e',
        primary: '#b7a3f5',
        secondary: '#0c0425',
        accent: '#4917de',
        text2: '#808080',
        white: '#ffffff',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
