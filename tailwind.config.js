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
      backgroundImage: {
        "hero-nosotros": "url('/assets/nosotros/hero.jpg')",
      },
      aspectRatio: {
        'hero': '1440 / 670',
      },
      margin:{
        "mobile":"1rem",
        "tablet":"4rem",
        "desktop":"8rem",
      },
      padding:{
        "mobile":"1rem",
        "tablet":"4rem",
        "desktop":"8rem",
      },
      maxWidth:{
        "content":"1440px",
        "banner": "1800px",
      },
      fontSize: {
        "h1-w": "120px",
        "h1-m": "25px",
        "h2-w": "40px",
        "h2-m": "24px",
        "h3-w": "22px",
        "h3-m": "16px",
        "p1-w": "20px",
        "p1-m": "16px",
        "p2-w": "26px",
        "p2-m": "18px",
        "p3-w": "18px",
        "p3-m": "14px",

      },

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
