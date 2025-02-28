import { DonationCard } from "../components/DonationCard";
import { BankAccountCard } from "../components/BankAccountCard";

export const metadata = {
  title: "Contribuciones"
}

function Contribuciones() {

  return (
    <main className="pt-[70px] lg:pt-[90px]">
      <section className='w-full mx-auto pb-4 md:py-6 lg:pt-8 lg:pb-12 px-mobile md:px-tablet lg:px-desktop max-w-content'>
        <h1
          className="text-[28px] sm:text-[32px] md:text-[32px] lg:text-[44px] xl:text-[50px] leading-140 font-extrabold text-primary mb-4 lg:mb-10 pt-6 md:pt-12 lg:pt-14"
        >Elije si quieres donar mensualmente o por única vez</h1>
      </section>
      <section className="relative flex sm:min-h-[1046px] w-full sm:bg-[url('/assets/donar/backimage.webp')] sm:bg-cover sm:bg-center max-w-banner">
        <div className="w-full my-auto flex items-center justify-center lg:justify-end lg:mr-[9%]">
          <DonationCard />
        </div>
      </section>
      <BankAccountCard />
    </main>
  );
}

export default Contribuciones;