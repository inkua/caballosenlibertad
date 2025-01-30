'use client'
import React, { useState } from 'react'
import { DonationTabs } from './DonationTabs'
import { SelectForm } from './SelectForm'

export const ARGENTINA = 'ARGENTINA'
export const EXTERIOR = 'EXTERIOR'

export const DonationCard = () => {

  const [tab, setTab] = useState(EXTERIOR);

  return (
    <div className='flex flex-col items-center justify-start mx-auto bg-white p-8 py-10 sm:p-12 xl:px-14 rounded-2xl sm:rounded-[20px] gap-6 w-full lg:min-w-[420px] max-w-[480px] lg:max-w-[520px]'>
      <h3 className='text-primary text-[28px] lg:text-[35px] font-bold text-start w-full'>¡Haz tu aporte!</h3>

      <SelectForm />

      {/* <div
        role='tablist'
        aria-labelledby='Opciones de visualización'
        className='flex justify-between mb-1 md:mb-4 w-full gap-4 border-b-2 border-secondary'
      >
        <DonationTabs tab={ tab } setTab={ setTab } />
      </div>

      
      {
        tab === ARGENTINA && (
          <div className='flex flex-col text-[14px] md:text-[18px] lg:text-[22px] my-6'>
            <h4 className='font-normal text-primary text-[20px] lg:text-[28px] xl:text-[30px]'>
              Transferencia a:
            </h4>
            <br />
            <span><strong>BANCO SANTANDER RIO SUCURSAL:</strong> 743</span>
            <span><strong>N° DE CUENTA:</strong> 003032 4</span>
            <span><strong>CUIT:</strong> 000000033715048219</span>
            <span><strong>CBU:</strong> 0720743520000000303240</span>
            <span><strong>NOMBRE:</strong> CABALLOS EN LIBERTAD ASOC CIV</span>
          </div>
        )
      }
      {
        tab === EXTERIOR && (
          <SelectForm />
        )
      } */}

    </div>
  )
}
