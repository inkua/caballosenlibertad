import { AdopcionesActions } from './AdopcionesActions'
import { AdopcionesContacto } from './AdopcionesContacto'

export const AdopcionesCard = () => {
    return (
        <section
            className='min-w-[300px] md:w-full mx-auto bg-primary2 pt-12 pb-14 px-8 md:px-12 lg:p-14 lg:pb-16 rounded-2xl shadow-sm flex flex-col items-center sm:items-start justify-center md:grid grid-cols-2'
        >
            <AdopcionesActions />
            <AdopcionesContacto />
        </section>
    )
}
