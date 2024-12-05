import { TitleSection } from "../components/TitleSection";
import Image from "next/image";

function Voluntariado() {
  const items = [
    {
      image: "#",
      title: "Área de logistica",
      listItems: [
        "Encargado de logística de alimento y/o de viruta.",
        "Traslado de voluntarios al predio en casos excepcionales o de urgencia.",
        "Traslado de equinos.",
        "Colecta y traslado de donaciones.",
      ],
    },
    {
      image: "#",
      title: "Área fuera del campo",
      listItems: [
        "Generador/a de ideas para recaudar fondos.",
        "Administrador/a de redes.",
        "Aportando conocimientos de tu profesión y/o dictando cursos a beneficio.",
        "Manejo de Photoshop para diseño de flyers.",
      ],
    },

    {
      image: "#",
      title: "Área dentro del campo",
      listItems: [
        "Alimentación de nuestros rescatados.",
        "Cuidado y curación de los rescatados.",
        "Limpieza y armado de camas.",
        "Guardias nocturnas.",
        "Ayuda para levantar a los rescatados si no pueden.",
      ],
    },
  ];
  return (
    <div className="pt-[70px] lg:pt-[90px]">
      <TitleSection
        titleTextContent="Convertite en voluntario"
        spanTextContent="Sumate a nuestro equipo. Dado que no contamos con ningún subsidio de parte del Estado, realizamos las tareas gracias al apoyo de nuestros voluntarios."
      />
      <h2>¿Qué tipo de voluntariado puedo realizar? </h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href="#" />

            <h3>{item.title}</h3>
            <ul>
              {item.listItems.map((listItem, index) => (
                <li key={index}>{listItem}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Voluntariado;
