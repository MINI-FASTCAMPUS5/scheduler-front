export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'cal-w': 'repeat(7, minmax(100px, 200px))'
      },
      gridTemplateRows: {
        'cal-h': '30px repeat(6, minmax(150px, 1fr))'
      }
    }
  },
  plugins: []
}
