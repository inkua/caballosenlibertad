export default function ContactMap({ ubication, phone }) {
    return (
        <div className='flex flex-col justify-between gap-4 w-full md:w-[50%]'>
            <h2 className='font-extrabold text-primary text-h2 duration-200'>¿Dónde estamos?</h2>
            <p className='text-primary text-p3 duration-200'>{ubication}</p>
            <div className='w-full aspect-square'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128148.67719247872!2d-58.003006196056006!3d-34.91581781995278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62b1f0085a1%3A0xbcfc44f0547312e3!2sLa%20Plata%2C%20Buenos%20Aires%20Province!5e0!3m2!1sen!2sar!4v1739021423361!5m2!1sen!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full h-full'></iframe>
            </div>
            <h2 className='font-extrabold text-primary text-h2 duration-200 mt-8 md:mt-4'>Teléfono</h2>
            <p className='text-primary text-p3 duration-200'>{phone}</p>
        </div>
    )
}