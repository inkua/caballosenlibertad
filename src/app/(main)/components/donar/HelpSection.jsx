import React from 'react'

const HelpSection = ( { children, pText } ) => {
  return (
    <div className='grid lg:grid-cols-2 gap-12 lg:gap-16'>
        {children}
        <div className='bg-primary2 text-[16px] md:text-[24px] lg:text-[32px] p-8 rounded-2xl font-light'>
            <p>{pText}</p>
        </div>
    </div>
  )
}

export default HelpSection