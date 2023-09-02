/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/.screens/Contacts.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#212121',
        secondary: '#6e7682',
        silver: '#c1c1c1',
        bright: '#fdfdfd',
        volcanicSand: '#3E3E44',
        payneGrey: '#3C3C40',
        lightGray: '#59606A',
        label: '#6e7682',
        bInput: '#e4e4e4',
        error: '#cb0505',
        brightGray: '#E8ECF1',
        greyRelief: '#E4E8EC',
        veryLightGrey: '#E8ECF0',
      },
    },
  },
  plugins: [],
};
