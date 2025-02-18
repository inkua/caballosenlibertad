import { TitleSection } from "../components/TitleSection";
import { AdopcionesCard } from "./components/AdopcionesCard";
import { ItemsGrid } from "./components/ItemsGrid";

export const metadata = {
  title: "Adopciones"
}

function Adopciones() {

  return (
    <main className="py-[70px] lg:py-[90px]">
        <TitleSection
            titleTextContent="Dales una segunda oportunidad"
            spanTextContent="Adoptá un caballo rescatado y transformá vidas"
        />
        <ItemsGrid />
        <div
            className="w-full mx-auto py-6 md:py-12 lg:py-14 px-mobile md:px-tablet lg:px-desktop max-w-content"
        >
            <AdopcionesCard />            
        </div>
    </main>
  );
}

export default Adopciones;