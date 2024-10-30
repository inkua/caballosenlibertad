/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        '120': '1.2', // Representa 120% de la fuente
        '140': '1.4', // Representa 140% de la fuente
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        whitePrimary: "var(--white-primary)",
        darkBlue: "var(--dark-blue)",
        primary: "var(--primary)",
        primary2: "var(--primary2)",
        secondary: "var(--secondary)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
