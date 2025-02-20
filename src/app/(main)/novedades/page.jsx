import Slider from "../components/slider/Slider";
import { TitleSection } from "../components/TitleSection";
import CardWrapper from "./components/CardWrapper";

const getData = async()=>{
    const url = `${process.env.NEXT_PUBLIC_URL}/api/events`
    const response = await fetch(url,{
        next:{
            revalidate:60
        }
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
                <div>
                    <h2 className="text-primary text-h2 font-bold leading-120 mt-12 mb-12">Proximos eventos</h2>
                    <div className="flex flex-col gap-8">
                        <div className='block md:hidden'>
                            <Slider items={data} type={2} def={1} lg={1} md={1} loop={true} />
                        </div>

                        <div className='hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8'>
                            <CardWrapper items={data} />
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <h2 className="text-primary text-h2 font-bold leading-120 mt-12 mb-12">Eventos anteriores</h2>
                    <Slider items={data} type={1} def={1} lg={3} md={2} nav={false} loop={true} />
                </div>
            </section>
        </main>
    )
}

export default Novedades;
