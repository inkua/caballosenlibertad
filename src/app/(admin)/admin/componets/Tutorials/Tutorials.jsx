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
                        videoUrl="https://www.youtube.com/embed/5F6buwus3hg?si=SXWRYYItM1vc8gMH"
                    />
                    <TutorialItem 
                        title="Estadisticas e imágen de equipo" 
                        videoUrl="https://www.youtube.com/embed/nzJ-2DWM84M"
                    />
                    <TutorialItem 
                        title="Métodos de pagos" 
                        videoUrl="https://www.youtube.com/embed/EZcODNxIbfM"
                    />
                    <TutorialItem 
                        title="Adopciones e historias" 
                        videoUrl="https://www.youtube.com/embed/EZcODNxIbfM"
                    />
                    <TutorialItem 
                        title="Novedades / Eventos" 
                        videoUrl="https://www.youtube.com/embed/EZcODNxIbfM"
                    />


                </div>
            </div>
        </section>
    )
}

export default Tutorials
