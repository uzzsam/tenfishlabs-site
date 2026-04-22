/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        page: '#FFFFFF',
        ink: '#111111',
        muted: '#6B6B6B',
        soft: '#9A9A9A',
        rule: '#E8E8E8',
        ruleStrong: '#CFCFCF',
        panel: '#F2F2F2',
        panelAlt: '#E8E8E8',
        night: '#0A0A0A',
        tan: '#C9B283',
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'ui-sans-serif', 'system-ui'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
    },
  },
  plugins: [],
};
