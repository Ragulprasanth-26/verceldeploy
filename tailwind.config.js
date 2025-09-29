/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        primary: 'black',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-12px) scale(1.05)" },
        },
        morph: {
          "0%, 100%": {
            borderRadius: "36% 64% 62% 38% / 50% 42% 58% 59%",
          },
          "50%": {
            borderRadius: "50% 50% 40% 60% / 60% 50% 50% 40%",
          },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        morph: "morph 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
