import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Catppuccin Latte (Light)
        latte: {
          rosewater: '#dc8a78',
          flamingo: '#dd7878',
          pink: '#ea76cb',
          mauve: '#8839ef',
          red: '#d20f39',
          maroon: '#e64553',
          peach: '#fe640b',
          yellow: '#df8e1d',
          green: '#40a02b',
          teal: '#179299',
          sky: '#04a5e5',
          sapphire: '#209fb5',
          blue: '#1e66f5',
          lavender: '#7287fd',
          text: '#4c4f69',
          subtext1: '#5c5f77',
          subtext0: '#6c6f85',
          overlay2: '#7c7f93',
          overlay1: '#8c8fa1',
          overlay0: '#9ca0b0',
          surface2: '#acb0be',
          surface1: '#bcc0cc',
          surface0: '#ccd0da',
          base: '#eff1f5',
          mantle: '#e6e9ef',
          crust: '#dce0e8',
        },
        // Catppuccin Frappé (Dark)
        frappe: {
          rosewater: '#f2d5cf',
          flamingo: '#eebebe',
          pink: '#f4b8e4',
          mauve: '#ca9ee6',
          red: '#e78284',
          maroon: '#ea999c',
          peach: '#ef9f76',
          yellow: '#e5c890',
          green: '#a6d189',
          teal: '#81c8be',
          sky: '#99d1db',
          sapphire: '#85c1dc',
          blue: '#8caaee',
          lavender: '#babbf1',
          text: '#c6d0f5',
          subtext1: '#b5bfe2',
          subtext0: '#a5adce',
          overlay2: '#949cbb',
          overlay1: '#838ba7',
          overlay0: '#737994',
          surface2: '#626880',
          surface1: '#51576d',
          surface0: '#414559',
          base: '#303446',
          mantle: '#292c3c',
          crust: '#232634',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'slide-left': 'slideLeft 0.8s ease-out',
        'slide-right': 'slideRight 0.8s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-soft': 'pulseSoft 2s infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
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
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        'gradient': '200% 200%',
      },
    },
  },
  plugins: [],
};

export default config;
