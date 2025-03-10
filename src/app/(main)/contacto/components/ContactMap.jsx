export default function  ContactMap() {
    return (
        <div role='region' className='flex flex-col justify-between gap-4 w-full md:w-[50%]'>
            <h2 className='font-extrabold text-primary text-h2 duration-200'>¿Dónde estamos?</h2>
            <p className='text-primary text-p3 duration-200'>Zona Sur, La Plata, Buenos Aires</p>
            <div className='w-full aspect-video'>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128148.67719247872!2d-58.003006196056006!3d-34.91581781995278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62b1f0085a1%3A0xbcfc44f0547312e3!2sLa%20Plata%2C%20Buenos%20Aires%20Province!5e0!3m2!1sen!2sar!4v1739021423361!5m2!1sen!2sar"
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                    className='w-full h-full'></iframe>
            </div>
            <h2 className='font-extrabold text-primary text-h2 duration-200 mt-8 md:mt-4 hidden md:block'>Teléfonos</h2>

            <p className='text-primary text-p3 duration-200 hidden md:block'>+54 9 221 638 3686</p>
            <p className='text-primary text-p3 duration-200 hidden md:block'>+54 9 11 310 66232</p>
            <p className='text-primary text-p3 duration-200 hidden md:block'>+54 9 280 468 0326</p>
            <p className='text-primary text-p3 duration-200 hidden md:block'>+54 9 2213 59 0511</p>
        </div>
    )
}