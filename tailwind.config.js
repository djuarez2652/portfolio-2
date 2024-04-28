/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'top-blue': '#000570',
        'bottom-blue': '#00011D',
        'dark-blue': '#0B1930',
        'bg': '#1D1D1F',
        'lighter-bg': '#303033',
        'white-blue': '#dce7ff',
        'light-purple': '#b389ff',
        'light-blue': '#4157ff',
        'light-pink': '#ffaaf8',
      },
      fontFamily: {
        // 'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'code': ['VT323', 'monospace']
      },
    },
  },
  plugins: [],
}

