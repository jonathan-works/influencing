/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
    theme: {
      extend: {
        colors: {
          softLavenderMist: '#F2F3FB',
          coralFlame: '#E3563E',
          deepLavender: '#9B5B9E',
          softBlueGray: '#EAEBEF',
          graystone: '#646464',
          softWhite: '#F5F5F7',
          tealForest: '#3C887A',
          electricIndigo: '#4B31E9',
          royalBlue: '#2458DF',
          burntCoral: '#E4553B',
          lightGray: '#C9C9C9',
          brightBlue: '#4282F6',
          mediumGray: '#999999'
        },
        boxShadow: {
          'card': '0 35px 60px -40px rgba(0, 0, 0, 0.3)',
        }
      },
    },
    plugins: ['~/plugins/fontawesome.js'],
  }