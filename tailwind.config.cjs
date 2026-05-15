/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dbe8ff',
          200: '#bfd5ff',
          300: '#93b9ff',
          400: '#5f90ff',
          500: '#3d6bff',
          600: '#2949f2',
          700: '#2139d7',
          800: '#2132ae',
          900: '#222f89',
          950: '#171d52',
        },
      },
      borderRadius: {
        lg: '0.75rem',
        xl: '1rem',
      },
      boxShadow: {
        soft: '0 10px 30px -15px rgba(15, 23, 42, 0.35)',
        panel: '0 1px 2px 0 rgba(15, 23, 42, 0.06), 0 10px 24px -12px rgba(15, 23, 42, 0.18)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'swift-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

