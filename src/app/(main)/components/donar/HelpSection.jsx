'use client'
import React, { useState } from 'react'
import { HelpItem } from './HelpItem'
import { XMarkIcon } from "@heroicons/react/24/outline";
import { DonationModalContent } from './DonationModalContent';

const HelpSection = ( { codigo, text, image } ) => {

  const [showDetails, setShowDetails] = useState(false)

  const handleItemClick = () => {
    setShowDetails(true)
  }

  return (
    <div className=''>
      <HelpItem text={text} image={image} handleItemClick={handleItemClick}/>

      {
        showDetails && 
        <div className='fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/20 z-[50]'>
          <div className='bg-white px-8 py-20 rounded-2xl w-[500px] max-w-[90%] max-h-[90%] font-light relative'>
            <XMarkIcon 
              onClick={ () => setShowDetails(false) }
              strokeWidth={1.75}
              className='w-6 h-6 lg:w-8 lg:h-8 rounded-full shadow-lg absolute top-1 right-1 cursor-pointer text-gray-900'
            />
            <DonationModalContent codigo={codigo} />
          </div>
        </div>
      }
    </div>
  )
}

export default HelpSection