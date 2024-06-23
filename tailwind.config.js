/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      'dark', 'light',
      {
        lightTheme: {
          "primary": "#3b82f6",
          "primary-content": "#ffffff",
          "secondary": "#a3e635",
          "accent": "#f43f5e",
          "info": "#38bdf8",
          "success": "#22c55e",
          "warning": "#fbbf24",
          "error": "#ef4444",
          "base-100": "#ffffff",
          "base-200": "#f0f2f5",
          "base-300": "#f0f2f5",
          'base-content': 'black',
        }, // primary: 3b82f6; secondary: a3e635
        darkTheme: {
          "primary": "#3b82f6",
          "primary-focus": "#2779bd",
          "primary-content": "#ffffff",
          "secondary": "#ffed4a",
          "secondary-focus": "#f9d002",
          "secondary-content": "#ffffff",
          "accent": "#38c172",
          "accent-focus": "#2d995b",
          "accent-content": "#ffffff",
          "base-100": "#1d1e1f",
          "base-200": "#121212",
          "base-300": "#101010",
          'base-content': '#eceef2',
        },
      }
    ]
  },
  plugins: [require('daisyui')],
};
