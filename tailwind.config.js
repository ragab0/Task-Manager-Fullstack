/** @type {import('tailwindcss').Config} */
export const content = ["./src/components/**/*.js", "./src/app/**/*.js"];

export const theme = {
  extend: {
    colors: {
      mainClr: "#9D00EE",
      mainClrLight: "#9D00EE",
    },
    animation: {
      slideDown: "slideDown 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ",
      slideRight: "slideRight 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) ",
      popup: "popup 0.2s ease-in",
      growing: "growing 0.10ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ",
    },
    keyframes: {
      slideDown: {
        "0%": {
          transform: "translateY(50px)",
        },
        "100%": {
          transform: "translateY(0)",
        },
      },
      slideRight: {
        "0%": {
          transform: "translateX(-100%)",
        },
        "100%": {
          transform: "translateX(0px)",
        },
      },
    },
  },
};
