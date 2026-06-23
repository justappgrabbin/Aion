/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        aion: {
          void: '#0a0a0f',
          matter: '#1a1a2e',
          energy: '#16213e',
          resonance: '#0f3460',
          pulse: '#e94560',
          light: '#f5f5f5',
          gold: '#d4af37',
          silver: '#c0c0c0',
        },
        hd: {
          manifestor: '#ff4444',
          generator: '#44ff44',
          manifesting_generator: '#ffaa00',
          projector: '#8844ff',
          reflector: '#44aaff',
        },
        center: {
          head: '#9b59b6',
          ajna: '#3498db',
          throat: '#2ecc71',
          g_center: '#f1c40f',
          heart: '#e74c3c',
          solar_plexus: '#e67e22',
          sacral: '#d35400',
          spleen: '#1abc9c',
          root: '#c0392b',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'flow': 'flow 8s linear infinite',
        'morph': 'morph 10s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(233, 69, 96, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(233, 69, 96, 0.6), 0 0 40px rgba(233, 69, 96, 0.3)' },
        },
        flow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
      },
      fontFamily: {
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};