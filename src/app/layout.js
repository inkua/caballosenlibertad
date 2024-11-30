import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: {
    template: '%s | Caballos en Libertad',
    default: "Caballos en Libertad",
  },
  description: "Asociación civil sin fines de lucro encargada de la protección, cuidado y rescate de equinos.",
  openGraph: {
    title: "Caballos en Libertad",
    description: "Protección, cuidado y rescate de equinos.",
    images: [
      {
        url: "/next.svg",
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
    title: "Caballos en Libertad",
    description: "Protección, cuidado y rescate de equinos.",
    images: "/next.svg",
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