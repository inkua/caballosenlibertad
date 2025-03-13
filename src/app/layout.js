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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      {children}
    </html>
  );
}