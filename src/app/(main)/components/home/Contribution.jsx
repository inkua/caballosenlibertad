import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Contribution = () => {
  return (
    <article className='flex flex-col text-primary gap-8 md:gap-12 lg:gap-16 self-center w-full items-center justify-center'>
        <h3 className='text-center text-[20px] md:text-[32px] lg:text-[42px] xl:text-[50px] leading-120 font-extrabold'>
            Tu apoyo también importa, ¡Ayudanos! 
        </h3>
        <div className='flex items-center justify-center w-screen md:w-auto gap-[5vw]'>
            <div
                className='flex flex-col text-primary items-center justify-center gap-8 md:gap-12 lg:gap-16'
            >
                <Image 
                    src="/svg/Vector-donaciones.svg"
                    alt="Imagen donaciones" 
                    width={117}
                    height={109}
                    className="w-[50px] h-[46px] md:w-[80px] md:h-[74px] lg:w-[117px] lg:h-[109px]"
                />
                <Link href={'/'} className='font-semibold button-primary !p-0 whitespace-nowrap w-[143px] h-[40px] md:w-[300px] md:h-[64px] md:text-xl'>
                    QUIERO DONAR
                </Link>
            </div>
            <div
                className='flex flex-col text-primary items-center justify-center gap-8 md:gap-12 lg:gap-16'
            >
                <Image 
                    src="/svg/Group-hands-heart.svg"
                    alt="Imagen donaciones" 
                    width={117}
                    height={109}
                    className="w-[50px] h-[46px] md:w-[80px] md:h-[74px] lg:w-[117px] lg:h-[109px]"
                />
                <Link href={'/'} className='button-primary font-semibold md:text-xl flex items-center justify-center p-0 md:px-4 whitespace-nowrap w-[143px] h-[40px] md:w-[300px] md:h-[64px]'>
                    <span className='hidden md:flex'>QUIERO&nbsp;</span><span>SER VOLUNTARIO</span>
                </Link>
            </div>
        </div>
    </article>
  )
}