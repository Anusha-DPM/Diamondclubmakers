import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sansation-regular': ['sansation-regular', 'Arial', 'Helvetica', 'sans-serif'],
        'sansation-bold': ['sansation-bold', 'Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#003366',
        'hover-blue': '#004080',
      },
    },
  },
  plugins: [],
};

export default config;
