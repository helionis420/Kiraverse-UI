/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/{components,ui,pages}/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        light: 'hsl(0, 0%, 100%)',
        dark: 'hsl(266, 64%, 2%)',
        black: {
          0: 'hsla(0, 100%, 0%, 0)',
          36: 'hsla(270, 5%, 8%, 0.36)',
          1000: 'hsl(0, 0%, 0%)',
        },
        blue: {
          50: 'hsla(191, 52%, 69%, 1)',
        },
        white: {
          0: 'hsla(180, 100%, 100%, 0)',
          100: 'hsla(180, 100%, 100%, 100%)',
        },
        typography: {
          'pink-100': 'hsl(251, 39%, 79%)',
          'bright-pink-100': 'hsl(259, 100%, 87%)',
          'neutral-grey': 'hsla(251, 15%, 35%, 1)',
        },
        grey: {
          0: 'hsla(186.118, 100%, 50%, 0)',
          10: 'hsla(0, 0%, 82%, 0.1)',
        },
        stroke: {
          'blue-100': 'hsl(186, 100%, 50%)',
          'pink-100': 'hsl(266, 89%, 67%)',
          'violet-100': 'hsl(259, 31%, 68%)',
          'violet-secondary': 'hsl(263, 51%, 57%)',
          // Blue, Violet Gradient
          'blue-violet-sides': 'hsl(274, 100%, 55%)',
          // Dark Violet Gradient
          'dark-violet-top': 'hsl(270, 72%, 49%)',
          'dark-violet-bottom': 'hsl(282, 71%, 3%)',
          // Bright Violet Gradient
          'bright-violet-left': 'hsl(259, 100%, 76%)',
          'bright-violet-right': 'hsl(278, 100%, 73%)',
          // Violet, Grey Gradient
          'violet-grey-top': 'hsl(270, 72%, 49%)',
          'violet-grey-bottom': 'hsla(288, 5%, 21%, 0.39)',
          'grey-100': 'hsl(259, 21%, 28%)',
          'grey-secondary': 'hsla(0, 0%, 78%)',
          'grey-tertiary': 'hsl(210, 10%, 17%)',
          'white-50': 'hsla(180, 100%, 100%, 0.1)',
          'error-main': 'hsl(349, 100%, 62%)',
        },
        background: {
          'neutral-violet': 'hsla(266, 53%, 14%, 0.48)',
          'light-violet-100': 'hsl(266, 56%, 25%)',
          'dark-violet-100': 'hsl(266, 56%, 14%)',
          // Blue Gradient 100
          'blue-sides': 'hsl(190, 90%, 61%)',
          'blue-center': 'hsl(202, 87%, 51%)',
          'half-blur-30': 'hsla(274, 6%, 8%, 0.34)',
          // Photo blur
          'photo-blur-top': 'hsla(0, 20%, 1%, 0)',
          'photo-blur-bottom': 'hsl(286, 74%, 5%)',
          'blue-10': 'hsla(208.706, 100%, 50%, 0.07)',
          'overlay-black-15': 'hsla(0, 100%, 0%, 0.13)',
          'overlay-black-40': 'hsla(0, 100%, 0%, 0.4)',
          'black-90': 'hsla(190, 27%, 4%, 0.9)',
          // Left Black Overlay
          'left-black-overlay-bottom': 'hsl(217, 68%, 4%)',
          'grey-10': 'hsla(180, 1%, 82%, 0.1)',
          // Down blue Gradient
          'down-blue-top': 'hsla(186.19, 100%, 49%, 0)',
          'down-blue-bottom': 'hsl(186, 100%, 49%)',
          'grey-100': 'hsl(300, 20%, 2%)',
          // White 10
          'white-10-left': 'hsla(180, 100%, 100%, 0.05)',
          'white-10-right': 'hsla(180, 100%, 100%, 0)',
          // Glow
          'glow-top': 'hsla(201.647, 100%, 50%, 0.6)',
          'glow-bottom': 'hsla(183.942, 91%, 70%, 0.6)',
        },
      },
      screens: {
        xxs: { max: '374px' },
        xs: { max: '479px' },
        sm: { max: '640px' },
        md: { max: '767px' },
        lg: { max: '1024px' },
        xl: { max: '1365px' },
      },
      fontSize: {
        sm: '0.8125rem',
        md: '0.875rem',
        base: '1rem',
        lg: '1.0625rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
        '5xl': '4rem',
        '6xl': '6rem',
      },
      fontFamily: {
        kusanagi: ['Kusanagi', 'sans-serif'],
        'space-mono-regular': ['SpaceMono-Regular', 'sans-serif'],
        'space-mono-bold': ['SpaceMono-Bold', 'sans-serif'],
      },
      willChange: {
        opacity: 'opacity',
        color: 'color',
      },
    },
  },
  plugins: [],
};
