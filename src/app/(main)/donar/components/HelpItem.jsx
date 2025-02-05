import Image from 'next/image'
import React from 'react'

export const HelpItem = ( { text, image, handleItemClick, buttonText, priority } ) => {

  return (
    <div className='w-full max-w-[300px] h-full flex flex-col items-center justify-between mx-auto gap-6 lg:gap-8'>
      <Image
          src={image}
          width={200}
          height={200}
          alt={`imagen representativa de ${text}`} 
          className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:max-w-[200px] lg:max-h-[200px] object-contain"
      />
      <span 
        className={`text-[20px] font-bold text-primary leading-120 md:text-[26px] lg:text[35px] whitespace-pre-line text-center`}
      >
        {text}
      </span>
      <button
        onClick={ () => handleItemClick() }
        className='button-primary uppercase w-full max-w-[180px] lg:max-w-[260px] h-[40px] lg:h-[54px] text-[13px] lg:text-[20px] font-semibold text-nowrap'
      >
        {buttonText}
      </button>
    </div>
  )
}
