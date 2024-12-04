import React from 'react'
import ContactMap from '../components/ContactMap'
import ContactForm from '../components/ContactForm'

export default function page() {
  return (
    <div className='flex items-center justify-center pt-32 pb-10'>
        <div className='flex justify-center flex-wrap gap-10 w-full'>
        <ContactMap phone={"+54 9 221 638-3686"} ubication={"Zona Sur, La Plata, Buenos Aires"} />
        <ContactForm />
        </div>
    </div>
  )
}
