import React from 'react'
import HelpSection from './HelpSection'
import { HelpDonation } from './HelpDonation'
import { HelpItem } from './HelpItem'

export const HowToHelp = () => {

  return (
    <section
        className="w-full mx-auto py-8 md:py-10 lg:py-12 px-mobile md:px-tablet lg:px-desktop max-w-content"
    >
        <h2 className='text-start text-[28px] text-primary font-bold leading-140 md:text-[36px] lg:text-[50px] lg:font-extrabold'>¿Cómo ayudar?</h2>
        <div className="mt-14 md:mt-20 lg:mt-28 flex flex-col w-full items-center justify-center lg:items-start gap-40">
            <HelpDonation />
            <HelpSection pText={'Para apadrinar, es necesario tomar el compromiso de depositar (lo que pueda) todos los meses, a la cuenta que aparece en el recuadro anterior, no hay un monto mínimo.'}>
                <HelpItem styleTypeImage={'/assets/donar/Group2.svg'} text={`Apadrinar`} image={'/assets/donar/apadrinar.svg'}/>
            </HelpSection>
            <HelpSection pText={'Es fundamental que la mayor parte de la alimentación de caballos sea forraje, es decis para que te informemos de que manera colaborar con dichos alimentos.\nComunicate con nosotros para que te informemos de que manera colaborar con dichos alimentos.'}>
                <HelpItem styleTypeImage={'/assets/donar/Group3.svg'} text={`Alimento`} image={'/assets/donar/alimento.svg'}/>
            </HelpSection>
            <HelpSection pText={'Si tienes alguno de los insumos mencionados en la siguiente lista, ¡feliz los recibimos!'}>
                <HelpItem styleTypeImage={'/assets/donar/Group4.svg'} text={`Insumos \nmédicos`} image={'/assets/donar/medicina.svg'}/>
            </HelpSection>
        </div>
    </section>
  )
}
