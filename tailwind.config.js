/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#008080', // Default Teal
        'primary-login': '#0bdada', // Bright Cyan (Login)
        'primary-active': '#13ecec', // Bright Cyan (Active Exam)

        'deep-teal': '#0d3c3c',
        'slate-gray': '#334155', // Dashboard/Landing
        'slate-gray-dark': '#708090', // Active Exam

        'light-gray': '#94a3b8',
        'border-gray': '#e2e8f0',

        'background-light': '#ffffff',
        'background-light-alt': '#f5f8f8', // Catalog/Results
        'background-dark': '#0f2323',
        'background-dark-alt': '#102222', // Active Exam/Login
      },
      fontFamily: {
        display: ['Public Sans', 'Noto Sans Sinhala', 'sans-serif'],
        lexend: ['Lexend', 'Noto Sans Sinhala', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px',
        // Additional sizes from other templates
        btn: '0.25rem',
      },
      // Extend other properties as needed
    },
  },
  plugins: [
    // forms and container-queries are used in the CDN link
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/container-queries'),
  ],
}
