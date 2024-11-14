import React from 'react';

const SobreNosotros = () => {
    return (
        
            <section className="w-full h-auto bg-[#00638C] md:bg-white items-center ">
                <header className='hidden md:block bg-hero-nosotros bg-cover bg-no-repeat bg-center w-full aspect-hero'>
                </header>

                <div className="pb-10">

                    <h2 class="pt-4 md:pt-20 lg:pt-28 text-[20px] font-extralight text-white md:text-darkBlue md:text-3xl p-responsive ">Nuestra Misión</h2>
                    <h1 className="text-[25px] md:mt-4 lg:mt-6 font-extrabold text-white md:text-primary md:text-5xl lg:text-6xl p-responsive">
                        Rescatamos, rehabilitamos y reubicamos caballos
                    </h1>

                    <div className='h-auto mt-[50px] md:hidden'>

                        <article className="md:h-[390px] flex flex-col md:flex-row items-center justify-center mb-24 relative max-w-[1044px] mx-auto p-responsive">
                            <div className="bg-[#00638C] text-white content-center md:rounded-[60px] flex-1 mt-6 md:mt-0 md:ml-12 lg:ml-6 z-10 md:h-[280px]">
                                <img className="md:hidden aspect-square w-full md:w-auto md:h-auto mx-auto rounded-full object-cover mb-8 max-w-[390px]" src="assets/Img 2-Caballos.jpg" alt="Caballos en libertad" />
                                <p className=" md:text-[20px] md:ml-64 lg:ml-80 py-4 md:font-light whitespace-normal">
                                    <strong className="font-bold">Caballos en libertad</strong> nace hace más de 10 años
                                    como una Asociación civil sin fines de lucro encargada de la protección, cuidado
                                    y rescate de equinos, siendo una de las más importantes de la Provincia de Buenos Aires.
                                </p>
                            </div>
                        </article>

                        <article className="md:h-[390px] bg-white flex flex-col md:flex-row-reverse items-center justify-center py-24 relative max-w-[1044px] mx-auto p-responsive">
                            <div className="md:bg-[#00638C] text-black md:text-white content-center md:rounded-[60px] flex-1 mt-4 md:mt-0 md:mr-10 lg:mr-6  md:h-[280px]">
                                <img className="md:hidden aspect-square w-full md:w-auto md:h-auto mx-auto rounded-full object-cover mb-8 max-w-[390px]" src="assets/Img 3-Mapa.png" alt="Ubicación La Plata" />
                                <p className=" md:text-[20px] md:mr-64 lg:mr-80 py-4 leading-relaxed md:font-light">
                                    Nos ubicamos en <strong className='font-bold'>Zona Sur, ciudad de La Plata, Provincia de Buenos
                                        Aires</strong> (uno de los principales epicentros de maltrato y abandono equino).
                                </p>
                            </div>
                        </article>

                        <article className="md:h-[390px] flex flex-col md:flex-row items-center justify-center my-24 relative max-w-[1044px] mx-auto p-responsive">
                            <div className="bg-[#00638C] text-white content-center md:rounded-[60px] flex-1 mt-4 md:mt-0 md:ml-10 lg:ml-6 z-10 md:h-[280px]">
                                <img className="md:hidden aspect-square w-full md:w-auto md:h-auto mx-auto rounded-full object-cover mb-8 max-w-[390px]" src="assets/Img 4-Dr.png" alt="Doctor Juan Oliden" />
                                <p className=" md:text-[20px] md:ml-64 lg:ml-80 py-4 leading-relaxed md:font-light">
                                    Nuestra ONG cuenta con el apoyo de una eminencia en veterinaria,
                                    el <strong className='font-bold'>Doctor Juan Oliden</strong> quien, junto a nuestros voluntarios,
                                    y gracias a la colaboración ciudadana, brinda a nuestros rescatados
                                    la atención, el amor y la medicación que en algunos casos corresponde.
                                </p>
                            </div>
                        </article>

                        <article className="md:h-auto bg-white flex flex-col md:flex-row-reverse items-center justify-center py-24 relative max-w-[1044px] mx-auto p-responsive">
                            <div className="md:bg-[#00638C] text-black md:text-white content-center md:rounded-[60px] flex-1 mt-4 md:mt-0 md:mr-10 lg:mr-6  md:h-[280px]">
                                <img className="md:hidden aspect-square w-full mx-auto rounded-full object-cover mb-8 max-w-[390px]" src="assets/Img 5-Caballos.jpg" alt="Esperanza de libertad para los caballos" />
                                <p className=" md:text-[20px] md:mr-64 lg:mr-80 py-4 leading-relaxed md:font-light">
                                    Con la esperanza de un día verlos libres, felices y sin ser utilizados
                                    como objetos para la tracción a sangre, esperamos poder construir un <strong className='font-bold'>futuro
                                        libre de crueldad animal</strong>, en donde cada persona aporte su granito de arena y
                                    participe en casos de indiferencia o maltrato a cualquier ser vivo.
                                </p>
                                <h2 className="font-bold  text-center  text-[#00638C] md:hidden mt-16">
                                    ¡Apostamos a un futuro con derechos e igualdad para todos los animales!
                                </h2>
                            </div>

                        </article>
                    </div>
                    {/* krhehgjerj gjero jg;jewrio gjoi;er goierioj hgoiertjoih jeortij hoerjt  o;hjertioj hertj */}
                    <div className='h-auto mt-[95px] lg:mt-[120px] hidden md:block'>
                        <article className="pb-6 relative max-w-[1044px] mx-auto p-responsive lg:px-12 xl:px-0 grid grid-cols-7 items-center">
                            <img className="object-cover rounded-full w-[390px] xl:w-[500px] aspect-square col-start-1 col-end-4 col-span-3 row-start-1 z-10" src="/assets/Img 4-Dr.png" alt="Esperanza de libertad para los caballos" />
                            <div className="bg-[#00638C] text-white content-center rounded-[50px] col-start-3 col-end-8 col-span-5 row-start-1 h-48 lg:h-[235px] xl:h-[280px]">
                                <div className='flex justify-end w-full '>
                                    <p className="text-[14px] lg:text-lg py-4 leading-relaxed md:font-light xl:text-xl w-[68%] xl:w-[527px] mr-10">
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
                                    <p className="text-[14px] lg:text-lg xl:text-xl py-4 leading-relaxed md:font-light w-[68%] xl:w-[527px] ml-12">
                                        Con la esperanza de un día verlos libres, felices y sin ser utilizados
                                        como objetos para la tracción a sangre, esperamos poder construir un <strong className='font-bold'>futuro
                                            libre de crueldad animal</strong>, en donde cada persona aporte su granito de arena y
                                        participe en casos de indiferencia o maltrato a cualquier ser vivo.
                                    </p>
                                </div>
                            </div>
                            <div className='col-start-5 col-end-8 col-span-3 row-start-1 flex justify-end'>
                                <img className="object-cover rounded-full w-[390px] xl:w-[500px] aspect-square " src="/assets/Img 5-Caballos.jpg" alt="Esperanza de libertad para los caballos" />
                            </div>
                        </article>

                        <article className="py-6 relative max-w-[1044px] mx-auto p-responsive lg:px-12 xl:px-0 grid grid-cols-7 items-center">
                            <img className="object-cover rounded-full w-[390px] xl:w-[500px] aspect-square col-start-1 col-end-4 col-span-3 row-start-1 z-10" src="/assets/Img 4-Dr.png" alt="Esperanza de libertad para los caballos" />
                            <div className="bg-[#00638C] text-white content-center rounded-[50px] col-start-3 col-end-8 col-span-5 row-start-1 h-48 lg:h-[235px] xl:h-[280px]">
                                <div className='flex justify-end w-full '>
                                    <p className="text-[14px] lg:text-lg py-4 leading-relaxed md:font-light xl:text-xl w-[68%] xl:w-[527px] mr-10">
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
                                    <p className="text-[14px] lg:text-lg xl:text-xl py-4 leading-relaxed md:font-light w-[68%] xl:w-[527px] ml-12">
                                        Con la esperanza de un día verlos libres, felices y sin ser utilizados
                                        como objetos para la tracción a sangre, esperamos poder construir un <strong className='font-bold'>futuro
                                            libre de crueldad animal</strong>, en donde cada persona aporte su granito de arena y
                                        participe en casos de indiferencia o maltrato a cualquier ser vivo.
                                    </p>
                                </div>
                            </div>
                            <div className='col-start-5 col-end-8 col-span-3 row-start-1 flex justify-end'>
                                <img className="object-cover rounded-full w-[390px] xl:w-[500px] aspect-square " src="/assets/Img 5-Caballos.jpg" alt="Esperanza de libertad para los caballos" />
                            </div>
                        </article>


                    </div>
                    <h2 className="hidden md:block py-14 font-bold md:text-5xl text-center md:text-center text-[#00638C] md:w-full lg:max-w-[1042] !leading-140">
                        ¡Apostamos a un futuro con derechos e igualdad para todos los animales!
                    </h2>
                </div>

                <img className="hidden md:block w-full h-auto sm:h-[300px] md:h-[400px] lg:h-[480px] object-cover" src="assets/Img 6-Equipo.jpg" alt="Equipo de la ONG" />
            </section>
    );
};

export default SobreNosotros;
