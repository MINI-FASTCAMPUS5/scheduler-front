export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '1080px',
      lg: '1280px'
    },
    extend: {
      gridTemplateColumns: {
        'cal-frame-w': 'minmax(150px, 250px) 1fr',
        'cal-w': 'repeat(7, minmax(50px, 150px))'
      },
      gridTemplateRows: {
        'cal-h-13': '30px repeat(6, 130px)',
        'cal-h-10': '30px repeat(6, 100px)',
        'cal-h-8': '30px repeat(6, 80px)'
      }
    }
  },
  plugins: []
}
