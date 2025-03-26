'use client'

import { HelpItem } from './HelpItem'
import { useRouter } from 'next/navigation'

export const HelpDonation = () => {

  const router = useRouter()

  const handleItemClick = () => {
    router.replace('/donar/contribuciones')
  }

  return (
    <>
      <HelpItem 
        priority={true} 
        text={`Donación \nmonetaria`} 
        image={'/assets/donar/Aporte-monetario.svg'}
        buttonText={'Hacé tu aporte'}
        handleItemClick={handleItemClick}
      />
    </>
  )
}
