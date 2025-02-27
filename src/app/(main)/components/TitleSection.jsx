
export const TitleSection = ({titleTextContent, spanTextContent, children}) => {
  return (
    <section className='px-mobile md:px-tablet lg:px-desktop grid grid-cols-4 md:grid-cols-12 w-full mx-auto items-start gap-2 py-6 md:py-12 lg:py-14 max-w-content'>
      <h1
        className='text-[40px] sm:text-[56px] md:text-[84px] lg:text-[100px] xl:text-[110px] leading-120 font-extrabold text-primary col-span-full md:mb-4 lg:mb-6'
      >
        {titleTextContent}
      </h1>
      {
        spanTextContent &&
        <p
          className='text-[20px] sm:text-[28px] md:text-[33px] lg:text-[38px] xl:text-[40px] leading-140 font-light opacity-90 col-span-full md:col-start-1 md:col-end-10 lg:col-end-10'
        >
          {spanTextContent}
        </p>        
      }
      {children}
    </section>
  )
}