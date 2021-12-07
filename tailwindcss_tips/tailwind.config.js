module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
      },
    },
  },
  variants: {
    extend: { 
      width: ["responsive", "hover", "focus"] , 
      height: ["responsive", "hover", "focus"] ,
      margin: ["responsive", "hover", "focus"] ,
    },
  },
  plugins: [],
}
