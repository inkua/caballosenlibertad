import { ToastProvider } from "@/utils/ToastProvider";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";

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
      default: 'Caballos en Libertad',
    },
    description: {
      template: "%s",
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
      default: 'Caballos en Libertad',
    },
    description: {
      template: "%s",
    },
    images: "/assets/nosotros/hero.jpg",
    site: "@caballosenlibertad",
  },
};

export default function MainLayout({
  children,
}) {
  return (
    <body>
      <Header />
      {children}
      <Footer />
      <ToastProvider />
    </body>
  )
}