import React from 'react'
import HelpSection from './HelpSection'
import { HelpDonation } from './HelpDonation'

export const TypeSection = {
    ALIMENTO: 'alimento',
    INSUMOS_MEDICOS: 'insumos medicos'
}
 
export const HowToHelp = () => {

  return (
    <section
        className="w-full mx-auto py-8 md:py-10 lg:pt-8 lg:pb-12 px-mobile md:px-tablet lg:px-desktop max-w-content"
    >
        <h2 className='mb-14 md:mb-20 lg:mb-24 text-start text-[28px] text-primary font-bold leading-140 md:text-[36px] lg:text-[42px] xl:text-[50px] lg:font-extrabold'>¿Cómo ayudar?</h2>
        <div className="flex flex-col lg:flex-row w-full items-center justify-center lg:items-start lg:justify-around gap-32 md:gap-36 lg:gap-40">
            <HelpDonation />
            <HelpSection 
                codigo={TypeSection.ALIMENTO}
                text={`Alimento`} 
                image={'/assets/donar/alimento.svg'}
            />
            <HelpSection 
                codigo={TypeSection.INSUMOS_MEDICOS}
                text={`Insumos \nmédicos`} 
                image={'/assets/donar/medicina.svg'}
            />
        </div>
    </section>
  )
}
