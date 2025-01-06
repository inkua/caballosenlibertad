import React from 'react'

export const TitleSection = ({titleTextContent, spanTextContent, children}) => {
  return (
    <section className='grid grid-cols-4 md:grid-cols-12 w-full mx-auto items-start gap-4 py-6 md:py-12 lg:py-14 px-mobile md:px-tablet lg:px-desktop max-w-content'>
      <h1
        className='text-[40px] sm:text-[56px] md:text-[86px] lg:text-[112px] xl:text-[120px] leading-120 font-extrabold text-primary col-span-full md:mb-4 lg:mb-6'
      >
        {titleTextContent}
      </h1>
      {
        spanTextContent &&
        <span
          className='text-[20px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[45px] leading-140 font-light opacity-90 col-span-full md:col-start-1 md:col-end-10 lg:col-end-10'
        >
          {spanTextContent}
        </span>        
      }
      {children}
    </section>
  )
}