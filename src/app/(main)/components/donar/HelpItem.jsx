import Image from 'next/image'
import React from 'react'

export const HelpItem = ( { text, image, styleTypeImage, priority } ) => {

  return (
    <div className={`w-full grid grid-cols-3`}>
      <figure className='col-start-1 row-start-1 hidden md:block lg:mr-10 xl:mr-16'>
        <Image
          src={styleTypeImage}
          alt=''
          width={70}
          height={70}
          className='min-w-[60px] min-h-[60px] max-w-[60px] xl:min-w-[70px] xl:min-h-[70px] block'
        />
      </figure>
      <div className='col-start-1 col-end-4 row-start-1 w-full max-w-[300px] flex flex-col items-center justify-start gap-8 lg:gap-14 h-full mx-auto'>
          <Image
              src={image}
              width={200}
              height={200}
              alt={`imagen representativa de ${text}`} 
              className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:max-w-[200px] lg:max-h-[200px] object-contain"
          />
          <span className={`text-[20px] font-bold text-primary leading-120 md:text-[26px] lg:text[35px] whitespace-pre-line text-center`}>{text}</span>
      </div>      
    </div>

  )
}
