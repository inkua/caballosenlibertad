import Image from "next/image";
import { DonationCard } from "../../components/donar/DonationCard";

export const metadata = {
  title: "Contribuciones"
}

function Contribuciones() {

  return (
    <main className="pt-[70px] lg:pt-[90px]">
      <div className='w-full mx-auto pb-4 md:py-6 lg:pt-8 lg:pb-12 px-mobile md:px-tablet lg:px-desktop max-w-content'>
        <h1
          className="text-[28px] sm:text-[32px] md:text-[32px] lg:text-[44px] xl:text-[50px] leading-140 font-extrabold text-primary md:mb-4 lg:mb-10 pt-6 md:pt-12 lg:pt-14"
        >Elije si quieres donar mensualmente o por única vez</h1>
      </div>
      <div className="relative sm:min-h-[1046px] w-full sm:bg-[url('/assets/donar/IMG_back_formulario-de-pago.png')] sm:bg-cover sm:bg-center flex items-center justify-center max-w-banner mx-auto">
        <DonationCard />
      </div>

      <div className='flex flex-col md:flex-row bg-primary2 text-[16px] md:text-[20px] lg:text-[22px] mx-auto p-8 rounded-2xl w-full my-12 md:my-20 lg:my-28 gap-8 max-w-content'>
        <div>
          <h3 className="text-primary font-bold text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px]">Si sos de Argentina</h3>  
          <p className='font-light'>
            También podés realizar una transferencia a la siguiente cuenta 
          </p>              
        </div>
        <div className="flex flex-col">
          <span><strong className="text-primary">BANCO SANTANDER RIO SUCURSAL: </strong>743</span>
          <span><strong className="text-primary">N° DE CUENTA: </strong>003032 4</span>
          <span><strong className="text-primary">CUIT: </strong>000000033715048219</span>
          <span><strong className="text-primary">CBU: </strong>0720743520000000303240</span>
          <span><strong className="text-primary">NOMBRE: </strong>CABALLOS EN LIBERTAD ASOC CIV</span>              
        </div>
      </div>
    </main>
  );
}

export default Contribuciones;