/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Colores empáticos calmantes optimizados para empowerment y calma natural
        primary: {
          50: '#ecfdf5',   // Verde muy suave para backgrounds
          100: '#d1fae5',  // Verde claro para hover states
          500: '#10b981',  // Verde growth/empowerment principal
          600: '#059669',  // Verde más oscuro para interacciones
          700: '#047857',  // Verde profundo para texto importante
        },
        calm: {
          50: '#eff6ff',   // Azul muy suave para fondos
          100: '#dbeafe',  // Azul claro para elementos sutiles
          500: '#3b82f6',  // Azul calm/trust principal
          600: '#2563eb',  // Azul medio para enlaces
          700: '#1d4ed8',  // Azul profundo para headings
        },
        neutral: {
          50: '#f9fafb',   // Gris muy claro para backgrounds
          100: '#f3f4f6',  // Gris claro para bordes sutiles
          200: '#e5e7eb',  // Gris medio para separadores
          300: '#d1d5db',  // Gris para elementos inactivos
          400: '#9ca3af',  // Gris medio para texto secundario
          500: '#6b7280',  // Gris principal para texto
          600: '#4b5563',  // Gris oscuro para texto importante
          700: '#374151',  // Gris muy oscuro para headings
          800: '#1f2937',  // Casi negro para máximo contraste
          900: '#111827',  // Negro para texto principal
        },
        // Mantener compatibilidad con colores existentes
        greenGrowth: '#10b981',
        blueCalm: '#3b82f6',
        grayText: '#374151',
        greenValue: '#10b981',   
        blueTrust: '#3b82f6',    
        goldCTA: '#f59e0b',      
      },
      screens: {
        'xs': '475px',    // Extra pequeño para móviles pequeños
        'sm': '640px',    // Pequeño (tablet portrait)
        'md': '768px',    // Medio (tablet landscape)
        'lg': '1024px',   // Grande (desktop pequeño)
        'xl': '1280px',   // Extra grande (desktop)
        '2xl': '1536px',  // 2X grande (desktop grande)
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            lineHeight: '1.75',
            fontSize: '1.125rem',
            color: '#374151',
            p: {
              lineHeight: '1.75',
              marginBottom: '1.5rem',
              fontSize: '1.125rem',
              color: '#374151',
            },
            ul: {
              paddingLeft: '0',
              listStyleType: 'none',
              marginBottom: '1.5rem',
            },
            li: {
              marginBottom: '1rem',
              paddingLeft: '0',
              position: 'relative',
            },
            h1: {
              fontSize: '2.25rem',
              lineHeight: '2.5rem',
              fontWeight: '700',
              color: '#1d4ed8',
              marginBottom: '2rem',
              letterSpacing: '-0.025em',
            },
            h2: {
              fontSize: '1.875rem',
              lineHeight: '2.25rem',
              fontWeight: '700',
              color: '#1d4ed8',
              marginBottom: '1.5rem',
              marginTop: '2rem',
              letterSpacing: '-0.025em',
            },
            h3: {
              fontSize: '1.5rem',
              lineHeight: '2rem',
              fontWeight: '600',
              color: '#1d4ed8',
              marginBottom: '1rem',
              marginTop: '1.5rem',
              letterSpacing: '-0.025em',
            },
            a: {
              color: '#2563eb',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: '#1d4ed8',
                textDecoration: 'underline',
              },
            },
            strong: {
              color: '#374151',
              fontWeight: '600',
            },
            blockquote: {
              borderLeftColor: '#10b981',
              borderLeftWidth: '4px',
              paddingLeft: '1rem',
              fontStyle: 'italic',
              color: '#4b5563',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}