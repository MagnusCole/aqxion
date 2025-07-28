/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Sistema Apple-like con fallbacks locales
        sans: [
          '-apple-system',
          'BlinkMacSystemFont', 
          'SF Pro Display',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
        heading: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'Segoe UI',
          'system-ui',
          'sans-serif'
        ],
        body: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Text',
          'Segoe UI',
          'system-ui',
          'sans-serif'
        ],
      },
      
      // Escala tipográfica Apple-like
      fontSize: {
        // Headings
        'hero': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', fontWeight: '600' }],
        'h2': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['clamp(1.25rem, 2.5vw, 1.5rem)', { lineHeight: '1.4', fontWeight: '500' }],
        
        // Body text
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.5' }],
        'body-sm': ['0.875rem', { lineHeight: '1.4' }],
        'caption': ['0.75rem', { lineHeight: '1.3' }],
      },
      colors: {
        // Paleta Peruana Refinada (Inspirada en bandera + Apple Design)
        peru: {
          // Rojo principal (bandera peruana)
          red: '#DC2626',          // Rojo vibrante pero no agresivo
          'red-light': '#EF4444',  // Para hovers
          'red-dark': '#B91C1C',   // Para textos/bordes
          
          // Dorado/Oro (prosperidad peruana)
          gold: '#F59E0B',         // Dorado cálido
          'gold-light': '#FCD34D', // Para acentos suaves
          'gold-dark': '#D97706',  // Para CTAs importantes
          
          // Verde (crecimiento sostenible)
          green: '#059669',        // Verde balance
          'green-light': '#10B981', // Para éxito/positivo
          'green-dark': '#047857', // Para confirmaciones
          
          // Neutros peruanos
          white: '#FFFFFF',
          cream: '#FFFBEB',        // Crema suave para fondos
        },
        
        // Sistema Apple-like
        primary: {
          DEFAULT: '#DC2626',      // Rojo peruano
          50: '#FEF2F2',
          100: '#FEE2E2',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          900: '#7F1D1D',
        },
        
        // Grises Apple
        gray: {
          50: '#FAFAFA',           // Casi blanco
          100: '#F5F5F7',          // Fondo sutil
          200: '#E5E5E7',          // Bordes suaves
          300: '#D1D1D6',          // Separadores
          500: '#86868B',          // Texto secundario
          600: '#6E6E73',          // Texto medio
          700: '#515154',          // Texto importante
          900: '#1D1D1F',          // Texto principal
        },
        
        // Semánticos
        success: {
          DEFAULT: '#059669',      // Verde peruano
          light: '#10B981',
        },
        warning: {
          DEFAULT: '#F59E0B',      // Dorado peruano
          light: '#FCD34D',
        },
        error: {
          DEFAULT: '#DC2626',      // Rojo peruano
          light: '#EF4444',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-gentle': 'float-gentle 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'slide-up': 'slideUp 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.1', transform: 'scale(1)' },
          '50%': { opacity: '0.2', transform: 'scale(1.05)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'peru': '0 10px 25px rgba(217, 30, 24, 0.3)',
      },
    },
  },
  plugins: [],
}