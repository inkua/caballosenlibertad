import Image from "next/image";

import { TitleSection } from "../components/TitleSection"

export const metadata = {
    title: "Denuncias",
    description: "Enterate de como actuar si ves una situación de maltrato animal."
}

function Denuncias() {
    return (
        <main className="py-[70px] lg:py-[90px]">
            <TitleSection
                titleTextContent="Denuncias"
                spanTextContent="Enterate de como actuar si ves una situación de maltrato animal."
            />

            <section className="m-auto max-w-content px-mobile md:px-tablet lg:px-desktop">
                <h2 className="text-primary text-h2 font-bold leading-120 mt-12 mb-6">¿Cómo reportar una situación de maltrato?</h2>
                <h3 className='text-[20px] sm:text-[28px] lg:text-[33px] xl:text-[38px] leading-140 font-light opacity-90 col-span-full md:col-start-1 md:col-end-10 lg:col-end-10 mb-8 md:mb-10'>Seguí estos dos pasos:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20 gap-y-10 md:gap-y-4 items-start mt-4 mb-20 md:mb-28">
                    <div role="group" className="flex flex-col w-full justify-center items-center gap-1">
                        <div className="flex justify-center items-center w-[45%] lg:w-[38%] aspect-square bg-primary2 rounded-full overflow-hidden mb-4 xl:mb-6">
                            <Image
                                src={'/assets/denuncias/denuncia_01.png'}
                                alt={'No disponible'}
                                width={700}
                                height={700}
                                className="object-cover w-[70%] h-auto"
                                loading="eager"
                            />
                        </div>
                        <span className="font-bold text-2xl text-primary  text-center">PRIMER PASO:</span>
                        <h4 className="text-primary text-2xl italic font-medium text-center mb-2">Denunciar</h4>
                        <p className="text-base md:text-xl xl:text-2xl font-light text-center">
                            Podés llamar al <span className="font-bold">911</span> o dirigirte a la <span className="font-bold">Fiscalía más cercana</span> de la zona en donde ocurre el delito.
                        </p>
                    </div>
                    <div role="group" className="flex flex-col w-full justify-center items-center gap-1">
                        <div className="flex justify-center items-center w-[45%] lg:w-[38%] aspect-square bg-primary2 rounded-full overflow-hidden mb-4 xl:mb-6">
                            <Image
                                src={'/assets/denuncias/denuncia_05.png'}
                                alt={'No disponible'}
                                width={700}
                                height={700}
                                className="object-cover w-[70%] h-auto"
                                loading="eager"
                            />
                        </div>
                        <span className="font-bold text-2xl text-primary  text-center">SEGUNDO PASO:</span>
                        <h4 className="text-primary text-2xl italic font-medium text-center mb-2">Alertar</h4>
                        <p className="text-base md:text-xl xl:text-2xl font-light text-center">
                            <span className="font-bold">Luego de haber hecho la denuncia,</span> contactate con nosotros a través de nuestra cuenta de <a className="text-primary font-semibold" href="https://www.instagram.com/caballosenlibertadlp/" target="_blank" rel="noopener noreferrer">Instagram</a>.
                        </p>
                    </div>

                </div>


                <h3 className='text-[20px] sm:text-[28px] lg:text-[33px] xl:text-[38px] leading-140 font-light opacity-90 col-span-full md:col-start-1 md:col-end-10 lg:col-end-10 mb-8 md:mb-10'>A tener en cuenta:</h3>

                <div className="grid grid-cols-1 gap-y-20 items-start">
                    <div role="group" className="flex flex-col md:flex-row w-full justify-center items-center gap-5 md:gap-8 lg:gap-12 xl:gap-20">
                        <div className="flex justify-center items-center w-[45%] md:w-[128px] lg:w-[160px] aspect-square bg-primary2 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src={'/assets/denuncias/denuncia_02.png'}
                                alt={'No disponible'}
                                width={700}
                                height={700}
                                className="object-cover w-[70%] h-auto"
                                loading="eager"
                            />
                        </div>
                        <div>
                            <h4 className="font-bold text-2xl xl:text-3xl text-primary text-center md:text-left md:mb-4">Si no quieren tomar la denuncia</h4>
                            <p className="text-base md:text-xl xl:text-2xl font-light text-center md:text-left">
                                Dirigite a la Fiscalía o también podés <span className="font-bold">denunciar a los oficiales por nombre y apellido</span> al operador del <span className="font-bold">911</span>.
                            </p>
                        </div>
                    </div>

                    <div role="group" className="flex flex-col md:flex-row w-full justify-center items-center gap-5 md:gap-8 lg:gap-12 xl:gap-20">
                        <div className="flex justify-center items-center w-[45%] md:w-[128px] lg:w-[160px] aspect-square bg-primary2 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src={'/assets/denuncias/denuncia_03.png'}
                                alt={'No disponible'}
                                width={700}
                                height={700}
                                className="object-cover w-[70%] h-auto"
                                loading="eager"
                            />
                        </div>
                        <div>
                            <h4 className="font-bold text-2xl xl:text-3xl text-primary text-center md:text-left md:mb-4">Dónde es un delito</h4>
                            <p className="text-base md:text-xl xl:text-2xl font-light text-center md:text-left">
                                La tracción a sangre a tiro animal <span className="font-bold">sólo esta prohibida en CABA.</span> Los Municipios que tienen ordenanzas de prohibición son los de <span className="font-bold">La Plata, San Martín y Quilmes.</span>
                            </p>
                        </div>
                    </div>

                    <div role="group" className="flex flex-col md:flex-row w-full justify-center items-center gap-5 md:gap-8 lg:gap-12 xl:gap-20">
                        <div className="flex justify-center items-center w-[45%] md:w-[128px] lg:w-[160px] aspect-square bg-primary2 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src={'/assets/denuncias/denuncia_04.png'}
                                alt={'No disponible'}
                                width={700}
                                height={700}
                                className="object-cover w-[70%] h-auto"
                                loading="eager"
                            />
                        </div>
                        <div>
                            <h4 className="font-bold text-2xl xl:text-3xl text-primary text-center md:text-left md:mb-4">Cuándo puedo denunciar</h4>
                            <p className="text-base md:text-xl xl:text-2xl font-light text-center md:text-left">
                                Todas las leyes se aplican cuando el delito fue cometido. <span className="font-bold">No se puede denunciar de forma preventiva</span> y sin pruebas concretas.
                            </p>
                        </div>
                    </div>

                    <div role="group" className="flex flex-col md:flex-row w-full justify-center items-center gap-5 md:gap-8 lg:gap-12 xl:gap-20">
                        <div className="flex justify-center items-center w-[45%] md:w-[128px] lg:w-[160px] aspect-square bg-primary2 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src={'/assets/denuncias/denuncia_06.png'}
                                alt={'No disponible'}
                                width={700}
                                height={700}
                                className="object-cover w-[70%] h-auto"
                                loading="eager"
                            />
                        </div>
                        <div className="">
                            <h4 className="font-bold text-2xl xl:text-3xl text-primary text-center md:text-left md:mb-4">Procedimientos según la situación</h4>
                            <p className="text-base md:text-xl xl:text-2xl font-light text-center md:text-left">
                                Conocé los pasos específicos a seguir <span className="font-bold">según el tipo de maltrato animal</span>. Accedé al documento con los procedimientos detallados haciendo clic <a className="text-primary font-semibold" href="https://drive.google.com/drive/folders/1NsZ-8PJKt5p4zL0SojHhAcgSaETyoKSP" target="_blank" rel="noopener noreferrer">aquí</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Denuncias;
