// LLM-OPTIMIZED: Updated Tailwind config for IA theme with optimized content paths
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core colors
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-card': 'var(--color-bg-card)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-placeholder': 'var(--color-text-placeholder)',
        'text-link': 'var(--color-text-link)',
        'accent-main': 'var(--color-accent-main)',
        'accent-cta': 'var(--color-accent-cta)',
        'accent-secondary': 'var(--color-accent-secondary)',
        'accent-tertiary': 'var(--color-accent-tertiary)',
        'accent-alert': 'var(--color-accent-alert)',
        'gray-light': 'var(--color-gray-light)',
        'gray-medium': 'var(--color-gray-medium)',
        // IA-specific colors
        'ia-blue': 'var(--ia-blue)',
        'auto-green': 'var(--auto-green)',
        'primary': {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
      },
      fontFamily: {
        'primary': ['var(--font-primary)'],
        'secondary': ['var(--font-secondary)'],
        'sans': ['var(--font-sans)'],
        'mono': ['var(--font-mono)'],
      },
      boxShadow: {
        base: '0 8px 20px rgba(0, 0, 0, 0.08)',
        card: '0 2px 4px rgba(0,0,0,0.05)',
        glow: '0 0 20px var(--ia-blue)',
        'glow-auto': '0 0 20px var(--auto-green)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  // Performance optimizations
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
