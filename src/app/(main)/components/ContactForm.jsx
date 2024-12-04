import React from "react";

export default function ContactForm() {
  return (
    <div className="w-full max-w-md p-mobile">
      <h2 className="font-extrabold text-primary text-[20px] md:text-[32px] duration-200">
        Consultanos
      </h2>
      <form className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-primary" >Nombre</label>
          <input required type="text" id="name" name="name" placeholder="Nombre y apellido" className="w-full rounded-md border-primary placeholder-primary" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-primary">Número de teléfono</label>
          <input required type="number" id="phone" name="phone" placeholder="Teléfono" className="w-full rounded-md border-primary placeholder-primary" />
        </div>
        <div>
          <label htmlFor="email" className="block text-primary">Correo electrónico</label>
          <input required type="text" id="email" name="email" placeholder="Correo electrónico" className="w-full rounded-md border-primary placeholder-primary" />
        </div>
        <div>
          <label htmlFor="message" className="block text-primary">Déjanos tu consulta</label>
          <textarea required placeholder="Consulta..." id="message" name="message" className="w-full rounded-md border-primary placeholder-primary"></textarea>
        </div>
        <button className="bg-secondary text-white font-bold py-2 px-10 rounded-full text hover:bg-white hover:text-secondary border-4 border-secondary duration-200">ENVIAR CONSULTA</button>
      </form>
    </div>
  );
}
