import Image from 'next/image'
import Link from 'next/link'
import { TeamBtn } from './TeamBtn'

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
                    <Link href="/" alt="Caballos en Libertad | inicio" scroll={true}>
                        <Image
                            src="/logoBig.png"
                            alt="Imagen logo caballos en libertad"
                            width={200}
                            height={200}
                            className={`hidden lg:block w-[210px] h-[158px] m-auto`}
                        />
                    </Link>
                </figure>

                <nav className='hidden lg:block col-span-1'>
                    <ul className="flex flex-col gap-4 items-center justify-center">
                        {
                            featuresLinks.map((link, index) => (
                                link.children ?
                                    link.children.map((childrenLink, index) => (
                                        <li key={`nav-id-${childrenLink}${index}`}>
                                            <Link
                                                href={childrenLink.href}
                                                className="font-semibold text-[16px] xl:text-[18px] px-4 py-1 hover:text-primary2"
                                            >
                                                {childrenLink.textContent}
                                            </Link>
                                        </li>
                                    )) :
                                    <li key={`nav-id-${link.href}${index}`}>
                                        <Link
                                            href={link.href}
                                            className="font-semibold text-[16px] xl:text-[18px] px-4 py-1 hover:text-primary2"
                                        >
                                            {link.textContent}
                                        </Link>
                                    </li>
                            ))
                        }
                    </ul>
                </nav>
                <section className='flex flex-col w-full items-center justify-center gap-6 col-span-2'>
                    <h3 className='text-[14px] sm:text-[16px] font-semibold text-center'>Seguinos en nuestras redes sociales</h3>
                    <ul className='flex gap-8'>
                        {
                            socialGroup.map((socialItem) => (
                                <li key={`social-id-${socialItem.name}`}>
                                    <Link
                                        href={socialItem.url}
                                        target='_blank'
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            src={socialItem.icon}
                                            alt={`Icono representativo de ${socialItem.name}`}
                                            width={33}
                                            height={33}
                                            className={`w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[33px] md:h-[33px] bg-transparent mt-[2px] socialAnimated`}
                                        />
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </section>
            </div>
            <hr className='border-b-[1px] border-whitePrimary' />
            <h3 className='m-auto py-5 text-[12px] sm:text-[16px] font-medium flex gap-2'>Diseño y Programación: <span className="!font-bold flex gap-2">
                <Link href="https://inkua.de/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    InkuA
                </Link>
                {' - '}
                <TeamBtn />
            </span></h3>
        </footer>
    )
}