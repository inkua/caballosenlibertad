import { TitleSection } from "../components/TitleSection"
import Image from "next/image";

function Denuncias() {
    return (
        <main className="mx-mobile my-28 sm:m-tablet  lg:m-desktop">
            <section className="m-auto max-w-content">
                <TitleSection
                    titleTextContent="Denuncias"
                    spanTextContent="Enterate de como actuar si ves una situación de maltrato animal."
                />

                <div>
                    <h2 className="text-primary text-h2 font-bold leading-120 mt-12 mb-12">¿Cómo reportar situación de maltrato?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-32 lg:gap-x-72 gap-y-24 md:gap-y-24 lg:gap-y-32 items-start">
                        <div className="flex flex-col w-full justify-center items-center gap-8">
                            <div className="flex justify-center items-center w-[60%] aspect-square bg-primary2 rounded-full overflow-hidden">
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

                        <div className="flex flex-col w-full justify-center items-center gap-8">
                        <div className="flex justify-center items-center w-[60%] aspect-square bg-primary2 rounded-full overflow-hidden">
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
                                Dirigete a la Fiscalía para realizar la misma. Tambien <span className="font-bold">se puede denunciar a los oficiales con nombre y apellido</span> que no quisieron tomarla o, en su defecto, el número del operador del <span className="font-bold">911</span>.
                            </p>
                        </div>

                        <div className="flex flex-col w-full justify-center items-center gap-8">
                        <div className="flex justify-center items-center w-[60%] aspect-square bg-primary2 rounded-full overflow-hidden">
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

                        <div className="flex flex-col w-full justify-center items-center gap-8">
                        <div className="flex justify-center items-center w-[60%] aspect-square bg-primary2 rounded-full overflow-hidden">
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
                                Todas las leyes se aplican cuando el delito fue cometido. No se puede denunciar de forma «preventiva» y sin pruebas concretas.                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Denuncias;
