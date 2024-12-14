import React from 'react'
import ContactMap from '../components/ContactMap'
import ContactForm from '../components/ContactForm'

export default function page() {
  return (
    <main className='pb-10 pt-[70px] lg:pt-[170px] lg:mx-auto '>
        <div className='flex flex-col md:flex-row justify-center gap-[70px] px-mobile md:px-tablet xl:px-mobile max-w-content mx-auto'>
          <ContactMap phone={"+54 9 221 638-3686"} ubication={"Zona Sur, La Plata, Buenos Aires"} />
          <ContactForm />
        </div>
    </main>
  )
}
