/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neonBlue': '#04D9FF',
        'customBlue': '#20d0f6',
        'webBlue':'#03C8FD',
        'neonYellow':'#F2EA02',
        'neonRed':'#FF3131',
        'neonGreen':'#39FF14',
        'neonPurple':'#B026FF',
         primary: '#171932',
         accent: '#164E35',
      },
      transitionProperty: {
        'underline': 'transform',
      },
      backgroundImage: {
        'custom-gradient': 'radial-gradient(circle at top left, #164E35, transparent), radial-gradient(circle at middle right, #164E35, transparent), radial-gradient(circle at bottom left, #164E35, transparent)',
      },
    },
  },
  plugins: [],
}
