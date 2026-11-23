/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // ButtonLink builds btn-${variant} dynamically, so keep these from being purged
  safelist: ['btn-primary', 'btn-secondary', 'btn-outline', 'btn-dark'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050816',
          900: '#0a1128',
          800: '#0f1a3d',
          700: '#162350',
          600: '#1f3070',
        },
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          400: '#7c8cff',
          500: '#5b6cff',
          600: '#4455f0',
          700: '#3744d1',
        },
        violet2: { 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(91,108,255,0.55)',
        card: '0 10px 40px -12px rgba(10,17,40,0.18)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatSlow: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(4deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 9s ease-in-out infinite',
        marquee: 'marquee 35s linear infinite',
        gradientShift: 'gradientShift 8s ease infinite',
      },
    },
  },
  plugins: [],
}
