import React from 'react'

export const ContactItem = ( { contact } ) => {

  return (
    <li className='flex items-start space-x-4'>
        <figure className='min-w-8 w-8 h-8 flex items-center justify-center'>
            <img 
                src={contact.icon} 
                alt={`${contact.itemName} icono`}
                className=''
            />
        </figure>
        <div className='space-y-2'>
            <span tabIndex={0} className='block text-sm lg:text-lg'>
                {contact.itemName}
            </span>
            <small tabIndex={0} className='block text-primary text-[12px] md:text-sm lg:text-base'>
                {contact.value}
            </small>
        </div>

    </li>
  )
}
