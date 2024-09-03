/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
        belle: ['La Belle Aurore'],
        lora: ['Lora'],
      },
      colors: {
        'theme-base': '#FFFFFF',
        'theme-negative-base': '#000000',
        'light-white': '#FDFDFD',
        'text-darker': '#000000',
        'text-dark': '#070710',
        'light-brown': '#A3939D',
        'lighter-brown': '#E7E3DD',
        'light-brown-bg': '#F8F7F5',
        'lighter-text': '#B6BCC6',
        'primary-green': '#346C61',
        'primary-green-hv': '#2A564E',
        'dark-bg': '#28292A',
      },
    },
  },
  plugins: [],
};
