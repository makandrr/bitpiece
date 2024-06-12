import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // extend: {
    colors: {
      primary: 'rgb(var(--primary-rgb) / <alpha-value>)',
      secondary: 'rgb(var(--secondary-rgb) / <alpha-value>)',
      lapis: 'rgb(var(--lapis-rgb) / <alpha-value>)',
      foreground: 'rgb(var(--foreground-rgb) / <alpha-value>)',
    }
    // },
  },
  plugins: [],
};
export default config;
