import Slider from "../components/slider/Slider";
import { TitleSection } from "../components/TitleSection";
import { HowToHelp } from "./components/HowToHelp";

export const metadata = {
    title: "Donar"
}
const getData = async()=>{
    const url = `${process.env.NEXT_PUBLIC_URL}/api/stories`
    const response = await fetch(url,{
        next:{
            revalidate:60
        }
    });
    const result = await response.json();
    return result.data
}   
async function Donar() {
    const stories = await getData()

    return (
        <main className="py-[70px] lg:py-[90px]">
            <TitleSection
                titleTextContent="Ayudá a nuestros rescatados"
                spanTextContent="Doná hoy, tu contribución puede marcar la diferencia en la vida de nuestros rescatados"
            />
            <section className="m-auto max-w-content mt-6 px-mobile md:px-tablet lg:px-desktop">
                <HowToHelp />
                <div className="w-full my-12 md:my-20 lg:my-28">
                    <h3 className='text-[20px] text-primary font-bold leading-140 md:text-[32px] lg:text-[45px] lg:font-extrabold mx-auto'>
                        Conocé lo que logramos con tu contribución
                    </h3>
                </div>
            </section>
            <section className="m-auto max-w-banner mt-6 px-mobile md:px-tablet lg:px-desktop">
                    <Slider 
                    items={stories}
                    type={0}
                    def={1}
                    lg={2}
                    md={2}
                    loop={true}
                    />
            </section>
            
        </main>
    );
}

export default Donar;