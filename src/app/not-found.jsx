"use client";

export default function NotFoundPage() {
  return (
        <body>
            <section className="bg-[#F2F6F8] min-h-screen flex items-center">
              <div className="container px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                <div className="w-full lg:w-1/2">
                  <p className="text-base font-normal text-[#00638C]">Error 404</p>
                  <h1 className="mt-3 text-4xl font-semibold text-[#00638C] md:text-5xl">
                    Página no encontrada
                  </h1>
                  <p className="mt-4 text-xl text-[#03151F]">
                    La página que buscas no existe...
                  </p>
        
                  {/* Botones */}
                  <div className="flex justify-start items-center mt-6 gap-x-3">
                    <button onClick={() => window.history.back()}  
                      className="w-44 px-5 py-2 text-sm font-bold text-[#00638C] transition-colors duration-200 bg-transparent border border-[#00638C66] rounded-full hover:bg-[#00638C] hover:text-white"
                    > <span>ATRÁS</span> </button>
        
                    <a 
                      href="/" 
                      className="w-auto px-5 py-2 text-sm font-bold tracking-widest text-[#F2F6F8] duration-200 bg-[#D98729] border border-[#F2F6F8] rounded-full hover:bg-transparent hover:text-[#D98729] hover:border-[#D98729]"
                    >
                      VOLVER AL INICIO
                    </a>
                  </div>
                </div>
        
                {/* Imagen */}
                <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
                  <img 
                    className="w-full h-80 md:h-96 rounded-lg object-cover" 
                    src="/assets/errors/tarde_caballos.jpg" 
                    alt="Page not found"
                  />
                </div>
                
              </div>
            </section>
        </body>
          );
        }
