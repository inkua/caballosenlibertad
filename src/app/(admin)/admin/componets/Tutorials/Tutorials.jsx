"use client"

import TutorialItem from "./TutorialItem/TutorialItem"

const Tutorials = () => {
    return (
        <section className="bg-white mt-4 rounded-md">
            <div className="container px-6 py-12 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl">Tutoriales</h1>

                <div className="mt-8 space-y-8 lg:mt-12">
                    <TutorialItem 
                        title="Lógica administradores" 
                        videoUrl="https://youtube.com/embed/OD7VUkfWDJQ"
                    />
                    <TutorialItem 
                        title="Estadisticas e imágen de equipo" 
                        videoUrl="https://youtube.com/embed/UZqX9Sl1eRY "
                    />
                    <TutorialItem 
                        title="Métodos de pagos" 
                        videoUrl="https://youtube.com/embed/aJA6oi1ZtIE"
                    />
                    <TutorialItem 
                        title="Adopciones e historias" 
                        videoUrl="https://youtube.com/embed/YcT18ZmeXr4"
                    />
                    <TutorialItem 
                        title="Eventos / Novedades" 
                        videoUrl="https://youtube.com/embed/1i4pxcZfO4E"
                    />


                </div>
            </div>
        </section>
    )
}

export default Tutorials
