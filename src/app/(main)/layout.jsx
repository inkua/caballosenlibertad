import { ToastProvider } from "@/utils/ToastProvider";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";

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