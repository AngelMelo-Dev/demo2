/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#faf7f4',
          100: '#f5ede4',
          200: '#e8d9c8',
          300: '#d9bfa3',
          400: '#c9a17d',
          500: '#b8875d',
          600: '#a9724f',
          700: '#8c5a42',
          800: '#734b3a',
          900: '#5f3f33',
        },
      },
    },
  },
  plugins: [],
}





