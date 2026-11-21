/** Trusted Navy palette */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F8FAFC",
        ink: "#0F172A",
        muted: "#475569",
        line: "#E2E8F0",
        brand: { DEFAULT: "#2563EB", dark: "#1D4ED8" },
        teal: "#14B8A6",
        night: { DEFAULT: "#0B1220", card: "#131B2E", line: "#1E2A44" },
      },
      fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
