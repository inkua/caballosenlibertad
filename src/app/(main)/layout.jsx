import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";

export default function MainLayout({
    children,
  }) {
    return (
      <>
        <Header />
          {/* <main className='pt-[70px] lg:pt-[90px] w-full max-screen-view'> */}
            {children}
        <Footer />
      </>
    )
  }