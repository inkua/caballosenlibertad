import React from 'react'
import { AdopcionesContacto } from './AdopcionesContacto'
import { AdopcionesActions } from './AdopcionesActions'

export const AdopcionesCard = () => {

  return (
    <article
        className='w-[300px] mx-auto md:w-full bg-primary2 py-14 md:py-11 px-7 md:px-12 lg:p-14 rounded-2xl shadow-sm flex flex-col items-center justify-center md:grid grid-cols-2'
    >
        <AdopcionesActions />
        <AdopcionesContacto />
    </article>
  )
}
