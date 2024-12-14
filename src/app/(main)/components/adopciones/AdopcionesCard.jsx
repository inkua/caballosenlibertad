import React from "react";
import { AdopcionesContacto } from "./AdopcionesContacto";
import { AdopcionesActions } from "./AdopcionesActions";

export const AdopcionesCard = ({ cardContent, titleCard }) => {
  return (
    <article className="min-w-[300px] w-[75%] md:w-full mx-auto bg-primary2 pt-12 pb-14 px-8 md:px-12 lg:p-14 lg:pb-16 rounded-2xl shadow-sm flex flex-col items-center sm:items-start justify-center md:grid grid-cols-2">
      <AdopcionesActions cardContent={cardContent} titleCard={titleCard} />
      <AdopcionesContacto />
    </article>
  );
};
