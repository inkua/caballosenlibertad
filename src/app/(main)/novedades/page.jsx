import { getUrlBase } from "@/utils/urlRoute";
import Link from "next/link";

import Slider from "../components/slider/Slider";
import { TitleSection } from "../components/TitleSection";
import CardWrapper from "./components/CardWrapper";

export const metadata = {
    title: "Novedades",
    description: "Conocé todas las actividades y concursos que nos ayudan a seguir creciendo."
}

const getData = async () => {
    const urlBase = getUrlBase()
    const url = `${urlBase}/api/events`

    /* const response = await fetch(url,{
        next:{
            revalidate:60
        }
    }); */
    const response = await fetch(url, {
        cache: "no-store"
    });
    const result = await response.json();
    return result.data
}

async function Novedades() {
    const data = await getData()

    return (
        <main className="py-[70px] lg:py-[90px]">
            <TitleSection
                titleTextContent="Novedades"
                spanTextContent="Conocé todas las actividades y concursos que nos ayudan a seguir creciendo."
            />

            <section className="m-auto max-w-content px-mobile md:px-tablet lg:px-desktop">
                <div role="region">
                    <h2 className="text-primary text-h2 font-bold leading-120 mt-12 mb-12">Proximos eventos</h2>
                    <div role='region' className="flex flex-col gap-8">
                        {(!data.upcomingEvents || data.upcomingEvents.length <= 0) ?
                            <p className="text-base md:text-xl xl:text-2xl font-light">Actualmente no hay eventos programados, pero siempre puedes apoyar a nuestros caballos de otras maneras. Conoce cómo puedes ayudar haciendo click <Link href="/donar" alt="donar" className="text-primary font-semibold italic">aquí</Link> y seguinos en redes sociales para no perderte nuestros próximos eventos.</p>
                            :
                            <>
                                <div className='block md:hidden'>
                                    <Slider items={data.upcomingEvents} type={2} def={1} lg={1} md={1} loop={(data.upcomingEvents.length >= 2)} />
                                </div>

                                <div className='hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8'>
                                    <CardWrapper items={data.upcomingEvents} />
                                </div>
                            </>
                        }
                    </div>
                </div>

                {(data.pastEvents || data.pastEvents.length >= 1) &&
                    <div role="region" className="w-full">
                        <h2 className="text-primary text-h2 font-bold leading-120 mt-12 mb-12">Eventos anteriores</h2>
                        <Slider items={data.pastEvents} type={1} def={1} lg={3} md={2} nav={false} loop={(data.pastEvents.length >= 3)} />
                    </div>
                }
            </section>
        </main>
    )
}

export default Novedades;
