import React from 'react';

const SobreNosotros = () => {
  return (
    <section className="bg-[#00638C] md:bg-white">
      <img className="landing-image hidden sm:block md:hidden lg:block object-cover w-full h-[480px]" src="assets/Img 1-Caballos.jpg" alt="Caballos rescatados" />
      <div className="md:px-4 py-8 text-left">
        <span className="font-extralight text-justify text-2xl text-white md:text-[#03151F] my-4 ml-[198px] h-[158px]">Nuestra Misión</span>
        <h1 className="font-bold text-justify text-6xl text-white md:text-[#00638C] my-4 ml-[198px] h-[158px]">
          Rescatamos, rehabilitamos y <br />
          reubicamos caballos
        </h1>

        <article className="md:h-[390px] flex flex-col md:flex-row items-center justify-center my-20 relative max-w-[1044px] mx-auto">
          <img className="hidden md:block absolute -left-10 z-20 object-cover rounded-full w-[390px] h-[390px] lg:w-[390px] lg:h-[390px]" src="assets/Img 2-Caballos.jpg" alt="Caballos en libertad"/>
          <div className="bg-[#00638C] text-white p-8 content-center md:rounded-[60px] flex-1 mt-4 md:mt-0 md:ml-10 lg:ml-6 z-10 md:h-[280px]">
            <img className="md:hidden h-[300px] w-[300px] mx-auto rounded-full" src="assets/Img 2-Caballos.jpg" alt="Caballos en libertad"/>
            <p className="text-base md:text-[20px] md:ml-72 lg:ml-80">
              <strong>Caballos en libertad</strong> nace hace más de 10 años 
              como una Asociación civil sin fines de lucro encargada de la protección, cuidado 
              y rescate de equinos, siendo una de las más importantes de la Provincia de Buenos Aires.
            </p>
          </div>
        </article>

        <article className="md:h-[390px] bg-white flex flex-col md:flex-row-reverse items-center justify-center my-20 relative max-w-[1044px] mx-auto">
          <img className="hidden md:block absolute -right-10 z-20 object-cover rounded-full w-[390px] h-[390px] lg:w-[390px] lg:h-[390px]" src="assets/Img 3-Mapa.png" alt="Ubicación La Plata"/>
          <div className="md:bg-[#00638C] text-black md:text-white p-8 content-center md:rounded-[60px] flex-1 mt-4 md:mt-0 md:mr-10 lg:mr-6  md:h-[280px]">
            <img className="md:hidden h-[300px] w-[300px] mx-auto rounded-full" src="assets/Img 3-Mapa.png" alt="Ubicación La Plata"/>
            <p className="text-base md:text-[20px] md:mr-72 lg:mr-80">
              Nos ubicamos en <strong>Zona Sur, ciudad de La Plata, Provincia de Buenos 
              Aires</strong> (uno de los principales epicentros de maltrato y abandono equino).
            </p>
          </div>
        </article>

        <article className="md:h-[390px] flex flex-col md:flex-row items-center justify-center my-20 relative max-w-[1044px] mx-auto">
          <img className="hidden md:block absolute -left-10 z-20 object-cover rounded-full w-[390px] h-[390px] lg:w-[390px] lg:h-[390px]" src="assets/Img 4-Dr.png" alt="Doctor Juan Oliden"/>
          <div className="bg-[#00638C] text-white p-8 content-center md:rounded-[60px] flex-1 mt-4 md:mt-0 md:ml-10 lg:ml-6 z-10 md:h-[280px]">
            <img className="md:hidden h-[300px] w-[300px] mx-auto rounded-full" src="assets/Img 4-Dr.png" alt="Doctor Juan Oliden"/>
            <p className="text-base md:text-[20px] md:ml-72 lg:ml-80">
              Nuestra ONG cuenta con el apoyo de una eminencia en veterinaria,
              el <strong>Doctor Juan Oliden</strong> quien, junto a nuestros voluntarios, 
              y gracias a la colaboración ciudadana, brinda a nuestros rescatados
              la atención, el amor y la medicación que en algunos casos corresponde.
            </p>
          </div>
        </article>

        <article className="md:h-[390px] bg-white flex flex-col md:flex-row-reverse items-center justify-center my-20 relative max-w-[1044px] mx-auto">
          <img className="hidden md:block absolute -right-10 z-20 object-cover rounded-full w-[390px] h-[390px] lg:w-[390px] lg:h-[390px]" src="assets/Img 5-Caballos.jpg" alt="Esperanza de libertad para los caballos"/>
          <div className="md:bg-[#00638C] text-black md:text-white p-10 content-center md:rounded-[60px] flex-1 mt-4 md:mt-0 md:mr-10 lg:mr-6  md:h-[280px]">
            <img className="md:hidden h-[300px] w-[300px] mx-auto rounded-full" src="assets/Img 5-Caballos.jpg" alt="Esperanza de libertad para los caballos"/>
            <p className="text-base md:text-[20px] md:mr-72 lg:mr-80">
              Con la esperanza de un día verlos libres, felices y sin ser utilizados 
              como objetos para la tracción a sangre, esperamos poder construir un <strong>futuro 
              libre de crueldad animal</strong>, en donde cada persona aporte su granito de arena y 
              participe en casos de indiferencia o maltrato a cualquier ser vivo.
            </p>
          </div>
        </article>
          <h2 className="font-bold md:text-5xl text-center text-[#00638C]"> ¡Apostamos a un futuro con derechos e <br /> igualdad para todos los animales!</h2>
      </div>

      <img className="hidden sm:block md:w-full md:h-auto lg:h-[480px] object-cover " src="assets/Img 6-Equipo.jpg" alt="Equipo de la ONG"/>
      </section>
  );
};

export default SobreNosotros;
