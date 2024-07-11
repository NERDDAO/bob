/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  plugins: [require("daisyui")],
  darkTheme: "cyberpunk",
  darkMode: ["selector", "[data-theme='cyberpunk']"],
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        cyberpunk: {
          primary: "#21ff55",
          "primary-content": "#083913",
          secondary: "#FFD700",
          "secondary-content": "#DAA520",
          accent: "#FF8863",
          "accent-content": "#212638",
          neutral: "#385183",
          "neutral-content": "#F9FBFF",
          "base-100": "#f9f9f9",
          "base-200": "#dbdbdb",
          "base-300": "#212638",
          "base-content": "#000000",
          info: "#93BBFB",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "2px",
          "--btn-text-case": "uppercase",

          ".btn": {
            "font-family": '"Courier New", sans-serif',
            "font-weight": "bold",
            "letter-spacing": "2px",
            border: "3px solid",
            "box-shadow": "1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px",
          },
          ".btn:active": {
            "box-shadow": "0px 0px 0px 0px",
            top: "5px",
            left: "5px",
          },
          ".link": {
            "font-family": '"Courier New", sans-serif',
            "text-decoration": "none",
          },
          ".link:hover": {
            "text-decoration": "underline",
          },
        },
      },
      {
        light: {
          primary: "#f9f9f9",
          "primary-content": "#000000",
          secondary: "#dbdbdb",
          "secondary-content": "#000000",
          accent: "#21ff55",
          "accent-content": "#000000",
          neutral: "#000000",
          "neutral-content": "#ffffff",
          "base-100": "#f9f9f9",
          "base-200": "#f4f8ff",
          "base-300": "#dbdbdb",
          "base-content": "#000000",
          info: "#21ff55",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "2px",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        dark: {
          // You may want to adjust these colors for a dark theme
          primary: "#21ff55",
          "primary-content": "#000000",
          secondary: "#f9f9f9",
          "secondary-content": "#000000",
          accent: "#21ff55",
          "accent-content": "#000000",
          neutral: "#000000",
          "neutral-content": "#ffffff",
          "base-100": "#f9f9f9",
          "base-200": "#f4f8ff",
          "base-300": "#dbdbdb",
          "base-content": "#000000",
          info: "#21ff55",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "2px",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        "cloister-black": ["CloisterBlack", "sans-serif"],
        "courier-new": ["Courier New", "sans-serif"],
      },
      colors: {
        background: "#f9f9f9",
        text: "#000000",
        border: "#dbdbdb",
        "button-border": "#21ff55",
        "button-bg": "rgb(208, 255, 219)",
        "button-text": "rgb(0, 16, 4)",
        "button-shadow": "#083913",
      },
      boxShadow: {
        button:
          "1px 1px 0px 0px #083913, 2px 2px 0px 0px #083913, 3px 3px 0px 0px #083913, 4px 4px 0px 0px #083913, 5px 5px 0px 0px #083913",
      },
      borderRadius: {
        button: "2px",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
};

module.exports = config;
