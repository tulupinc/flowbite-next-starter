import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./node_modules/flowbite-react/lib/**/*.js"],
  plugins: [require("flowbite/plugin")],
  theme: {},
};

export default config;
