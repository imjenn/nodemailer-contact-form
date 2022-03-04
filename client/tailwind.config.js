module.exports = {
  mode: 'jit',
  important: true,
  content: [
    './src/**/*.jsx', '.public/index.htmls'
  ],
  theme: {
    screens: {
      'xs': '250px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}
