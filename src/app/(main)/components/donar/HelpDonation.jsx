import React from 'react'
import { HelpItem } from './HelpItem'
import { DonationForm } from './DonationForm'

export const HelpDonation = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-12 lg:gap-16'>
        <div>
            <HelpItem priority={true} styleTypeImage={'/assets/donar/Group1.svg'} text={`Donación \nmonetaria`} image={'/assets/donar/Aporte-monetario.svg'}/>
            <div className='flex flex-col bg-primary2 text-[16px] md:text-[20px] lg:text-[24px] p-8 rounded-2xl mt-16'>
                <p className='font-light'>
                    Si eres de Argentina podés transferir a nuestra cuenta:
                </p>
                <br />
                <span><strong>BANCO SANTANDER RIO SUCURSAL:</strong> 743</span>
                <span><strong>N° DE CUENTA:</strong> 003032 4</span>
                <span><strong>CUIT:</strong> 000000033715048219</span>
                <span><strong>CBU:</strong> 0720743520000000303240</span>
                <span><strong>NOMBRE:</strong> CABALLOS EN LIBERTAD ASOC CIV</span>
            </div>
        </div>
        <DonationForm />
    </div>
  )
}
