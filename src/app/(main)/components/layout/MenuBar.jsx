'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { featuresLinks } from '../../links/links';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const MenuBar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [startAnimation, setStartAnimation] = useState(false)
    const pathname = usePathname()

    const menuSwitch = () => {
        if (showMenu) {
            setStartAnimation(false)
            setTimeout(() => {
                return setShowMenu(false)
            }, 570)
        }
        if (!showMenu) {
            setShowMenu(true)
            setStartAnimation(true)
        }
    }
    
    useEffect(() => {
        setStartAnimation(false)
        setShowMenu(false)
    }, [pathname])

  return (
    <div className='w-full flex lg:hidden'>
        <div className='w-full flex !justify-between'>
        <span
            onClick={() => menuSwitch()}
            className='self-center z-50 w-[30%]'
        >
            {
                startAnimation ?
                <XMarkIcon strokeWidth={1.75} className='w-9 h-9 text-whitePrimary'/>
                :
                <Bars3Icon strokeWidth={1.75} className='w-9 h-9 text-whitePrimary'/>
            }
        </span>
        <span className='flex justify-center items-center z-50'>
            <Link href={'/'}>
                <Image
                    src="/caballos-en-libertad-logo-texto-blanco.svg"
                    alt="Imagen logo caballos en libertad"
                    width={80}
                    height={50}
                    className={`block w-[112px] h-[50px]`}
                />
            </Link>
        </span>
        <span className='self-center z-50 w-[30%] flex justify-end'>
            <Link href={'/donar'} className='button-primary text-[18px] !px-4 pr-3'>
                    DONAR
            </Link>
        </span>
        </div>
        
        {
            showMenu && 
            <nav 
                className={`absolute top-[68px] left-0 right-0 bg-primary pt-4 pb-4 ${startAnimation ? 'animated-in-nav': 'animated-out-nav'}`}
            >
                <ul className={`flex flex-col gap-4 items-center justify-start ${startAnimation ? 'animated-in-opacity': 'animated-out-opacity'}`}>
                    <li key={`home-inicio`} className='whitespace-nowrap'>
                        <Link
                            href={'/'} 
                            className="font-semibold text-[16px] xl:text-[18px] px-4 py-1 hover:text-gray-300"
                        >
                            Inicio
                        </Link>
                    </li>
                    {
                        featuresLinks.map((link, index) => (
                            link.children ?
                            link.children.map((childrenLink, index) => (
                            <li key={`nav-id-${childrenLink.href}${index}`} className='whitespace-nowrap'>
                                <Link 
                                    href={childrenLink.href} 
                                    className="font-semibold text-[16px] xl:text-[18px] px-4 py-1 hover:text-gray-300"
                                >
                                    {childrenLink.textContent}
                                </Link>
                            </li>
                            )):
                            <li key={`nav-id-${link.href}${index}`} className='whitespace-nowrap'>
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
        }
    </div>
    )
}

export default MenuBar