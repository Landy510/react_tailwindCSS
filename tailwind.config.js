export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: 'rgb(255, 255, 255, 1)',
      black: 'rgb(0, 0, 0, 1)',
      grey: 'rgb(0, 0, 0, 0.6)',
      purple: 'rgba(108, 81, 226, 1)',
    },
    screens: {
      sm: '360px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      padding: {
        DEFAULT: '15px',
        sm: '15px',
        md: '39px',
        xl: '85px',
      },
    },
  },
  plugins: [],
};
