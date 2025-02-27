import React from 'react'

export const ContactItem = ( { contact } ) => {

  return (
    <li className='flex items-start space-x-4'>
        <figure className='min-w-6 w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center'>
            <img 
                src={contact.icon} 
                alt={`${contact.itemName} icono`}
                className=''
            />
        </figure>
        <div className='space-y-2'>
            <h3 tabIndex={0} className='block text-sm lg:text-lg'>
                {contact.itemName}
            </h3>
            <p tabIndex={0} className='block text-primary text-[12px] lg:text-sm '>
                {contact.value}
            </p>
        </div>
    </li>
  )
}
