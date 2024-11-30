import React from 'react'

export default function page() {
    return (
        <main className='pt-[70px] lg:pt-[90px] bg-blue-950'>
            <header className='mx-mobile md:mx-tablet lg:mx-desktop grid grid-cols-4 md:grid-cols-12 bg-green-200 xl:mx-auto max-w-content'>
                <h1 className='col-span-full lg:col-start-2 lg:col-end-12'>Denuncias</h1>
                <p className='col-span-full lg:col-start-2 lg:col-end-8'>Entérate de como actuar si ves una situación de maltrato animal.</p>
            </header>

            <div className='mx-mobile md:mx-tablet lg:mx-desktop grid grid-cols-4 md:grid-cols-12 bg-green-300 xl:mx-auto max-w-content'>
                <span className='col-span-full lg:col-start-2 lg:col-end-9 bg-red-100'>¿Cómo reportar una situación de maltrato?</span>
            </div>

            <div className='mx-mobile md:mx-tablet lg:mx-desktop grid grid-cols-4 md:grid-cols-12 bg-blue-300 xl:mx-auto max-w-content'>
                <div className='col-span-full lg:col-start-2 lg:col-end-5 bg-slate-400'>card 1</div>
                <div className='col-span-full lg:col-start-8 lg:col-end-12 bg-slate-400'>card 2</div>
                <div className='col-span-full lg:col-start-2 lg:col-end-5 bg-slate-400'>card 3</div>
                <div className='col-span-full lg:col-start-8 lg:col-end-12 bg-slate-400'>card 4</div>
            </div>

        </main>
    )
}
