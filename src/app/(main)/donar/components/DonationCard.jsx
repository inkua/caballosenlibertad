'use client'
import { SelectForm } from './SelectForm'

export const DonationCard = () => {

  return (
    <div className='flex flex-col items-center justify-start bg-white p-8 py-10 sm:p-12 xl:px-14 rounded-2xl sm:rounded-[20px] gap-6 w-full lg:min-w-[420px] max-w-[480px] lg:max-w-[520px]'>
      <h3 className='text-primary text-[28px] lg:text-[35px] font-bold text-start w-full'>¡Haz tu aporte!</h3>
      <SelectForm />
    </div>
  )
}
