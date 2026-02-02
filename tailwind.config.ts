import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        luxury: {
          amber: {
            50: '#FFF9F0',
            100: '#FFF2E0',
            200: '#FFE4C2',
            300: '#FFD6A3',
            400: '#FFC885',
            500: '#D4A574',
            600: '#B8935F',
            700: '#8B6F47',
            800: '#5E4A2F',
            900: '#312518',
          },
          gold: {
            50: '#FFFBF0',
            100: '#FFF6DC',
            200: '#FFEDB8',
            300: '#FFE495',
            400: '#FFDB71',
            500: '#D4AF37',
            600: '#B8962E',
            700: '#8B7122',
            800: '#5E4C17',
            900: '#31260B',
          },
          brown: {
            50: '#F5F0EB',
            100: '#E8DDD3',
            200: '#D1BBA7',
            300: '#BA997B',
            400: '#A3774F',
            500: '#6B4423',
            600: '#5A391D',
            700: '#442B16',
            800: '#2D1D0F',
            900: '#170E07',
          },
          beige: {
            50: '#FDFCFB',
            100: '#FAF8F5',
            200: '#F5F1EB',
            300: '#F0EAE1',
            400: '#EBE3D7',
            500: '#D4C4B0',
            600: '#B8A890',
            700: '#8B7E6C',
            800: '#5E5448',
            900: '#312A24',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        cairo: ['var(--font-cairo)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 165, 116, 0.5), 0 0 10px rgba(212, 165, 116, 0.3)' },
          '100%': { boxShadow: '0 0 10px rgba(212, 165, 116, 0.8), 0 0 20px rgba(212, 165, 116, 0.5)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, #FFF9F0 0%, #F5F1EB 50%, #FFE4C2 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(212, 165, 116, 0.3), transparent)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
