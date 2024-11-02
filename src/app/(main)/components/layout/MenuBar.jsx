'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { featuresLinks } from '../../links/links';

const MenuBar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [startAnimation, setStartAnimation] = useState(false)
    const pathname = usePathname()

    const menuSwitch = () => {
        if (showMenu) {
            setStartAnimation(false)
            setTimeout(() => {
                return setShowMenu(false)
            }, 270)
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
            className='p-3 relative right-3 z-50'
        >
            Menu
        </span>
        {
            showMenu && 
            <nav 
                className={`absolute top-[68px] left-0 right-0 bg-primary pb-10 ${startAnimation ? 'animated-in-nav': 'animated-out-nav'}`}
            >
                <ul className={`flex flex-col gap-4 items-center justify-start ${startAnimation ? 'opacity-100': 'opacity-0'}`}>
                    {
                        featuresLinks.map((link, index) => (
                            <li key={index} 
                                className='whitespace-nowrap'
                            >
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
                    <button className={`button-primary text-[18px] ${startAnimation ? 'opacity-100': 'opacity-0'}`}>
                        DONAR
                    </button>
                </div>
            </nav>
        }
    </div>
    )
}

export default MenuBar