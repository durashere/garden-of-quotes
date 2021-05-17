module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      secular: ['Secular One', 'sans-serif'],
      berk: ['Berkshire Swash', 'cursive'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
