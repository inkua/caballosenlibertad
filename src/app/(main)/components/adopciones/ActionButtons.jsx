import React from "react";

export const ActionButtons = () => {
  return (
    <div className="lg:mt-2 flex space-x-2 md:space-x-4 lg:space-x-8">
      <button className="button-primary w-full md:w-[148px] flex items-center justify-center leading-4 h-[40px] !px-2 lg:!px-0">
        ENVIAR CORREO
      </button>
      <button className="button-primary w-full md:w-[148px] h-[40px] !px-0">
        CHATEAR
      </button>
    </div>
  );
};
