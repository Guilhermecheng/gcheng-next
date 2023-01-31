/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
    },
    extend: {
      backgroundImage: {
        'dark-background':'url(/background_dark.png)',
        'white-background':'url(/background_white.png)',
      }
    },
  },
  plugins: [],
}
