import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { featuresLinks } from '../../links/links'

const socialGroup = [
    {
        url: 'https://www.instagram.com/caballosenlibertadlp',
        icon: '/svg/instagram.svg',
        name: 'instagram'
    },
    {
        url: 'https://www.facebook.com/caballos.enlibertad',
        icon: '/svg/facebook.svg',
        name: 'facebook'
    },
    {
        url: 'https://api.whatsapp.com/send/?phone=5492216383686&text&type=phone_number&app_absent=0',
        icon: '/svg/whatsApp.svg',
        name: 'whatsapp'
    },
]

export const Footer = () => {

  return (
    <footer className="w-full bg-primary text-whitePrimary flex flex-col">
        <div className='max-screen-layout w-full lg:grid lg:grid-cols-5 py-10 sm:py-12 md:py-14 items-center'>
            <figure className='hidden lg:block w-full col-span-2'>
                <Image
                    src="/next.svg"
                    alt="Imagen logo next" 
                    width={592}
                    height={370}
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                    priority
                    className={`hidden lg:block w-[148px] h-[92px] m-auto`}
                />
            </figure>

            <nav className='hidden lg:block col-span-1'>
                <ul className="flex flex-col gap-4 items-center justify-center">
                    {
                        featuresLinks.map((link, index) => (
                            <li key={index}>
                                <Link 
                                    href={link.href} 
                                    className="font-semibold text-[16px] xl:text-[18px] px-4 py-1 hover:text-gray-300"
                                >
                                    {link.textContent}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <section className='flex flex-col w-full items-center justify-center gap-6 col-span-2'>            
                <span className='text-[14px] sm:text-[16px] font-semibold text-center'>Síguenos en nuestras redes sociales</span>
                <ul className='flex gap-8'>
                    {
                        socialGroup.map((socialItem) => (
                            <li key={`social-id-${socialItem.name}`}>
                                <Link 
                                    href={socialItem.url}
                                    target='_blank'
                                >
                                    <Image
                                        src={socialItem.icon}
                                        alt={`Icono representativo de ${socialItem.name}`}
                                        width={33}
                                        height={33}
                                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                                        className={`w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[33px] md:h-[33px] bg-transparent mt-[2px] socialAnimated`}
                                    />                        
                                </Link>
                            </li>                            
                        ))
                    }
                </ul>
            </section>
        </div>
        <hr className='border-b-[1px] border-whitePrimary'/>
        <span className='m-auto py-5 text-[12px] sm:text-[16px] font-medium'>Diseño y Programación: <strong>InkuA</strong></span>
    </footer>
  )
}