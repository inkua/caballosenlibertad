import React from 'react';

const SobreNosotros = () => {
  return (
    <section className="bg-white">
      <img className="landing-image hidden md:block object-cover w-full h-[480px]" src="/public/assets/Img 1-Caballos.jpg" alt="Caballos rescatados"/>
      <div className="container mx-auto px-4 py-8 text-left">
        <span className="text-2xl text-[#03151F] text-left">Nuestra Misión</span>
        <h1 className="font-bold text-center text-5xl text-[#00638C] mt-4">
          Rescatamos, rehabilitamos y reubicamos caballos
        </h1>

        <article className="flex flex-col md:flex-row items-center mt-8">
          <img className="object-cover rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72" src="assets/Img 2-Caballos.jpg" alt="Caballos en libertad"/>
          <div className="bg-[#00638C] text-white p-6 rounded-lg flex-1 mt-4 md:mt-0 md:ml-6">
            <p className="text-base">
              <span className="font-bold">Caballos en libertad</span> nace hace más de 10 años 
              como una Asociación civil sin fines de lucro encargada de la protección, cuidado 
              y rescate de equinos, siendo una de las más importantes de la Provincia de Buenos Aires.
            </p>
          </div>
        </article>

        <article className="flex flex-col md:flex-row-reverse items-center mt-8">
          <img className="object-cover rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72" src="/public/assets/Img 3-Mapa.png" alt="Ubicación La Plata"/>
          <div className="bg-[#00638C] text-white p-6 rounded-lg flex-1 mt-4 md:mt-0 md:ml-6">
            <p className="text-base">
              Nos ubicamos en Zona Sur, ciudad de La Plata, Provincia de Buenos
              Aires (uno de los principales epicentros de maltrato y abandono equino).
            </p>
          </div>
        </article>

        <article className="flex flex-col md:flex-row items-center mt-8">
          <img className="object-cover rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72" src="/public/assets/Img 4-Dr.png" alt="Doctor Juan Oliden"/>
          <div className="bg-[#00638C] text-white p-6 rounded-lg flex-1 mt-4 md:mt-0 md:ml-6">
            <p className="text-base">
              Nuestra ONG cuenta con el apoyo de una eminencia en veterinaria,
              el doctor Juan Oliden quien, junto a nuestros voluntarios, 
              y gracias a la colaboración ciudadana, brinda a nuestros rescatados
              la atención, el amor y la medicación que en algunos casos corresponde.
            </p>
          </div>
        </article>

        <article className="flex flex-col md:flex-row-reverse items-center mt-8">
          <img className="object-cover rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72" src="/public/assets/Img 5-Caballos.jpg" alt="Esperanza de libertad para los caballos"/>
          <div className="bg-[#00638C] text-white p-6 rounded-lg flex-1 mt-4 md:mt-0 md:ml-6">
            <p className="text-base">
              Con la esperanza de un día verlos libres, felices y sin ser utilizados 
              como objetos para la tracción a sangre, esperamos poder construir un futuro 
              libre de crueldad animal, en donde cada persona aporte su granito de arena y 
              participe en casos de indiferencia o maltrato a cualquier ser vivo.
            </p>
          </div>
        </article>
      </div>

      <h2 className="font-bold text-4xl text-center text-[#00638C]"> ¡Apostamos a un futuro con derechos e igualdad para todos los animales!</h2>
      <img className="hidden md:block object-cover w-full h-auto" src="/public/assets/Img 6-Equipo.jpg" alt="Equipo de la ONG"/>
    </section>
  );
};

export default SobreNosotros;
