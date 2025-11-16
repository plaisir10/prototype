/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rwanda-transport': "url('/images/rwanda-transport.jpg')",
      },
    },
  },
  plugins: [],
};
