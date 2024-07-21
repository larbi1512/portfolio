import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#120F19',
        main_light: '#352F44',
        main_dark: '#0A0912',
        white: {
          DEFAULT: "#ffffff",
          50: '#F5F5F5',

        },
        main_purple: '#A79AFF',
        main_purple_light: '#CEC7FD',
        main_purple_dark: '#7A5AF8',
        main_purple_darker: '#362577',



      },
      fontFamily: {
        fira: ['Fira Code', "monospace"],
        opensans: ["Open Sans", "sans-serif"]
      },

      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity:"0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity:"1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
