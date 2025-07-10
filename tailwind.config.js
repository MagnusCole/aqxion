/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
      },
      fontFamily: {
        'primary': ['var(--font-primary)'],
        'secondary': ['var(--font-secondary)'],
      },
      boxShadow: {
        base: '0 8px 20px rgba(0, 0, 0, 0.08)',
        card: '0 2px 4px rgba(0,0,0,0.05)',
      },
    },
  },
  // Optimización de performance
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
