/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a',
          light: '#3b82f6',
          dark: '#1e40af',
        },
        secondary: {
          DEFAULT: '#dc2626',
          light: '#ef4444',
          dark: '#b91c1c',
        },
        accent: {
          DEFAULT: '#f59e0b',
        },
        surface: {
          DEFAULT: '#f8fafc',
          alt: '#f1f5f9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
      backgroundImage: {
        'glass': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.75))',
        'primary-gradient': 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
        'secondary-gradient': 'linear-gradient(135deg, #dc2626, #f59e0b)',
        'primary-gradient-hover': 'linear-gradient(135deg, #3b82f6, #1e3a8a)',
        'secondary-gradient-hover': 'linear-gradient(135deg, #ef4444, #dc2626)',
      },
      backdropBlur: {
        'glass': '12px',
      }
    },
  },
  plugins: [],
}
