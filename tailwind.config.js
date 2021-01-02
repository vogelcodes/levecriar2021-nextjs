module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'serif': ['Roboto Slab', 'Georgia', 'ui-serif'],
      'sans': ['Glass Antiqua',  'ui-sans']
    },
    extend: {
      colors: {
        bege: '#FCF2EB',
        roxo: '#AD88AF',
        verde: '#89B0AE',
        texto: '#666349'
      }
    },
    screens: {
      'xs': '460px',
      'sm': '644px',
      // => @media (min-width: 640px) { ... }

      'md': '800px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
