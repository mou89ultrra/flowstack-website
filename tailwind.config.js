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
        'bg-primary': '#0A0A0F',
        'bg-secondary': '#111118',
        'accent-purple': '#7C3AED',
        'accent-cyan': '#06B6D4',
        'purple-light': '#A855F7',
        'cyan-light': '#22D3EE',
      },
      fontFamily: {
        cairo: ['var(--font-cairo)', 'Cairo', 'sans-serif'],
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'grid-pulse': 'gridPulse 4s ease-in-out infinite',
        'dash': 'dash 1s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)' },
          to: { boxShadow: '0 0 50px rgba(124, 58, 237, 0.8), 0 0 100px rgba(6, 182, 212, 0.2)' },
        },
        gridPulse: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.65' },
        },
        dash: {
          to: { strokeDashoffset: '-16' },
        },
      },
    },
  },
  plugins: [],
}
