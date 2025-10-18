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
        // JARVIS Brand Colors - Enhanced with variations
        'jarvis': {
          50: '#E5F7FF',
          100: '#B8EBFF',
          200: '#8ADFFF',
          300: '#5CD3FF',
          400: '#2EC7FF',
          500: '#00A8FF', // Primary
          600: '#0086CC',
          700: '#006499',
          800: '#004266',
          900: '#002133',
        },
        'jarvis-cyan': {
          50: '#E5FBFF',
          100: '#B8F5FF',
          200: '#8AEFFF',
          300: '#5CE9FF',
          400: '#2EE3FF',
          500: '#00D9FF', // Primary
          600: '#00AED9',
          700: '#0082A3',
          800: '#00576D',
          900: '#002B36',
        },
        'jarvis-gold': {
          50: '#FFF9E5',
          100: '#FFECB8',
          200: '#FFDF8A',
          300: '#FFD25C',
          400: '#FFC52E',
          500: '#FFB800', // Primary
          600: '#CC9300',
          700: '#996E00',
          800: '#664A00',
          900: '#332500',
        },
        // Dark Theme - Enhanced depth
        'dark': {
          950: '#030509', // Deepest black
          900: '#0A0E27', // Main background
          850: '#0F1435',
          800: '#151B3B', // Card background
          700: '#1D2449',
          600: '#2A3A5A', // Border
          500: '#3D5178',
          400: '#5A7099',
          300: '#7A90B8',
          200: '#A0AEC0', // Text
          100: '#C5D1E0',
          50: '#E8EEF7',
        },
        // Accent colors
        'accent-red': '#FF1744',
        'accent-green': '#00E676',
        'accent-purple': '#E040FB',
        'accent-orange': '#FF6D00',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.02em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.01em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.03em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.05em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.05em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 168, 255, 0.3)',
        'glow': '0 0 20px rgba(0, 168, 255, 0.4)',
        'glow-md': '0 0 30px rgba(0, 168, 255, 0.5)',
        'glow-lg': '0 0 40px rgba(0, 168, 255, 0.6)',
        'glow-xl': '0 0 60px rgba(0, 168, 255, 0.7)',
        'glow-cyan': '0 0 20px rgba(0, 217, 255, 0.4)',
        'glow-cyan-lg': '0 0 40px rgba(0, 217, 255, 0.6)',
        'glow-gold': '0 0 20px rgba(255, 184, 0, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(0, 168, 255, 0.2)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down': 'slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left': 'slideLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right': 'slideRight 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 168, 255, 0.4), 0 0 40px rgba(0, 168, 255, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 168, 255, 0.6), 0 0 60px rgba(0, 168, 255, 0.3)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 168, 255, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 168, 255, 0.8), 0 0 60px rgba(0, 168, 255, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-jarvis': 'linear-gradient(135deg, #00A8FF 0%, #00D9FF 50%, #00A8FF 100%)',
        'gradient-jarvis-dark': 'linear-gradient(135deg, #0066CC 0%, #00A8FF 50%, #00D9FF 100%)',
        'grid-pattern': 'linear-gradient(rgba(0,168,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,168,255,0.1) 1px, transparent 1px)',
        'circuit-pattern': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2300A8FF\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
      backgroundSize: {
        'grid': '50px 50px',
        'circuit': '60px 60px',
      },
    },
  },
  plugins: [],
}

export default config
