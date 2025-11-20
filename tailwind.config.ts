import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
      },
      animation: {
        'pulse-gold': 'pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 20s ease-in-out infinite',
        'particle': 'particle 25s linear infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-gold': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.7' },
        },
        'float': {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px)',
            opacity: '0.3'
          },
          '50%': { 
            transform: 'translateY(-100px) translateX(50px)',
            opacity: '0.8'
          },
        },
        'particle': {
          '0%': { 
            transform: 'translate(0, 0) scale(1)',
            opacity: '0'
          },
          '10%': {
            opacity: '0.3'
          },
          '50%': { 
            transform: 'translate(-50px, -200px) scale(1.5)',
            opacity: '0.5'
          },
          '90%': {
            opacity: '0.2'
          },
          '100%': { 
            transform: 'translate(-100px, -400px) scale(0.5)',
            opacity: '0'
          },
        },
        'glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
          },
          '50%': {
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)'
          }
        },
      },
    },
  },
  plugins: [],
}
export default config
