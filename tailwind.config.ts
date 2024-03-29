import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "200px",
      xs: "360px",
      md: "	768px",
      lg: "1024px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "var(--primary)",
        primaryBg: "var(--primarybg)",
        background: "var(--background)",
        primaryForeground: "var(--primaryForeground)",
        foreground: "var(--foreground)",
        documentPrimaryBackground: "#F5EDDC",
        documentSecondaryBackground: "#222831",
      },
    },
  },
  plugins: [],
};
export default config;
