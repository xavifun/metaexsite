/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#274484',
        secondary: '#032940',
        accent: '#129a7b',
      },
      fontFamily: {
        sans: ['"Josefin Sans"', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
};