import { getActiveStories } from "@/DAO/stories.db";
import { TitleSection } from "../components/TitleSection";
import CardWrapper from "./components/CardWrapper";

async function Historias() {
    const data = await getActiveStories()
    
    return (
        <main className="mx-mobile my-28 sm:m-tablet  lg:m-desktop">
            <section className="m-auto max-w-content">
                <TitleSection
                    titleTextContent="Historias de nuestros rescatados"
                    spanTextContent="Conocé las historias de nuestros rescatados"
                />

                <CardWrapper items={data} />

                <div>
                    <h2 className="text-primary text-h2 font-bold leading-120 mt-12 mb-12 text-center">¡Esto no sería posible sin tu ayuda y la de nuestros voluntarios!</h2>
                </div>
            </section>
        </main>
    )
}

export default Historias;
