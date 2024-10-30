import React from 'react';

const SobreNosotros = () => {
  return (
    <div style={{ backgroundColor: '#FFFFFF', padding: '20px', fontFamily: 'Poppins' }}>
      <h1 style={{ fontWeight: 275, fontSize: '36px', lineHeight: '46.8px', color: '#03151F' }}>
        Nuestra Misión
      </h1>
      <h2 style={{ fontWeight: 800, fontSize: '60px', lineHeight: '72px', color: '#00638C' }}>
        Rescatamos, rehabilitamos y reubicamos caballos
      </h2>

      {/* Información sobre Caballos */}
      <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '20px' }}>
        <img src="ruta-a-imagen-caballos.jpg" alt="Caballos" style={{ borderRadius: '50%', width: '150px', height: '150px', marginRight: '20px' }} />
        <div style={{ backgroundColor: '#00638C', color: '#FFFFFF', padding: '10px', borderRadius: '5px', width: '100%' }}>
          <p style={{ fontSize: '12px', fontFamily: 'Poppins' }}>
            Caballos en libertad nace hace más de 10 años como una Asociación civil sin fines de lucro encargada de la protección, cuidado y rescate de equinos, siendo una de las más importantes de la Provincia de Buenos Aires.
          </p>
        </div>
      </div>

      {/* Información sobre la ubicación */}
      <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '20px' }}>
        <img src="ruta-a-imagen-mapa.jpg" alt="Mapa" style={{ borderRadius: '50%', width: '150px', height: '150px', marginRight: '20px' }} />
        <div style={{ backgroundColor: '#00638C', color: '#FFFFFF', padding: '10px', borderRadius: '5px', width: '100%' }}>
          <p style={{ fontSize: '12px', fontFamily: 'Poppins' }}>
            Nos ubicamos en Zona Sur, ciudad de La Plata, Provincia de Buenos Aires (uno de los principales epicentros de maltrato y abandono equino).
          </p>
        </div>
      </div>

      {/* Información sobre el veterinario */}
      <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '20px' }}>
        <img src="ruta-a-imagen-veterinario.jpg" alt="Veterinario" style={{ borderRadius: '50%', width: '150px', height: '150px', marginRight: '20px' }} />
        <div style={{ backgroundColor: '#00638C', color: '#FFFFFF', padding: '10px', borderRadius: '5px', width: '100%' }}>
          <p style={{ fontSize: '12px', fontFamily: 'Poppins' }}>
            Nuestra ONG cuenta con el apoyo de una eminencia en veterinaria, el doctor Juan Oliden quien, junto a nuestros voluntarios, y gracias a la colaboración ciudadana, brinda a nuestros rescatados la atención, el amor y la medicación que en algunos casos corresponde.
          </p>
        </div>
      </div>

      {/* Información sobre la esperanza */}
      <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '20px' }}>
        <img src="ruta-a-imagen-caballos.jpg" alt="Caballos" style={{ borderRadius: '50%', width: '150px', height: '150px', marginRight: '20px' }} />
        <div style={{ backgroundColor: '#00638C', color: '#FFFFFF', padding: '10px', borderRadius: '5px', width: '100%' }}>
          <p style={{ fontSize: '12px', fontFamily: 'Poppins' }}>
            Con la esperanza de un día verlos libres, felices y sin ser utilizados como objetos para la tracción a sangre, esperamos poder construir un futuro libre de crueldad animal, en donde cada persona aporte su granito de arena y participe en casos de indiferencia o maltrato a cualquier ser vivo.
          </p>
        </div>
      </div>

      {/* Mensaje final */}
      <h2 style={{ fontWeight: 800, fontSize: '50px', lineHeight: '75px', color: '#00638C', marginTop: '40px' }}>
        ¡Apostamos a un futuro con derechos e igualdad para todos los animales!
      </h2>

      {/* Imagen final */}
      <img src="ruta-a-imagen-final.jpg" alt="Imagen final" style={{ width: '100%', marginTop: '20px' }} />
    </div>
  );
};

export default SobreNosotros;
