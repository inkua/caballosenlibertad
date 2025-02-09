import { TitleSection } from "../components/TitleSection";
import Card from "./components/Card";
import Slider from "../components/slider/Slider";
import { getEvents } from "@/DAO/events.db";

async function Novedades() {
    const data = await getEvents()

    return (
        <main className="mx-mobile my-28 sm:m-tablet  lg:m-desktop">
            <section className="m-auto max-w-content">
                <TitleSection
                    titleTextContent="Novedades"
                    spanTextContent="Conocé todas las actividades y concursos que nos ayudan a seguir creciendo."
                />

                <div>
                    <h2 className="text-primary text-h2 font-bold leading-120 mt-12 mb-12">Proximos eventos</h2>
                    <Card />
                </div>

                <div className="w-full">
                    <h2 className="text-primary text-h2 font-bold leading-120 mt-12 mb-12">Eventos anteriores</h2>
                    <Slider items={data} type={1} def={1} lg={3} md={2} loop={true} />
                </div>
            </section>
        </main>
    )
}

export default Novedades;
