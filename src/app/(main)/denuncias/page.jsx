import Image from "next/image";

import { TitleSection } from "../components/TitleSection"

function Denuncias() {
    return (
        <main className="py-[70px] lg:py-[90px]">
            <TitleSection
                titleTextContent="Denuncias"
                spanTextContent="Enterate de como actuar si ves una situación de maltrato animal."
            />

            <section className="m-auto max-w-content px-mobile md:px-tablet lg:px-desktop">
                <div>
                    <h2 className="text-primary text-h2 font-bold leading-120 mt-12 mb-12">¿Cómo reportar una situación de maltrato?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20 gap-y-20 md:gap-y-24 items-start">
                        <div role="group" className="flex flex-col w-full justify-center items-center gap-5 lg:gap-8">
                            <div className="flex justify-center items-center w-[45%] lg:w-[38%] aspect-square bg-primary2 rounded-full overflow-hidden">
                                <Image
                                    src={'/assets/denuncias/denuncia_01.png'}
                                    alt={'No disponible'}
                                    width={700}
                                    height={700}
                                    className="object-cover w-[70%] h-auto"
                                    loading="eager"
                                />
                            </div>
                            <h2 className="text-h2 text-primary font-bold text-center">Denunciar</h2>
                            <p className="text-p2 text-center">
                                Podés llamar al <span className="font-bold">911</span> o dirigirte a la <span className="font-bold">Fiscalía más cercana</span> de la zona en donde ocurre el delito.
                            </p>
                        </div>

                        <div role="group" className="flex flex-col w-full justify-center items-center gap-8">
                            <div className="flex justify-center items-center w-[45%] lg:w-[38%] aspect-square bg-primary2 rounded-full overflow-hidden">
                                <Image
                                    src={'/assets/denuncias/denuncia_02.png'}
                                    alt={'No disponible'}
                                    width={700}
                                    height={700}
                                    className="object-cover w-[70%] h-auto"
                                    loading="eager"
                                />
                            </div>
                            <h2 className="text-h2 text-primary font-bold text-center">Si no quieren tomar la denuncia</h2>
                            <p className="text-p2 text-center">
                                Dirigite a la Fiscalía o también podés <span className="font-bold">denunciar a los oficiales por nombre y apellido</span> al operador del <span className="font-bold">911</span>.
                            </p>
                        </div>

                        <div role="group" className="flex flex-col w-full justify-center items-center gap-8">
                            <div className="flex justify-center items-center w-[45%] lg:w-[38%] aspect-square bg-primary2 rounded-full overflow-hidden">
                                <Image
                                    src={'/assets/denuncias/denuncia_03.png'}
                                    alt={'No disponible'}
                                    width={700}
                                    height={700}
                                    className="object-cover w-[70%] h-auto"
                                    loading="eager"
                                />
                            </div>
                            <h2 className="text-h2 text-primary font-bold text-center">Dónde es un delito</h2>
                            <p className="text-p2 text-center">
                                La tracción a sangre a tiro animal <span className="font-bold">sólo esta prohibida en CABA.</span> Los Municipios que tienen ordenanzas de prohibición son los de <span className="font-bold">La Plata, San Martín y Quilmes.</span>
                            </p>
                        </div>

                        <div role="group" className="flex flex-col w-full justify-center items-center gap-8">
                            <div className="flex justify-center items-center w-[45%] lg:w-[38%] aspect-square bg-primary2 rounded-full overflow-hidden">
                                <Image
                                    src={'/assets/denuncias/denuncia_04.png'}
                                    alt={'No disponible'}
                                    width={700}
                                    height={700}
                                    className="object-cover w-[70%] h-auto"
                                    loading="eager"
                                />
                            </div>
                            <h2 className="text-h2 text-primary font-bold text-center">Cuándo puedo denunciar</h2>
                            <p className="text-p2 text-center">
                                Todas las leyes se aplican cuando el delito fue cometido. <span className="font-bold">No se puede denunciar de forma preventiva</span> y sin pruebas concretas.                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Denuncias;
