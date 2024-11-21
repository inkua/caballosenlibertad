'use client'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { usePathname } from 'next/navigation';

const NestedLinks = ({data}) => {

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
            onClick={ handleClickSwitchState }
            onKeyDown={ (e) => e.key === 'Enter' && setShowNestedLinks(!showNestedLinks) }
            className={`font-semibold lg:font-medium xl:font-semibold cursor-pointer text-[16px] xl:text-[18px] px-4 lg:px-2 xl:px-3 gap-2 rounded-sm flex items-center hover:text-gray-300 ${showNestedLinks ? 
                'text-gray-300' : 'py-1'}`}
            tabIndex={0}
            role="button"
            aria-expanded={showNestedLinks}
            aria-haspopup="true"
        >
            <span>
                {data.textContent}
            </span>
            <span>
                <ChevronDownIcon className='h-5 w-5' strokeWidth={2}/>
            </span>
        </div>
        {
            showNestedLinks &&
            <ul 
                tabIndex={0}
                className={`flex flex-col absolute top-[90px] left-0 right-0 bg-[#00638C]  shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-b-sm overflow-hidden border-t-2 border-gray-300`}
            >
                {
                    data.children.map((childrenLink, index) => (
                        <li key={index} className='w-full text-whitePrimary hover:bg-whitePrimary hover:text-primary hover:border-transparent focus:border-transparent focus:bg-whitePrimary focus:text-primary transition-colors duration-75'>
                            <Link
                                href={childrenLink.href} 
                                className="w-full max-screen-layout font-semibold lg:font-medium xl:font-semibold text-[16px] xl:text-[18px] py-3 px-10 flex box-content"
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