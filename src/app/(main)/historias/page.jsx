import { getUrlBase } from "@/utils/urlRoute";

import { TitleSection } from "../components/TitleSection";
import CardWrapper from "./components/CardWrapper";

export const metadata = {
    title: "Historias",
    description: "Conocé las historias de nuestros rescatados."
}

const getData = async()=>{
    const urlBase = getUrlBase()
    const url = `${urlBase}/api/stories`

    const response = await fetch(url,{
        next:{
            revalidate:60
        }
    });
    const result = await response.json();
    return result.data
}   

async function Historias() {
    const stories = await getData()

    return (
        <main className="py-[70px] lg:py-[90px]">
            <TitleSection
                titleTextContent="Historias de nuestros rescatados"
                spanTextContent="Conocé las historias de nuestros rescatados"
            />

            <section className="m-auto max-w-content px-mobile md:px-tablet lg:px-desktop">

                <CardWrapper items={stories} />

                <div>
                    <p className="text-primary text-h2 font-bold leading-120 mt-16 text-center">¡Esto no sería posible sin tu ayuda y la de nuestros voluntarios!</p>
                </div>
            </section>
        </main>
    )
}

export default Historias;
