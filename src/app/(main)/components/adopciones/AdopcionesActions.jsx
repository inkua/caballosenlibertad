import React from 'react'
import { ActionButtons } from './ActionButtons'

export const AdopcionesActions = () => {

  return (
    <div className='flex flex-col gap-6 justify-between lg:h-full mb-10 md:mb-0' aria-labelledby="adopciones-card-title">
        <h3 id="adopciones-card-title" className='text-primary text-xl md:text-[32px] lg:text-[40px] font-bold leading-120'>Ponte en contacto para adoptar</h3>
        <span className='font-light lg:text-xl'>Estamos aquí para ayudarte</span>
        <ActionButtons />
    </div>
  )
}