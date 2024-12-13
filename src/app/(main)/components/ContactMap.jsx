import Image from 'next/image'
import React from 'react'
import map from '/public/assets/ubicación_mapa.png'
export default function ContactMap({ubication, phone}) {
  return (
    <div className='flex flex-col justify-between gap-3 w-full bg-red-300 md:basis-1/2'>
        <h2 className='font-extrabold text-primary text-[20px] md:text-[32px] duration-200'>¿Dónde estamos?</h2>
        <p className='text-primary text-[16px] md:text-[20px] duration-200'>{ubication}</p>
        <Image src={map} alt='La Plata, Buenos Aires' width={400} height={400} className='w-full' />
        <h2 className='font-extrabold text-primary text-[20px] md:text-[32px] duration-200'>Teléfono</h2>
        <p className='text-primary text-[16px] md:text-[20px] duration-200'>{phone}</p>
    </div>
  )
}
