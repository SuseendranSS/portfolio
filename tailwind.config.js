/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#6c55e0',
        hoverPurple: '#6c55e0d1',
        dotPurple: '#6c55e075',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        roboto: ['Roboto Slab', 'serif'],
      },
      boxShadow: {
        'custom-purple': '0 10px 15px -3px rgba(108, 85, 224, 0.1), 0 4px 6px -2px rgba(108, 85, 224, 0.05)',
      },
    },
  },
  plugins: [],
}
