module.exports = {
  content: ['./src/**/*.{html,js}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBackground: '#121212',
        pandaGreen: '#6c9e6d',
        pandaWhite: '#f2f2f2',
      },
    },
  },
  plugins: [],
}
