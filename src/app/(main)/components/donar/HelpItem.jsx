import Image from 'next/image'
import React from 'react'

export const HelpItem = ( { element } ) => {

    const { text, image } = element

  return (
    <article className='w-full max-w-[300px] flex flex-col items-center justify-start gap-8 lg:gap-14 h-full'>
        <Image
            src={image}
            width={200}
            height={200}
            alt={`imagen representativa de ${text}`} 
            className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:max-w-[200px] lg:max-h-[200px] object-contain"
        />
        <span className={`text-[20px] font-bold text-primary leading-120 md:text-[26px] lg:text[35px] whitespace-pre-line text-center ${text === 'Alimentos' && 'lg:mt-2'}`}>{text}</span>
    </article>
  )
}
