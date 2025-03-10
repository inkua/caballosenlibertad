import { HelpDonation } from './HelpDonation'
import HelpSection from './HelpSection'

export const TypeSection = {
    ALIMENTO: 'alimento',
    INSUMOS_MEDICOS: 'insumos medicos',
    APADRINAR: 'apadrinar',
}

export const HowToHelp = () => {

    return (
        <div
            className="w-full mx-auto my-6"
        >
            <h2 className='mb-14 md:mb-20 lg:mb-24 text-start text-[28px] text-primary font-bold leading-140 md:text-[36px] lg:text-[42px] xl:text-[50px] lg:font-extrabold'>¿Cómo ayudar?</h2>
            <div className="grid md:grid-cols-4 gap-20 md:gap-14">
                <HelpDonation />
                <HelpSection
                    codigo={TypeSection.ALIMENTO}
                    text={`Alimentos`}
                    image={'/assets/donar/alimento.svg'}
                />
                <HelpSection
                    codigo={TypeSection.INSUMOS_MEDICOS}
                    text={`Insumos \nmédicos`}
                    image={'/assets/donar/medicina.svg'}
                />
                <HelpSection
                    codigo={TypeSection.APADRINAR}
                    text={`Apadrinar`}
                    image={'/assets/donar/apadrinar.svg'}
                />
            </div>
        </div>
    )
}
