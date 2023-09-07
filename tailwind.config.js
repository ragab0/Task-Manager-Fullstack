/** @type {import('tailwindcss').Config} */
export const content = [
  './src/components/**/*.js',
  './src/app/**/*.js',
];

export const theme = {
  extend: {
    animation : {
      slideDown: "slideDown 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"
    },
    keyframes: {
      slideDown: {
        "0%": {
          transform: "translateY(50px)"
        },
        "100%": {
          transform: "translateY(0)"
        }
      }
    }
  }
}