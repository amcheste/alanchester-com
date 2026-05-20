/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink:      '#0B0B0C',
        graphite: '#2B2B2E',
        muted:    '#8A8A8E',
        mist:     '#E6E4DE',
        paper:    '#F6F4EE',
        accent:   '#1F6B3A',
        alt:      '#B45A3C',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'Arial', 'sans-serif'],
        mono: ['"IBM Plex Mono"', '"Courier New"', 'monospace'],
      },
      letterSpacing: {
        eyebrow: '0.1em',
      },
      fontSize: {
        eyebrow: ['11px', { lineHeight: '1.2', letterSpacing: '0.1em' }],
      },
      maxWidth: {
        prose: '680px',
        writing: '780px',
        projects: '880px',
      },
      lineHeight: {
        body: '1.6',
      },
    },
  },
  plugins: [],
};
