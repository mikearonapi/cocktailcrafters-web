// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(255, 102, 51)',
        'orange-400': 'rgb(255, 153, 51)',
        teal: 'rgb(13, 102, 128)',
        'teal-dark': 'rgb(5, 77, 102)',
        green: 'rgb(77, 179, 102)',
        'green-light': 'rgb(102, 204, 128)',
        purple: 'rgb(128, 102, 230)',
        'purple-light': 'rgb(153, 128, 255)',
      },
      fontFamily: {
        'sf-pro': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
        fadeOut: "fadeOut 0.3s ease-out",
        scaleIn: "scaleIn 0.5s ease-out",
        slideUp: "slideUp 0.5s ease-out",
        shake: "shake 0.6s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        shake: {
          "0%": { transform: "rotate(-15deg)" },
          "100%": { transform: "rotate(15deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;