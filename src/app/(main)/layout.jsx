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