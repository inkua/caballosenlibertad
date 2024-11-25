'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { featuresLinks } from '../../links/links';
import { Bars3Icon } from '@heroicons/react/24/outline';

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
    <div className='flex lg:hidden'>
        <span
            onClick={() => menuSwitch()}
            className='p-3 z-50'
        >
            <Bars3Icon strokeWidth={1.75} className='w-9 h-9 text-whitePrimary'/>
        </span>
        {
            showMenu && 
            <nav 
                className={`absolute top-[68px] left-0 right-0 bg-primary pb-10 ${startAnimation ? 'animated-in-nav': 'animated-out-nav'}`}
            >
                <ul className={`flex flex-col gap-4 items-center justify-start ${startAnimation ? 'animated-in-opacity': 'animated-out-opacity'}`}>
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
                <div className='w-full flex items-center justify-center mt-8'>
                    <button className={`button-primary text-[18px]  ${startAnimation ? 'animated-in-opacity': 'animated-out-opacity'}`}>
                        DONAR
                    </button>
                </div>
            </nav>
        }
    </div>
    )
}

export default MenuBar