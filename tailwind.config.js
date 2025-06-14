import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  darkMode: ['class'],
  content: [
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5715' }],
        'base': ['1rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        'lg': ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.037em' }],
        '3xl': ['1.875rem', { lineHeight: '1.3333', letterSpacing: '-0.037em' }],
        '4xl': ['2.25rem', { lineHeight: '1.2777', letterSpacing: '-0.037em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.037em' }],
        '6xl': ['4rem', { lineHeight: '1', letterSpacing: '-0.037em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.037em' }],
      },
      colors: {
        base: {
          light: 'var(--white-custom)',
          dark: 'var(--black-custom)',
        },
        glass: {
          light: 'var(--light-glass)',
          dark: 'var(--dark-glass)',
        },
        static: {
          baseLight: 'var(--light-static)',
          baseDark: 'var(--dark-static)',
          glassLight: 'var(--light-static-glass)',
          glassDark: 'var(--dark-static-glass)',
        },
      }
    },
  },
  plugins: [
    forms,
  ],
};
