/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        heroLarge: 'url("/src/assets/images/HeroImagelg.png")',
      },
    },
  },
  plugins: [],
}
