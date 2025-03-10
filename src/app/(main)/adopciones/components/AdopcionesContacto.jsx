import { ContactItem } from './ContactItem'

const Contactos = [
    {
        icon: '/svg/icons/email-icon.svg',
        itemName: 'Correo electrónico',
        value: 'caballosenlibertad@hotmail.com.ar'
    },
    {
        icon: '/svg/icons/mobil-icon.svg',
        itemName: 'Teléfono',
        value: '+54 9 221 638-3686'
    },
    {
        icon: '/svg/icons/ubicacion-icon.svg',
        itemName: 'Ubicación',
        value: 'Zona Sur, La Plata, Buenos Aires'
    },
]

export const AdopcionesContacto = () => {

  return (
    <ul className='space-y-6 md:pl-8 md:pt-2 w-full'>
        {
            Contactos.map((contact) => (
                <ContactItem contact={contact} key={`item-id-${contact.itemName}`}/>
            ))
        }
    </ul>
  )
}