import { getActiveStories } from "@/DAO/stories.db";

import { TitleSection } from "../components/TitleSection";
import CardWrapper from "./components/CardWrapper";

async function Historias() {
    const data = await getActiveStories()

    return (
        <main className="py-[70px] lg:py-[90px]">
            <TitleSection
                titleTextContent="Historias de nuestros rescatados"
                spanTextContent="Conocé las historias de nuestros rescatados"
            />

            <section className="m-auto max-w-content px-mobile md:px-tablet lg:px-desktop">

                <CardWrapper items={data} />

                <div>
                    <h2 className="text-primary text-h2 font-bold leading-120 mt-12 mb-12 text-center">¡Esto no sería posible sin tu ayuda y la de nuestros voluntarios!</h2>
                </div>
            </section>
        </main>
    )
}

export default Historias;
