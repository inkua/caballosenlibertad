import React from 'react'

export const TitleSection = ({titleTextContent, spanTextContent, children}) => {
  return (
    <section className='flex flex-col w-full items-start gap-4 py-6 md:py-12 lg:py-14 px-8 md:px-24 lg:px-36'>
      <h1
        className='text-[40px] sm:text-[56px] md:text-[96px] lg:text-[112px] xl:text-[120px] leading-120 font-extrabold text-primary'
      >
        {titleTextContent}
      </h1>
      {
        spanTextContent &&
        <span
          className='text-[20px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[45px] leading-140 font-light opacity-90'
        >
          {spanTextContent}
        </span>        
      }
      {children}
    </section>
  )
}