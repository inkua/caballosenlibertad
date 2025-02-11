'use client'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { usePathname } from 'next/navigation';

const NestedLinks = ({ data }) => {

    const [showNestedLinks, setShowNestedLinks] = useState(false)
    const nestedUlRef = useRef()
    const pathname = usePathname()

    const handleClickSwitchState = () => {
        setShowNestedLinks(!showNestedLinks)
    }

    useEffect(() => {
        const handleBlur = (event) => {
            if (nestedUlRef.current && !nestedUlRef.current.contains(event.relatedTarget)) {
                setShowNestedLinks(false)
            }
        }
        nestedUlRef.current?.addEventListener('blur', handleBlur, true)
        return () => {
            nestedUlRef.current?.removeEventListener('blur', handleBlur, true)
        }
    }, [])

    useEffect(() => {
        setShowNestedLinks(false)
    }, [pathname])

    return (
        <div
            ref={nestedUlRef}
        >
            <div
                onClick={handleClickSwitchState}
                onKeyDown={(e) => e.key === 'Enter' && setShowNestedLinks(!showNestedLinks)}
                className={`font-semibold lg:font-medium xl:font-semibold cursor-pointer lg:text-sm 2xl:text-lg px-4 lg:px-2 2xl:px-3 gap-1 2xl:gap-2 rounded-sm flex items-center hover:text-primary2`}
                tabIndex={0}
                role="button"
                aria-expanded={showNestedLinks}
                aria-haspopup="true"
            >
                <span>
                    {data.textContent}
                </span>
                <span>
                    <ChevronDownIcon className='h-[18px] w-[18px] hover:text-ellipsis' strokeWidth={1.75} />
                </span>
            </div>
            {
                showNestedLinks &&
                <ul
                    tabIndex={0}
                    className={`flex flex-col absolute top-[90px] bg-[#00638C] shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-sm overflow-hidden border-t-2 border-primary2 transition-all duration-500`}
                >
                    {
                        data.children.map((childrenLink, index) => (
                            <li key={index} className='w-full text-whitePrimary hover:text-primary2 hover:border-transparent focus:border-transparent focus:text-primary2 transition-colors duration-75'>
                                <Link
                                    href={childrenLink.href}
                                    className="w-full max-screen-layout font-semibold lg:font-medium xl:font-semibold text-[16px] xl:text-[18px] py-3 px-6 justify-start flex"
                                >
                                    {childrenLink.textContent}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            }
        </div>
    )
}

export default NestedLinks