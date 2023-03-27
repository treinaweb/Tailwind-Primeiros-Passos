/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily:{
        'inter': ['Inter', 'sans-serif']
      },
      backgroundImage:{
        'fundo_marrom': "url('../img/fundo_marrom.jpg')",
        'cachorro': "url('../img/img_cachorro.jpg')"
      }
    },
  },
  plugins: [],
}
