/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#80b48c',
          secondary: '#a0bfb9',
          background: '#f8fafc',
          surface: '#ffffff',
          accent: '#3b8c57',
          text: {
            primary: '#1a2b3c',
            secondary: '#4a5568',
          },
          border: '#e2e8f0',
          hover: '#f1f5f9'
        }
      }
    },
  },
  plugins: [],
};