import React from 'react'
import { TypeSection } from './HowToHelp'

export const DonationModalContent = ( { codigo } ) => {

  return (
    <div>
        {
            codigo === TypeSection.ALIMENTO &&
            <p className='text-[16px] md:text-[18px] lg:text-[24px]'>
                Es fundamental que la mayor parte de la alimentación de caballos sea forraje, es decir para que te informemos de que manera colaborar con dichos alimentos.\nComunicate con nosotros para que te informemos de que manera colaborar con dichos alimentos.
            </p>
        }
        {
            codigo === TypeSection.INSUMOS_MEDICOS &&
            <p className='text-[16px] md:text-[18px] lg:text-[24px]'>
                Si consideras que puedes donar alguno de los insumos listados debajo ponte en contacto con nosotros para que te informemos de qué manera colaborar.
            </p>
        }
    </div>
  )
}
