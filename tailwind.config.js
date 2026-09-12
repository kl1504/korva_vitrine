/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          light: '#F8FAFC',
          muted: '#F1F5F9',
          dark: '#090D16'
        },
        surface: {
          DEFAULT: '#FFFFFF',
          card: '#FFFFFF',
          subtle: '#F8FAFC',
          muted: '#F1F5F9',
          border: '#E2E8F0',
          'dark-terminal': '#0B0F19',
          'dark-subtle': '#111726',
          'dark-card': '#161D2F'
        },
        primary: {
          DEFAULT: '#2547EB',
          accent: '#3B5BFD',
          hover: '#1D3ECC',
          tint: '#bac3ff',
          light: '#EEF2FF',
          border: '#C7D2FE',
          container: '#2547eb',
          'on-container': '#cfd4ff'
        },
        secondary: {
          DEFAULT: '#10B981',
          emerald: '#10B981',
          light: '#ECFDF5',
          border: '#A7F3D0',
          dim: '#4edea3',
          container: '#00a572'
        },
        tertiary: {
          DEFAULT: '#F43F5E',
          rose: '#F43F5E',
          light: '#FFF1F2',
          border: '#FECDD3',
          dim: '#ffb2b7'
        },
        text: {
          primary: '#0F172A',
          secondary: '#475569',
          muted: '#94A3B8',
          light: '#64748B'
        }
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      borderRadius: {
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem'
      },
      boxShadow: {
        'clean-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'clean-card': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'clean-elevated': '0 12px 32px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)',
        'electric-glow': '0 0 24px -4px rgba(37, 71, 235, 0.35)',
        'electric-glow-lg': '0 0 35px -5px rgba(37, 71, 235, 0.45)',
        'specular-top': 'inset 0 1px 0 rgba(255, 255, 255, 0.25)'
      }
    },
  },
  plugins: [],
}
