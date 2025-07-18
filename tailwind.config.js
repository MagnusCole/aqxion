/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        greenValue: '#34D399',  // Para value/crecimiento
        blueTrust: '#007AFF',   // Para confianza/títulos
        goldCTA: '#FFD700',     // Para CTAs/upside
      },
      screens: {
        sm: '640px',
        md: '768px', 
        lg: '1024px'
      },
    },
  },
  plugins: [],
}