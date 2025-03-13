
export const Title = () => {
  return (
    <section className='grid lg:grid-cols-5 w-full mx-auto lg:gap-16 py-6 md:py-12 lg:py-14 px-mobile md:px-tablet lg:px-desktop max-w-content lg:mt-6'>
        <div className='w-full lg:col-span-3'>
            <h1
                className='text-[40px] sm:text-[56px] md:text-[66px] lg:text-[80px] xl:text-[90px] leading-120 font-extrabold text-primary md:mb-4 lg:mb-10'
            >
                Ayudá a nuestros rescatados
            </h1>
            <span
            className='text-[20px] sm:text-[28px] md:text-[32px] lg:text-[34px] xl:text-[42px] leading-snug font-light opacity-90'
            >
            Doná hoy, tu contribución puede marcar la diferencia en la vida de nuestros rescatados
            </span>
        </div>
    </section>
  )
}