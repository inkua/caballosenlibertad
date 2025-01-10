import React from 'react'
import { ARGENTINA, EXTERIOR } from './DonationCard'
import Image from 'next/image'

export const DonationTabs = ( { tab, setTab } ) => {
  return (
    <>
        <div className='relative flex flex-col items-center'>
            <span
                role='tab'
                aria-selected={tab === ARGENTINA}
                aria-controls='topicos-panel'
                id='topicos-tab'
                aria-label='Ver tópicos'
                onClick={() => setTab(ARGENTINA)}
                className={`text-[14px] lg:text-[18px] xl:text-[20px] py-1 cursor-pointer ${
                    tab === ARGENTINA ? 'text-black' : 'text-gray-400'
                }`}
            >
                Desde Argentina
            </span>
            {
                tab === ARGENTINA &&
                (
                    <Image 
                        src={'/svg/Polygon_1.svg'}
                        alt='selección decorativa'
                        width={15}
                        height={10}
                        className='absolute -bottom-[10px]'
                    />
                )
            }
        </div>
        <div className='relative flex flex-col items-center'>
            <span
                role='tab'
                aria-selected={tab === EXTERIOR}
                aria-controls='mensajes-panel'
                id='mensajes-tab'
                aria-label='Ver mensajes'
                onClick={() => setTab(EXTERIOR)}
                className={`cursor-pointer text-end text-[14px] lg:text-[18px] xl:text-[20px] py-1 ${
                    tab === EXTERIOR ? 'text-black' : 'text-gray-400'
                }`}
            >
                Desde el exterior
            </span>
            {
                tab === EXTERIOR &&
                (
                    <Image 
                        src={'/svg/Polygon_1.svg'}
                        alt='selección decorativa'
                        width={15}
                        height={10}
                        className='absolute -bottom-[10px]'
                    />
                )
            }
        </div>
    </>
  )
}