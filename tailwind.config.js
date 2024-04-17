/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: { 
        'platinum': { DEFAULT: '#d8e2dc', 100: '#26332b', 200: '#4b6656', 300: '#739781', 400: '#a6bdaf', 500: '#d8e2dc', 600: '#e1e8e4', 700: '#e8eeeb', 800: '#f0f4f1', 900: '#f7f9f8' }, 
        'champagne_pink': { DEFAULT: '#ffe5d9', 100: '#5f1e00', 200: '#be3c00', 300: '#ff651e', 400: '#ffa67c', 500: '#ffe5d9', 600: '#ffebe2', 700: '#fff0ea', 800: '#fff5f1', 900: '#fffaf8' }, 
        'pink': { DEFAULT: '#ffcad4', 100: '#5c0011', 200: '#b80022', 300: '#ff143f', 400: '#ff708a', 500: '#ffcad4', 600: '#ffd6de', 700: '#ffe0e6', 800: '#ffebee', 900: '#fff5f7' }, 
        'cherry_blossom_pink': { DEFAULT: '#f4acb7', 100: '#4a0a13', 200: '#941327', 300: '#de1d3a', 400: '#eb6478', 500: '#f4acb7', 600: '#f7bec6', 700: '#f9ced5', 800: '#fbdfe3', 900: '#fdeff1' }, 
        'mountbatten_pink': { DEFAULT: '#9d8189', 100: '#20191b', 200: '#413236', 300: '#614b51', 400: '#81636c', 500: '#9d8189', 600: '#b19aa0', 700: '#c4b3b8', 800: '#d8ccd0', 900: '#ebe6e7' } }
    },
  },
  plugins: [],
}
