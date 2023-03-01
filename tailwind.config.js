module.exports = {
  content: [
    // Example content paths...
    './public//*.html',
    './src//*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bta-hero": "url('static/banner/banner_pink.png')"
      },
      colors: {
        "bta-pink": "#EC1075", //principal
        "bta-blue": "#171524", //body-back
        "bta-dark-blue": "#070916", //header
        "bta-section": "#141224",//
        "gray-border": "#36364e",
        "gray-muted": "#565982"
      },
      fontFamily: {
        oswald: ["Oswald","helvetica neue","Helvetica","Arial", "sans-serif"],
        inconsolata: ["Inconsolata", "monospace"],
      },
      scale: {
        '40': '0.4',
        '80': '0.8'
      },
      animation:{
        'fast-pulse': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
