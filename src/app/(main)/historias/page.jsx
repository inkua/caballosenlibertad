import { TitleSection } from "../components/TitleSection";
import Card from "./components/Card";

const items = [
    {
        data: '/assets/caballos_atardecer.jpg',
        alt: '',
        url: 'https://www.youtube.com/',
    },
    {
        data: '/assets/caballos_rescatados.jpg',
        alt: '',
        url: '',
    },
    {
        data: '/assets/doctor_veterinario.jpg',
        alt: '',
        url: '',
    },
    {
        data: '/assets/equipo_ong_caballos.jpg',
        alt: '',
        url: '',
    },
]

function Historias() {
    return (
        <main className="mx-mobile my-28 sm:m-tablet  lg:m-desktop">
            <section className="m-auto max-w-content">
                <TitleSection
                    titleTextContent="Historias de nuestros rescatados"
                    spanTextContent="Conocé las historias de nuestros rescatados"
                />

                <div className="masonry columns-2 gap-4">
                    {items.map((item) => (
                        <Card data={item.data} alt={item.alt} url={item.url ? item.url : ''} />
                    ))}
                </div>

                <div>
                    <h2 className="text-primary text-h2 font-bold leading-120 mt-12 mb-12 text-center">¡Esto no sería posible sin tu ayuda y la de nuestros voluntarios!</h2>
                </div>
            </section>
        </main>
    )
}

export default Historias;
