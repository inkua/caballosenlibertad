import Image from 'next/image'
import React from 'react'

export const HelpItem = ( { text, image, handleItemClick, priority } ) => {

  return (
    <div className={`w-full grid grid-cols-3`}>
      <div className='col-start-1 col-end-4 row-start-1 w-full max-w-[300px] flex flex-col items-center justify-start gap-8 lg:gap-14 h-full mx-auto'>
          <Image
              src={image}
              width={200}
              height={200}
              alt={`imagen representativa de ${text}`} 
              className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:max-w-[200px] lg:max-h-[200px] object-contain"
          />
          <span 
            onClick={ () => handleItemClick() }
            className={`text-[20px] font-bold text-primary leading-120 md:text-[26px] lg:text[35px] whitespace-pre-line text-center cursor-pointer`}
          >
            {text}
          </span>
      </div>
    </div>
  )
}
