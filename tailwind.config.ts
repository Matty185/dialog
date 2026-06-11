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
        brand: {
          teal: "#28A0B1",
          "teal-deep": "#1C6E73",
          mint: "#BCE2D9",
          cream: "#FBFAF7",
          paper: "#FFFFFF",
          ink: "#1A2630",
          muted: "#6B7785",
          border: "#E5E7EB",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "14px",
        lg: "24px",
      },
    },
  },
  plugins: [],
};
export default config;
