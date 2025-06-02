/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary: '#002B5B',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};