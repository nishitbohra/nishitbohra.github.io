/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        secondary: '#00D4FF',
        accent: '#F59E0B',
        success: '#10B981',
        danger: '#EF4444',
        dark: {
          base: '#07070F',
          surface: '#0D0D1A',
          card: '#111128',
          border: '#1E1E3E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 10s ease-in-out infinite 3s',
        'float-slow': 'float 14s ease-in-out infinite 6s',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-30px) translateX(15px)' },
          '66%': { transform: 'translateY(15px) translateX(-10px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6C63FF, #00D4FF)',
        'gradient-card': 'linear-gradient(135deg, #111128, #0D0D1A)',
      },
      boxShadow: {
        'glow-primary': '0 0 40px rgba(108, 99, 255, 0.25)',
        'glow-secondary': '0 0 40px rgba(0, 212, 255, 0.25)',
        'glow-accent': '0 0 40px rgba(245, 158, 11, 0.25)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}
