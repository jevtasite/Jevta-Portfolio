/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'matrix-green': '#00FF41',
        'lime-terminal': '#39FF14',
        'cyber-magenta': '#FF00FF',
        'terminal-black': '#0D0208',
        'elevated-black': '#1A1A1A',
        'comment-green': '#6A9955',
        'error-red': '#FF6B6B',
      },
      fontFamily: {
        'fira': ['"Fira Code"', 'monospace'],
        'berkeley': ['"Berkeley Mono"', 'monospace'],
        'sf-mono': ['"SF Mono"', 'Monaco', 'Inconsolata', 'monospace'],
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
      },
      lineHeight: {
        'terminal': '24px',
      },
      maxWidth: {
        'terminal': '1024px',
        'terminal-mobile': '768px',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'glitch': 'glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'matrix-rain': 'matrix-rain 20s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
}
