import { getStats } from '@/DAO/generic.db'
import Image from 'next/image'


export const Statistics = async () => {
    const { statistics } = await getStats()
    
    return (
        <article className='flex flex-col xl:flex-row w-full items-center justify-between text-primary gap-4'>
            <p className='w-full text-center sm:text-start xl:w-[45%] font-medium text-[18px] sm:text-[30px]'>
                Nuestro trabajo ha ayudado a mejorar la calidad de vida de cientos de caballos
            </p>
            <div className='max-w-[300px] sm:max-w-none w-full xl:w-[55%] grid grid-cols-2 sm:grid-cols-4 gap-2'>
                {
                    statistics.map((item) => (
                        <div
                            key={`statistic-id-${item.name}`}
                            className='flex flex-col items-center w-full text-primary p-2 rounded-md'
                        >
                            <Image
                                src={item.icon}
                                alt={`Icono representativo para ${item.name}`}
                                width={33}
                                height={33}

                                className={`w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[33px] md:h-[33px] bg-transparent mt-[2px]`}
                            />
                            <strong className='text-[25px] sm:text-[33px] md:text-[44px] mt-2'>{item.amount}</strong>
                            <span className='text-[13px] sm:text-base font-semibold whitespace-nowrap'>{item.name}</span>
                        </div>
                    ))
                }
            </div>
        </article>
    )
}