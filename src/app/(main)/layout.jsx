import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";

export default function MainLayout({
    children,
  }) {
    return (
      <>
        <Header />
          <div className='pt-[70px] lg:pt-[90px]'>
            {children}
          </div>
        <Footer />
      </>
    )
  }