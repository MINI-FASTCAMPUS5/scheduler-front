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
        'cal-frame-w': 'minmax(150px, 300px) 1fr',
        'cal-w': 'repeat(7, minmax(50px, 200px))'
      },
      gridTemplateRows: {
        'cal-h-13': '30px repeat(6, 120px)',
        'cal-h-10': '30px repeat(6, 100px)',
        'cal-h-8': '30px repeat(6, 80px)'
      },
      height: {
        '98vh': '98vh',
      }
    },
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'main-color': '#6C27FF',
      'point-color': '#FF00A5',
      'waiting-color': '#FFA800',
      'approval-color': '#00C2FF',
      'weekend-color': '#E5F2F6',
      'weekday-color': '#F0FBFF',
      'box-line-color': '#E9E9E9',
      'box-bg-color': '#F4F3F3',
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwind-scrollbar-hide')]
}
