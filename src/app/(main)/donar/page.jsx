import { Gallery } from "./components/Gallery";
import { HowToHelp } from "./components/HowToHelp";
import { Title } from "./components/Title";

export const metadata = {
  title: "Donar"
}

function Donar() {

  return (
    <main className="pt-[70px] lg:pt-[90px]">
      <Title />
      <HowToHelp />
      <div className="w-full my-12 md:my-20 lg:my-28">
        <h3 className='text-[20px] text-primary font-bold leading-140 md:text-[32px] lg:text-[45px] lg:font-extrabold px-mobile md:px-tablet lg:px-desktop max-w-content mx-auto'>Conocé lo que logramos con tu contribución</h3>
        <Gallery />
      </div>
    </main>
  );
}

export default Donar;