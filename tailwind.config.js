/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#064F89',
      'secondary': '#3872A1',
      'gray': '#2C2C2C'
    },
    extend: {
      gridTemplateColumns: {
        // Custom fractions to mimic 1.4 columns etc.
        'custom': '1fr 1.4fr 1fr 1fr',
      },
      gridTemplateRows: {
        // Custom row heights
        'custom': '1fr 1.4fr 1fr',
      },
      backgroundImage: {
        'gradient-45': 'linear-gradient(45deg, #2D9EF7, #89CBFF)', // 40-degree custom gradient
      },
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
        'italianno': ['Italianno', 'cursive']
      }
    },
  },
  plugins: [],
}