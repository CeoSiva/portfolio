/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        audiowide:['Audiowide','san-serif'],
        glitch:['Rubik Glitch','system-ui'],
        fredoka:['Fredoka','san-serif'],
      },
      animation:{
        'infinite-scroll':'infinite-scroll 25s linear infinite',
      },
      keyframes:{
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}

