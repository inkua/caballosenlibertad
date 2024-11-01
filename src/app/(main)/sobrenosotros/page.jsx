import React from 'react';

const SobreNosotros = () => {
    return (
        <section className="bg-white">
            <img className="hidden md:block object-cover w-[1440px] h-[670px] t-[90px]" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="Imagen circular y responsiva" />
            <div className="container px-6 py-16 mx-auto text-center">
                <span className="text-2xl font-semibold text-[#03151F] lg:text-xl">Nuestra Misión</span>
                <h1 className="font-bold text-4xl text-[#00638C] mt-4">Rescatamos, rehabilitamos y reubicamos caballos</h1>

                <article className="flex items-start mt-8">
                    <img className="object-cover rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="Imagen circular y responsiva" />
                    <div className="bg-[#00638C] text-white p-4 rounded-lg flex-1">
                        <p className="text-sm">
                        <span className="font-bold">Caballos en libertad</span> nace hace más de 10 años como una Asociación civil sin fines de lucro encargada de la protección, cuidado y rescate de equinos, siendo una de las más importantes de la Provincia de Buenos Aires.
                        </p>
                    </div>
                </article>

                <article className="flex items-start mt-8">
                    <img className="object-cover rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="Imagen circular y responsiva" />
                    <div className="bg-[#00638C] text-white p-4 rounded-lg flex-1">
                        <p className="text-sm">
                            Nos ubicamos en Zona Sur, ciudad de La Plata, Provincia de Buenos Aires (uno de los principales epicentros de maltrato y abandono equino).
                        </p>
                    </div>
                </article>

                <article className="flex items-start mt-8">
                    <img className="object-cover rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="Imagen circular y responsiva" />
                    <div className="bg-[#00638C] text-white p-4 rounded-lg flex-1">
                        <p className="text-sm">
                            Nuestra ONG cuenta con el apoyo de una eminencia en veterinaria, el doctor Juan Oliden quien, junto a nuestros voluntarios, y gracias a la colaboración ciudadana, brinda a nuestros rescatados la atención, el amor y la medicación que en algunos casos corresponde.
                        </p>
                    </div>
                </article>

                <article className="flex items-start mt-8">
                    <img className="object-cover rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="Imagen circular y responsiva" />
                    <div className="bg-[#00638C] text-white p-4 rounded-lg flex-1">
                        <p className="text-sm">
                            Con la esperanza de un día verlos libres, felices y sin ser utilizados como objetos para la tracción a sangre, esperamos poder construir un futuro libre de crueldad animal, en donde cada persona aporte su granito de arena y participe en casos de indiferencia o maltrato a cualquier ser vivo.
                        </p>
                    </div>
                </article>
            </div>

                <h2 className="font-bold text-center text-[20px] md:text-[30px] text-[#00638C] mt-10">¡Apostamos a un futuro con derechos e igualdad para todos los animales!</h2>
                <img className="hidden md:block object-cover w-full h-screen" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="Imagen circular y responsiva" />
        </section>
    );
};

export default SobreNosotros;
