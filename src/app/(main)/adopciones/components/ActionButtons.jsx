import Link from 'next/link'

export const ActionButtons = () => {
    return (
        <div className='lg:mt-2 flex space-x-2 md:space-x-4 lg:space-x-8'>
            <Link
                href="/contacto"
                alt="contact"
                className='button-primary w-full md:w-[148px] flex items-center justify-center leading-4 h-[40px] !px-2 lg:!px-0'
            >ENVIAR CORREO</Link>
            <a
                className='button-primary w-full md:w-[148px] h-[40px] !px-0'
                href="https://api.whatsapp.com/send/?phone=5492216383686&text&type=phone_number&app_absent=0"
                rel="noopener noreferrer"
                target="_blank"
            >CHATEAR</a>
        </div>
    )
}
