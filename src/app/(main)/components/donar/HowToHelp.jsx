import React from 'react'
import { HelpItem } from './HelpItem'

const list = [
    {
        text: `Donación \nmonetaria`,
        image: '/assets/donar/Aporte-monetario.svg',
    },
    {
        text: 'Alimentos',
        image: '/assets/donar/alimento.svg',
    },
    {
        text: 'Insumos \nmédicos',
        image: '/assets/donar/medicina.svg',
    },
]

export const HowToHelp = () => {

  return (
    <section
        className="w-full mx-auto py-6 md:py-12 lg:py-16 px-mobile md:px-tablet lg:px-desktop max-w-content"
    >
        <h2 className='text-center lg:text-start text-[28px] text-primary font-bold leading-140 md:text-[36px] lg:text-[50px] lg:font-extrabold'>¿Cómo ayudar?</h2>
        <div className="mt-12 lg:mt-20 w-full grid lg:grid-cols-3 gap-16 lg:gap-0 place-items-center">
            {
                list.map((item) => (
                    <HelpItem key={`help-item-${item.text}`} element={item} />
                ))
            }
        </div>
    </section>
  )
}
