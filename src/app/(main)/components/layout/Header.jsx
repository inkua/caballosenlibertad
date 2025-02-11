'use client'
import MenuBar from './MenuBar';
import Link from 'next/link';
import { featuresLinks } from '../../links/links';
import NestedLinks from './NestedLinks';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './header.module.css'

export const Header = () => {

    const pathname = usePathname()
    const [onScroll, setOnScroll] = useState(false)
    const [isHomePage, setIsHomePage] = useState(pathname === '/')

    const handleScroll = () => {
        localStorage.setItem('scrollPosition', window.scrollY.toString())
        if (window.scrollY > 50) {
            setOnScroll(true)
        } else {
            setOnScroll(false)
        }
    }

    useEffect(() => {
        if (pathname === '/') {
            setIsHomePage(true)
        } else {
            setIsHomePage(false)
        }
    }, [pathname])


    useEffect(() => {
        const storedScrollPosition = localStorage.getItem('scrollPosition');
        
        if (storedScrollPosition !== null) {
            const scrollPosition = parseInt(storedScrollPosition, 10)
            if (scrollPosition > 50) {
                setOnScroll(true)
                window.scrollTo(0, scrollPosition)
            }
        }
        if (isHomePage) {
            window.addEventListener('scroll', handleScroll)
            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }
    }, [isHomePage]);

  return (
    <header className={`flex w-full items-center justify-start lg:justify-center bg-primary text-whitePrimary px-4 lg:px-10 z-50 fixed top-0 h-[70px] ${!onScroll && isHomePage ? 'lg:h-[130px]' : 'lg:h-[90px]'} shadow-lg shadow-[rgba(0,0,0,0.35)] transition-all duration-500`}>
        <MenuBar />
        <div className='hidden lg:flex max-screen-layout w-full items-center justify-between'>
            <Link href={'/'}>
                { 
                    isHomePage ?
                    (
                        onScroll ?
                            <img
                                src="/caballos-en-libertad-logo-texto-blanco.svg"
                                alt="Imagen logo caballos en libertad"
                                width={112}
                                height={60}
                                className={`block w-[112px] h-[60px] ${styles.textImage}`}
                            /> :
                            <img 
                                src="/caballos-logo-blanco1.svg" 
                                alt="Imagen logo caballos en libertad"
                                width={210}
                                height={158}
                                className={`block w-[152px] min-h-[115px] transition-all duration-500`}
                            />
                    ) :
                    (
                        <img
                            src="/caballos-en-libertad-logo-texto-blanco.svg"
                            alt="Imagen logo caballos en libertad"
                            width={112}
                            height={60}
                            className={`block w-[112px] h-[60px]`}
                        />
                    )
                }
            </Link>
            <nav>
                <ul className="flex ml-2 gap-2 items-center justify-between">
                                <li className='whitespace-nowrap'>
                                    <Link 
                                        href={"/"} 
                                        className={`font-semibold lg:text-sm lg:font-medium 2xl:text-lg xl:font-semibold  px-4 lg:px-2 2xl:px-3 py-1 rounded-sm hover:text-primary2`}
                                    >
                                        Inicio
                                    </Link>
                                </li>
                    {
                        featuresLinks.map((link, index) => (
                            link.children ?
                                <li key={index} className='whitespace-nowrap '>
                                    <NestedLinks
                                        data={link} 
                                        onScroll={onScroll}
                                        isHomePage={isHomePage}
                                    />
                                </li>
                                :
                                <li key={index} className='whitespace-nowrap'>
                                    <Link 
                                        href={link.href} 
                                        className={`font-semibold lg:font-medium xl:font-semibold lg:text-sm 2xl:text-lg px-4 lg:px-2 2xl:px-3 py-1 rounded-sm hover:text-primary2`}
                                    >
                                        {link.textContent}
                                    </Link>
                                </li>
                        ))
                    }
                    <li key={'button-contribution'} className='ml-3 inline-flex'>
                        <Link 
                            href={'/donar'}
                            className='button-primary xl:px-12 h-[37px] border-none'
                        >
                            DONAR
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}