import React from 'react';

const SobreNosotros = () => {
    return (
        <>
            <section className="w-full h-auto bg-[#00638C] md:bg-white items-center ">
                <img className="landing-image hidden lg:block object-cover w-full h-[480px]" src="assets/Img 1-Caballos.jpg" alt="Caballos rescatados" />
                <div className="pb-10">

                    <h2 class="pt-4 text-[20px] font-light text-white md:text-darkBlue md:text-3xl p-responsive">Nuestra Misión</h2>
                    <h1 className="text-[25px] font-extrabold text-white md:text-primary md:text-2xl lg:text-6xl p-responsive">
                        Rescatamos, rehabilitamos y reubicamos caballos
                    </h1>

                    <div className='h-auto mt-[50px]'>

                        <article className="md:h-[390px] flex flex-col md:flex-row items-center justify-center mb-24 relative max-w-[1044px] mx-auto p-responsive">
                            <img className="hidden md:block absolute -left-10 z-20 h-96 w-96 rounded-full object-cover " src="assets/Img 2-Caballos.jpg" alt="Caballos en libertad" />
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
                            <img className="hidden md:block absolute -right-10 z-20 object-cover rounded-full w-[390px] h-[390px] lg:w-[390px] lg:h-[390px]" src="assets/Img 3-Mapa.png" alt="Ubicación La Plata" />
                            <div className="md:bg-[#00638C] text-black md:text-white content-center md:rounded-[60px] flex-1 mt-4 md:mt-0 md:mr-10 lg:mr-6  md:h-[280px]">
                                <img className="md:hidden aspect-square w-full md:w-auto md:h-auto mx-auto rounded-full object-cover mb-8 max-w-[390px]" src="assets/Img 3-Mapa.png" alt="Ubicación La Plata" />
                                <p className=" md:text-[20px] md:mr-64 lg:mr-80 py-4 leading-relaxed md:font-light">
                                    Nos ubicamos en <strong className='font-bold'>Zona Sur, ciudad de La Plata, Provincia de Buenos
                                        Aires</strong> (uno de los principales epicentros de maltrato y abandono equino).
                                </p>
                            </div>
                        </article>

                        <article className="md:h-[390px] flex flex-col md:flex-row items-center justify-center my-24 relative max-w-[1044px] mx-auto p-responsive">
                            <img className="hidden md:block absolute -left-10 z-20 object-cover rounded-full w-[390px] h-[390px] lg:w-[390px] lg:h-[390px]" src="assets/Img 4-Dr.png" alt="Doctor Juan Oliden" />
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
                            <img className="hidden md:block absolute -right-10 z-20 object-cover rounded-full w-[390px] h-[390px] lg:w-[390px] lg:h-[390px]" src="assets/Img 5-Caballos.jpg" alt="Esperanza de libertad para los caballos" />
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
                    <h2 className="hidden md:block font-bold md:text-5xl text-center md:text-center text-[#00638C] md:w-full">
                        ¡Apostamos a un futuro con derechos e igualdad para todos los animales!
                    </h2>
                </div>

                <img className="hidden md:block w-full h-auto sm:h-[300px] md:h-[400px] lg:h-[480px] object-cover" src="assets/Img 6-Equipo.jpg" alt="Equipo de la ONG" />
            </section>
        </>
    );
};

export default SobreNosotros;
