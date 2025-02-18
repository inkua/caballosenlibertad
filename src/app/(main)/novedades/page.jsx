import Slider from "../components/slider/Slider";
import { TitleSection } from "../components/TitleSection";
import Card from "./components/Card";

const items = [
    {
        data: '/assets/caballos_atardecer.jpg',
        alt: '',
        url: '',
        id:1,
    },
    {
        data: '/assets/caballos_rescatados.jpg',
        alt: '',
        url: '',
        id:2,
    },
    {
        data: '/assets/doctor_veterinario.jpg',
        alt: '',
        url: '',
        id:3,
    },
    {
        data: '/assets/equipo_ong_caballos.jpg',
        alt: '',
        url: '',
        id:4,
    },
]

function Novedades() {
    return (
        <main className="py-[70px] lg:py-[90px]">
                <TitleSection
                    titleTextContent="Novedades"
                    spanTextContent="Conocé todas las actividades y concursos que nos ayudan a seguir creciendo."
                />

            <section className="m-auto max-w-content px-mobile md:px-tablet lg:px-desktop">
                <div>
                    <h2 className="text-primary text-h2 font-bold leading-120 mt-12 mb-12">Proximos eventos</h2>
                    <Card />
                </div>

                <div className="w-full">
                    <h2 className="text-primary text-h2 font-bold leading-120 mt-12 mb-12">Eventos anteriores</h2>
                    <Slider items={items} type={1} def={1} lg={3} md={2} loop={true} />
                </div>
            </section>
        </main>
    )
}

export default Novedades;
