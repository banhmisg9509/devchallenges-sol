/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        heroLarge: 'url("/src/assets/images/HeroImagelg.png")',
        herorMedium: 'url("/src/assets/images/HeroImagemd.png")',
        herorSmall: 'url("/src/assets/images/HeroImagesm.png")',
      },
    },
    screens: {
      xs: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
  },
  plugins: [],
}
