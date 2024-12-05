import Link from "next/link";

import { Contribution } from "./components/home/Contribution";
import { Statistics } from "./components/home/Statistics";
import { TitleSection } from "./components/TitleSection";

export default function Home() {
  return (
    <main className='pt-[70px] lg:pt-[90px]'>
      <TitleSection 
        titleTextContent='Caballos en Libertad'
        spanTextContent='Protección, cuidado y rescate de equinos'
      >
        <Link href={'/nosotros'} className='button-primary font-semibold md:text-xl mt-4 lg:mt-8 md:w-[360px] md:h-[64px] col-start-1 w-fit'>
          CONOCENOS
        </Link>
      </TitleSection>
      <section className="w-full text-center text-lg my-20 lg:my40 border-2 border-gray-900 bg-gray-300 py-3 max-w-banner mx-auto">Video presentación</section>
      <section className='flex flex-col w-full box-border items-start justify-between gap-20 lg:gap-40 py-20 md:py-24 lg:py-32 xl:py-40 px-mobile md:px-tablet lg:px-desktop max-w-content mx-auto'>
        <Statistics />
        <Contribution />
      </section>
    </main>
  );
}