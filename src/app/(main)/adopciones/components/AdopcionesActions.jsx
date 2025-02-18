import React from 'react'

import { ActionButtons } from './ActionButtons'

export const AdopcionesActions = () => {

  return (
    <div className='flex flex-col gap-6 justify-between lg:h-full mb-10 md:mb-0' aria-labelledby="adopciones-card-title">
        <h3 id="adopciones-card-title" className='text-primary text-xl sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold leading-120'>Ponte en contacto</h3>
        <p className='font-light text-[12px] md:text-sm lg:text-xl'>Si tenes conocimientos en marketing digital o veterinaria, posees experiencia en trabajo con caballos en el capo, tienes licencia de conducir, o posees cualquier otro conocimiento que aporte a alguna de las áreas mencionadas.</p>
        <ActionButtons />
    </div>
  )
}