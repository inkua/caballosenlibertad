import Image from 'next/image';
import FooterTeam from './FooterTeam/FooterTeam';

const Nosotros = () => {
    return (
        <main className=''>
            <header className="hidden md:block bg-hero-nosotros bg-cover bg-center bg-no-repeat w-full max-w-banner mx-auto aspect-[9/3] ">
            </header>

            <section className="w-full h-auto bg-[#00638C] md:bg-whitePrimary items-center pt-[70px] max-w-content px-mobile md:px-tablet lg:px-desktop mx-auto">

                <div className="pb-10">

                    <h2 className="pt-[1rem] md:pt-0 text-[20px] font-light text-white md:text-darkBlue md:text-3xl ">
                        Nuestra Misión
                    </h2>
                    <h1 className="text-[25px] md:mt-[1rem] lg:mt-[1.5rem] font-extrabold text-white md:text-primary md:text-5xl lg:text-6xl">
                        Rescatamos, rehabilitamos y reubicamos caballos
                    </h1>

                    <div className="h-auto md:hidden">


                        <article className="md:h-[390px] flex flex-col md:flex-row items-center justify-center mb-24 relative max-w-[1440px] mx-auto py-[1rem] md:py-[4rem] lg:py-[8rem]">
                            <div className="bg-[#00638C] text-white content-center md:rounded-[60px] flex-1 mt-6 md:mt-0 md:ml-12 lg:ml-6 z-10 md:h-[280px]">
                                <Image className="md:hidden aspect-square w-full md:w-auto md:h-auto mx-auto rounded-full object-cover mb-8 max-w-[390px]" src="/assets/caballos_rescatados.jpg" alt="Caballos en libertad" width={400} height={400} />
                                <p className=" md:text-[20px] md:ml-64 lg:ml-80 py-4 md:font-light whitespace-normal">
                                    <strong className="font-bold">Caballos en libertad</strong> nace hace más de 10 años
                                    como una Asociación civil sin fines de lucro encargada de la protección, cuidado
                                    y rescate de equinos, siendo una de las más importantes de la Provincia de Buenos Aires.
                                </p>
                            </div>
                        </article>

                        <article className="md:h-[390px] bg-white flex flex-col md:flex-row-reverse items-center justify-center relative max-w-[1440px] mx-auto p-[1rem] md:p-[4rem] lg:p-[8rem] rounded-[10px]">
                            <div className="md:bg-[#00638C] text-black md:text-white content-center md:rounded-[60px] flex-1 mt-4 md:mt-0 md:mr-10 lg:mr-6 md:h-[280px]">
                                <Image className="md:hidden aspect-square w-full md:w-auto md:h-auto mx-auto rounded-full object-cover mb-8 max-w-[390px]" src="/assets/ubicación_mapa.png" alt="Ubicación La Plata" width={400} height={400} />
                                <p className=" md:text-[20px] md:mr-64 lg:mr-80 py-4 leading-relaxed md:font-light">
                                    Nos ubicamos en <strong className='font-bold'>Zona Sur, ciudad de La Plata, Provincia de Buenos
                                        Aires</strong> (uno de los principales epicentros de maltrato y abandono equino).
                                </p>
                            </div>
                        </article>

                        <article className="md:h-[390px] flex flex-col md:flex-row items-center justify-center my-24 relative max-w-[1440px] mx-auto p-[1rem] md:p-[4rem] lg:p-[8rem]">
                            <div className="bg-[#00638C] text-white content-center md:rounded-[60px] flex-1 mt-4 md:mt-0 md:ml-10 lg:ml-6 z-10 md:h-[280px]">
                                <Image className="md:hidden aspect-square w-full md:w-auto md:h-auto mx-auto rounded-full object-cover mb-8 max-w-[390px]" src="/assets/doctor_veterinario.jpg" alt="Doctor Juan Oliden" width={400} height={400} loading='lazy' />
                                <p className=" md:text-[20px] md:ml-64 lg:ml-80 py-4 leading-relaxed md:font-light">
                                    Nuestra ONG cuenta con el apoyo de una eminencia en veterinaria,
                                    el <strong className='font-bold'>Doctor Juan Oliden</strong> quien, junto a nuestros voluntarios,
                                    y gracias a la colaboración ciudadana, brinda a nuestros rescatados
                                    la atención, el amor y la medicación que en algunos casos corresponde.
                                </p>
                            </div>
                        </article>

                        <article className="md:h-auto bg-white flex flex-col md:flex-row-reverse items-center justify-center pb-16 relative max-w-[1440px] mx-auto p-[1rem] md:p-[4rem] lg:p-[8rem] rounded-[10px]">
                            <div className="md:bg-[#00638C] text-black md:text-white content-center md:rounded-[60px] flex-1 mt-4 md:mt-0 md:mr-10 lg:mr-6 md:h-[280px]">
                                <Image className="md:hidden aspect-square w-full mx-auto rounded-full object-cover mb-8 max-w-[390px]" src="/assets/caballos_atardecer.jpg" alt="Esperanza de libertad para los caballos" width={400} height={400} loading='lazy' />
                                <p className=" md:text-[20px] md:mr-64 lg:mr-80 py-4 leading-relaxed md:font-light">
                                    Con la esperanza de un día verlos libres, felices y sin ser utilizados
                                    como objetos para la tracción a sangre, esperamos poder construir un <strong className='font-bold'>futuro
                                        libre de crueldad animal</strong>, en donde cada persona aporte su granito de arena y
                                    participe en casos de indiferencia o maltrato a cualquier ser vivo.
                                </p>
                                <h2 className="font-bold text-center  text-[#00638C] md:hidden mt-16">
                                    ¡Apostamos a un futuro con derechos e igualdad para todos los animales!
                                </h2>
                            </div>

                        </article>
                    </div>
                    {/* Sección de contenido sobre la ONG */}
                    <div className="h-auto mt-[80px] hidden md:block">
                        <article className="pb-6 relative max-w-[1044px] mx-auto p-responsive lg:px-12 xl:px-0 grid grid-cols-7 items-center">
                            <Image className="object-cover rounded-full w-[390px] xl:w-[500px] aspect-square col-start-1 col-end-4 col-span-3 row-start-1 z-10" src="/assets/caballos_rescatados.jpg" alt="Esperanza de libertad para los caballos" width={400} height={400} />
                            <div className="bg-[#00638C] text-white content-center rounded-[50px] col-start-3 col-end-8 col-span-5 row-start-1 h-48 lg:h-[235px] xl:h-[280px]">
                                <div className='flex justify-end w-full '>
                                    <p className="text-[14px] lg:text-lg py-4 leading-relaxed md:font-light xl:text-xl w-[68%] xl:w-[527px] mr-10">
                                        <strong className="font-bold">Caballos en libertad</strong> nace hace más de 10 años
                                        como una Asociación civil sin fines de lucro encargada de la protección, cuidado
                                        y rescate de equinos, siendo una de las más importantes de la Provincia de Buenos Aires.
                                    </p>
                                </div>
                            </div>
                        </article>

                        <article className="py-6 relative max-w-[1044px] mx-auto p-responsive lg:px-12 xl:px-0 grid grid-cols-7 items-center">
                            <div className="bg-[#00638C] text-white content-center rounded-[50px] col-start-1 col-end-6 col-span-5 row-start-1 h-48 lg:h-[235px] xl:h-[280px]">
                                <div className='flex justify-start w-full '>
                                    <p className="text-[14px] lg:text-lg xl:text-xl py-4 leading-relaxed md:font-light w-[68%] xl:w-[527px] ml-12">
                                        Nos ubicamos en <strong className='font-bold'>Zona Sur, ciudad de La Plata, Provincia de Buenos
                                            Aires</strong> (uno de los principales epicentros de maltrato y abandono equino).
                                    </p>
                                </div>
                            </div>
                            <div className='col-start-5 col-end-8 col-span-3 row-start-1 flex justify-end'>
                                <Image className="object-cover rounded-full w-[390px] xl:w-[500px] aspect-square " src="/assets/ubicación_mapa.png" alt="Esperanza de libertad para los caballos" width={400} height={400} loading='lazy'/>
                            </div>
                        </article>

                        <article className="py-6 relative max-w-[1044px] mx-auto p-responsive lg:px-12 xl:px-0 grid grid-cols-7 items-center">
                            <Image
                                className="object-cover rounded-full w-[390px] xl:w-[500px] aspect-square col-start-1 col-end-4 col-span-3 row-start-1 z-10"
                                src="/assets/doctor_veterinario.jpg"
                                alt="Esperanza de libertad para los caballos"
                                loading='lazy'
                                width={500}
                                height={500}
                            />
                            <div className="bg-[#00638C] text-white content-center rounded-[50px] col-start-3 col-end-8 col-span-5 row-start-1 h-48 lg:h-[235px] xl:h-[280px]">
                                <div className='flex justify-end w-full '>
                                    <p className="text-[13px] lg:text-base py-4 leading-relaxed md:font-light xl:text-xl w-[68%] xl:w-[527px] mr-10">
                                        Nuestra ONG cuenta con el apoyo de una eminencia en veterinaria,
                                        el <strong className='font-bold'>Doctor Juan Oliden</strong> quien, junto a nuestros voluntarios,
                                        y gracias a la colaboración ciudadana, brinda a nuestros rescatados
                                        la atención, el amor y la medicación que en algunos casos corresponde.
                                    </p>
                                </div>
                            </div>
                        </article>

                        <article className="py-6 relative max-w-[1044px] mx-auto p-responsive lg:px-12 xl:px-0 grid grid-cols-7 items-center">
                            <div className="bg-[#00638C] text-white content-center rounded-[50px] col-start-1 col-end-6 col-span-5 row-start-1 h-48 lg:h-[235px] xl:h-[280px]">
                                <div className='flex justify-start w-full '>
                                    <p className="text-[12px] lg:text-base xl:text-xl py-4 leading-relaxed md:font-light w-[68%] xl:w-[527px] ml-12">
                                        Con la esperanza de un día verlos libres, felices y sin ser utilizados
                                        como objetos para la tracción a sangre, esperamos poder construir un <strong className='font-bold'>futuro
                                            libre de crueldad animal</strong>, en donde cada persona aporte su granito de arena y
                                        participe en casos de indiferencia o maltrato a cualquier ser vivo.
                                    </p>
                                </div>
                            </div>
                            <div className='col-start-5 col-end-8 col-span-3 row-start-1 flex justify-end'>
                                <Image
                                    className="object-cover rounded-full w-[390px] xl:w-[500px] aspect-square "
                                    src="/assets/caballos_atardecer.jpg"
                                    alt="Esperanza de libertad para los caballos"
                                    loading='lazy'
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </article>

                    </div>
                    <h2 className="hidden md:block text-center text-[25px] md:mt-mobile lg:mt-tablet font-extrabold text-[#00638C] md:text-3xl lg:text-4xl max-w-content !leading-140">
                        ¡Apostamos a un futuro con derechos e igualdad para todos los animales!
                    </h2>
                </div>

            </section>

            <FooterTeam />
        </main>
    );
};

export default Nosotros;
