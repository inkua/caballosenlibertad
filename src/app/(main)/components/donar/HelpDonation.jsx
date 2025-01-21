import React from 'react'
import { HelpItem } from './HelpItem'
import { DonationCard } from './DonationCard'

export const HelpDonation = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-12 lg:gap-16'>
        <div>
            <h2 className='mb-14 md:mb-20 lg:mb-24 text-start text-[28px] text-primary font-bold leading-140 md:text-[36px] lg:text-[42px] xl:text-[50px] lg:font-extrabold'>¿Cómo ayudar?</h2>
            <HelpItem priority={true} styleTypeImage={'/assets/donar/Group1.svg'} text={`Donación \nmonetaria`} image={'/assets/donar/Aporte-monetario.svg'}/>
            <div className='flex flex-col bg-primary2 text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] p-8 rounded-2xl mt-16'>
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
        <DonationCard />
    </div>
  )
}
