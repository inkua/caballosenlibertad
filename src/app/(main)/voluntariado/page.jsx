import { AdopcionesCard } from "../adopciones/components/AdopcionesCard";
import { TitleSection } from "../components/TitleSection";

export const metadata = {
    title: "Voluntariado",
    description: "Sumate a nuestro equipo. Dado que no contamos con ningún subsidio de parte del Estado, realizamos las tareas gracias al apoyo de nuestros voluntarios."
}

function Voluntariado() {
    const titleForContactCard = "Ponte en contacto";
    const items = [
        {
            image: "/assets/voluntariado/icon1.svg",
            title: "Área de logistica",
            listItems: [
                "Encargado de logística de alimento y/o de viruta.",
                "Traslado de voluntarios al predio en casos excepcionales o de urgencia.",
                "Traslado de equinos.",
                "Colecta y traslado de donaciones.",
            ],
        },
        {
            image: "/assets/voluntariado/icon2.svg",
            title: "Área fuera del campo",
            listItems: [
                "Generador/a de ideas para recaudar fondos.",
                "Administrador/a de redes.",
                "Aportando conocimientos de tu profesión y/o dictando cursos a beneficio.",
                "Manejo de Photoshop para diseño de flyers.",
            ],
        },

        {
            image: "/assets/voluntariado/icon3.svg",
            title: "Área dentro del campo",
            listItems: [
                "Alimentación de nuestros rescatados.",
                "Cuidado y curación de los rescatados.",
                "Limpieza y armado de camas.",
                "Guardias nocturnas.",
                "Ayuda para levantar a los rescatados si no pueden.",
            ],
        },
    ];

    return (
        <main className="py-[70px] lg:py-[90px]">
            <TitleSection
                titleTextContent="Convertite en voluntario"
                spanTextContent="Sumate a nuestro equipo. Dado que no contamos con ningún subsidio de parte del Estado, realizamos las tareas gracias al apoyo de nuestros voluntarios."
            />
            <section className=" m-auto max-w-content mt-6 px-mobile md:px-tablet lg:px-desktop">
                <div role="region">
                    <h1 className="text-primary text-xl sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold leading-120">
                        ¿Qué tipo de voluntariado puedo realizar?
                    </h1>
                    <div className="my-[4rem] flex flex-col gap-6 md:gap-[6rem] md:flex-row items-baseline ">
                        {items.map((item, index) => (
                            <div role="group" key={index} className="flex flex-col items-center w-full">
                                <div className="aspect-square w-[130px] lg:w-[150px] bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${item.image})` }}>
                                </div>

                                <h3 className="text-primary text-xl my-[2rem] sm:text-[28px] md:text-[20px] lg:text-[32px] font-bold leading-120 text-center">
                                    {item.title}
                                </h3>
                                <ul className="list-inside md:list-outside self-start">
                                    {item.listItems.map((listItem, index) => (
                                        <li key={index} className="text-pretty mb-2">
                                            <div className="flex flex-row gap-4 items-start">
                                                <div className="aspect-square w-[16px] min-w-[16px] bg-no-repeat bg-center bg-contain bg-arrow mt-1" ></div>
                                                <p>
                                                    {listItem}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div role="region">
                    <h2 className="text-primary text-xl my-[3rem] sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold leading-120 ">
                        Si quieres ser voluntario
                    </h2>

                    <AdopcionesCard
                        titleCard={titleForContactCard}
                    />
                </div>
            </section>
        </main>
    );
}

export default Voluntariado;
