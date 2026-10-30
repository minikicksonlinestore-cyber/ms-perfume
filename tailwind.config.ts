import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0b0604", 2: "#120a06", 3: "#1b100a" },
        orange: { DEFAULT: "#C8792C", hot: "#D9631E", light: "#F0A04B" },
        cream: "#F5ECE0",
        champagne: "#F4D9A0",
        mocha: "#5B4632",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: { "50%": { transform: "translateY(-14px)" } },
        drift: { "50%": { transform: "translateY(-10px) rotate(8deg)" } },
        twinkle: { "50%": { opacity: "0.7", transform: "translateY(-30px)" } },
        marquee: { to: { transform: "translateX(-50%)" } },
        scroll: { "0%": { transform: "scaleY(0)", transformOrigin: "top" }, "50%": { transform: "scaleY(1)", transformOrigin: "top" }, "51%": { transformOrigin: "bottom" }, "100%": { transform: "scaleY(0)", transformOrigin: "bottom" } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        drift: "drift 7s ease-in-out infinite",
        twinkle: "twinkle 5s infinite",
        scroll: "scroll 2s infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
