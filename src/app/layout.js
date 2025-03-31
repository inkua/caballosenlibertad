import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  preload: false,
});

export const metadata = {
  title: "Caballos en Libertad",
  description: "Somos una organización sin fines de lucro, encargada de la protección, cuidado y rescate de equinos.",
  applicationName: 'Caballos En Libertad',
  type: 'website',
  locale: "es_AR",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={poppins.className}>
      <head>
        <meta name="theme-color" content="#00638C" />
      </head>
      {children}
    </html>
  );
}