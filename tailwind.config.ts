import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { ink: "#08090d", panel: "#11131b", accent: "#a78bfa" } } },
  plugins: []
};
export default config;
