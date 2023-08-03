export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    colors: (theme) => {
      return {
        ...theme.colors,
        main: '#6C27FF',
        point: '#FF00A5',
        wait: '#FFA800',
        confirm: '#00C2FF',
        white: '#FFFFFF',
        black: '#000000',
        hover: '#411b92',
        weekend: '#E5F2F6',
        weekday: '#F0FBFF',
        boxline: '#E9E9E9',
        boxbg: '#F4F3F3',
      }
    },
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
        '98vh': '98vh'
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwind-scrollbar-hide')]
}
