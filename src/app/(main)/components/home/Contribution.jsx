import Image from 'next/image'
import Link from 'next/link'

export const Contribution = () => {
    return (
        <div role='region' className='flex flex-col text-primary gap-8 md:gap-12 lg:gap-16 self-center w-full items-center justify-center'>
            <h3 className='text-center text-[20px] md:text-[32px] lg:text-[42px] xl:text-[50px] leading-120 font-extrabold'>
                Tu apoyo también importa, ¡Ayudanos!
            </h3>
            <div className='flex items-center justify-center w-screen md:w-auto gap-[5vw]'>
                <div role="group" className='flex flex-col text-primary items-center justify-center gap-4 md:gap-8'>
                    <Image
                        src="/svg/Vector-donaciones.svg"
                        alt="Imagen donaciones"
                        width={117}
                        height={109}
                        className="w-[50px] md:w-[80px] aspect-square"
                    />
                    <Link href={'/donar'} className='font-semibold button-primary !p-0 whitespace-nowrap w-[143px] h-[40px] md:w-[300px] md:h-[58px] md:text-lg'>
                        QUIERO DONAR
                    </Link>
                </div>
                <div role="group" className='flex flex-col text-primary items-center justify-center gap-4 md:gap-8'>
                    <Image
                        src="/svg/Group-hands-heart.svg"
                        alt="Imagen donaciones"
                        width={117}
                        height={109}
                        className="w-[50px] md:w-[80px] aspect-square"
                    />
                    <Link href={'/voluntariado'} className='button-primary font-semibold md:text-lg flex items-center justify-center p-0 md:px-4 whitespace-nowrap w-[143px] h-[40px] md:w-[300px] md:h-[58px]'>
                        <span className='hidden md:flex'>QUIERO&nbsp;</span><span>SER VOLUNTARIO</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}