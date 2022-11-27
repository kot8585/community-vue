/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        postColor: '#D4E5F4',
        bgColor: '#a5d0f5',
        darkGrayColor: '#6c6e70'
      }
    },
  },
  plugins: [],
}
