import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'dialog-fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'dialog-fade-in': 'dialog-fade-in 0.3s ease-out'
      },
      colors: {
        'uni-orange': {
          100: '#FEF4E6',
          200: '#FCE4BF',
          300: '#FAD399',
          400: '#F9C273', 
          500: '#F8981D', // Original color
          600: '#E07C0F',
          700: '#B8610B',
          800: '#904807',
          900: '#683403'
        }
      }
    },
  },
  plugins: [],
}

export default config 