import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  preload: false,
});

export const metadata = {
  title: {
    template: '%s | Caballos en Libertad',
    default: "Caballos en Libertad",
  },
  description: {
    template: "%s",
    default: "Asociación civil sin fines de lucro encargada de la protección, cuidado y rescate de equinos.",
  },
  openGraph: {
    title: {
      template: '%s | Caballos en Libertad',
      default: "Caballos en Libertad",
    },
    description: {
      template: "%s",
      default: "Asociación civil sin fines de lucro encargada de la protección, cuidado y rescate de equinos.",
    },
    images: [
      {
        url: "/assets/nosotros/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Logo descripción de la asociación",
      },
    ],
    type: "website",
    siteName: "@caballosenlibertad",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: '%s | Caballos en Libertad',
      default: "Caballos en Libertad",
    },
    description: {
      template: "%s",
      default: "Asociación civil sin fines de lucro encargada de la protección, cuidado y rescate de equinos.",
    },
    images: "/assets/nosotros/hero.jpg",
    site: "@caballosenlibertad",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      {children}
    </html>
  );
}