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
        // JARVIS Brand Colors
        'jarvis-blue': '#00A8FF',
        'jarvis-cyan': '#00D9FF',
        'jarvis-deep': '#0066CC',
        'jarvis-gold': '#FFB800',
        'jarvis-red': '#FF1744',
        'jarvis-green': '#00E676',
        // Dark Theme
        'dark-bg': '#0A0E27',
        'dark-card': '#151B3B',
        'dark-border': '#2A3A5A',
        'dark-text': '#A0AEC0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 168, 255, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 168, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
