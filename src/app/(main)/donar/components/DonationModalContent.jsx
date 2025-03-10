import Link from 'next/link'

import { TypeSection } from './HowToHelp'

export const DonationModalContent = ({ codigo }) => {

    return (
        <div>
            {
                codigo === TypeSection.APADRINAR &&
                <>
                    <p className='text-[16px] md:text-[18px] lg:text-[24px]'>
                        Para ser madrina o padrino de un rescatado, solo se requiere una donación mensual del monto que elijas. Eso va a ir destinado a la alimentación y medicación de tu ahijado/a. No hay un monto mínimo ni máximo, es a voluntad.
                    </p>
                    <p className='text-[16px] md:text-[18px] lg:text-[24px] pt-4'>
                        Se puede realizar mediante Paypal, mercado pago o nuestra cuenta bancaria (deposito o transferencia)
                    </p>
                    <br />
                    <div className='w-full lg:mt-6 flex space-x-2 md:space-x-4 lg:space-x-8'>
                        <Link
                            className='button-primary w-full md:max-w-[248px] leading-4 h-[40px] lg:h-[50px] !px-2 lg:!px-0 flex items-center justify-center text-nowrap  text-[13px] lg:text-[16px] font-semibold'
                            href="/donar/contribuciones"
                            alt="Mercado Pago - Paypal"
                        >Métodos de Pago</Link>

                        <Link
                            className='button-primary w-full md:max-w-[248px] leading-4 h-[40px] lg:h-[50px] !px-2 lg:!px-0 flex items-center justify-center text-nowrap  text-[13px] lg:text-[16px] font-semibold'
                            href="/donar/contribuciones#CuentaBancaria"
                            alt="cuentas"
                        >Cuenta Bancaria</Link>

                    </div>
                </>
            }
            {
                codigo === TypeSection.ALIMENTO &&
                <>
                    <p className='text-[16px] md:text-[18px] lg:text-[24px]'>
                        Es fundamental que la mayor parte de la alimentación de caballos sea forraje, es decir para que te informemos de que manera colaborar con dichos alimentos.
                    </p>
                    <br />
                    <p className='text-[16px] md:text-[18px] lg:text-[24px]'>
                        Comunicate con nosotros para que te informemos de que manera colaborar con dichos alimentos.
                    </p>
                    <br />
                    <div className='w-full lg:mt-6 flex space-x-2 md:space-x-4 lg:space-x-8'>
                        <Link
                            className='button-primary w-full md:max-w-[248px] leading-4 h-[40px] lg:h-[50px] !px-2 lg:!px-0 flex items-center justify-center text-nowrap  text-[13px] lg:text-[16px] font-semibold'
                            href="/contacto"
                            alt="contact"
                        >ENVIAR CORREO</Link>

                        <a
                            className='button-primary w-full md:max-w-[248px] h-[40px] lg:h-[50px] !px-0 flex items-center justify-center text-[13px] lg:text-[16px] font-semibold'
                            href="https://api.whatsapp.com/send/?phone=5492216383686&text&type=phone_number&app_absent=0"
                            rel="noopener noreferrer"
                            target="_blank"
                        >CHATEAR</a>
                    </div>
                </>
            }
            {
                codigo === TypeSection.INSUMOS_MEDICOS &&
                <>
                    <p className='text-[16px] md:text-[18px] lg:text-[24px]'>
                        Si consideras que puedes donar alguno de los insumos listados debajo ponte en contacto con nosotros para que te informemos de qué manera colaborar.
                    </p>
                    <br />
                    <div className='w-full lg:mt-6 flex space-x-2 md:space-x-4 lg:space-x-8'>
                        <Link
                            className='button-primary w-full md:max-w-[248px] leading-4 h-[40px] lg:h-[50px] !px-2 lg:!px-0 flex items-center justify-center text-nowrap  text-[13px] lg:text-[16px] font-semibold'
                            href="/contacto"
                            alt="contact"
                        >ENVIAR CORREO</Link>
                        <a
                            className='button-primary w-full md:max-w-[248px] h-[40px] lg:h-[50px] !px-0 flex items-center justify-center text-[13px] lg:text-[16px] font-semibold'
                            href="https://api.whatsapp.com/send/?phone=5492216383686&text&type=phone_number&app_absent=0"
                            rel="noopener noreferrer"
                            target="_blank"
                        >CHATEAR</a>
                    </div>
                    <div className='max-h-60 overflow-y-auto mt-6 lg:mt-8 p-2 px-4 border rounded'>
                        <ul className='list-disc pl-5'>
                            <li>DMSO inyectable/tópico</li>
                            <li>Fenilbutazona inyectable/comprimidos</li>
                            <li>Dexametasona</li>
                            <li>Flunixin de Meglumina</li>
                            <li>Gasint</li>
                            <li>Equitrim</li>
                            <li>Penicilina G Sódica</li>
                            <li>Ceftiofur</li>
                            <li>Metronidazol</li>
                            <li>Omeprazol</li>
                            <li>Xilacina</li>
                            <li>Diazepam</li>
                            <li>Tramado</li>
                            <li>Acepromacina</li>
                            <li>Metocarbamol</li>
                            <li>Lidocaína</li>
                            <li>Gentamicina</li>
                            <li>Terramicina</li>
                            <li>Duvamicina</li>
                            <li>Duvabron</li>
                            <li>Solución Fisiológica, CINa</li>
                            <li>Ringer-Lactato, Dextrosa</li>
                            <li>Glucosa Vitaminada</li>
                            <li>ACS</li>
                            <li>Red Cell</li>
                            <li>Aceite de Canola / arroz / pescado</li>
                            <li>Aminoácidos</li>
                            <li>Ácido Tióctico</li>
                            <li>Ácido zoledrónico</li>
                            <li>Amikacina</li>
                            <li>Betametasona</li>
                            <li>Enteropectin / Smectite</li>
                            <li>Curabichera en pasta/Aerosol</li>
                            <li>Vaselina líquida</li>
                            <li>Platul, propóleo, crema de ordeñe</li>
                            <li>Nitrofurasona</li>
                            <li>Sulfato de cobre</li>
                            <li>Azul de metileno / Cicatrizo</li>
                            <li>Catéter 14G - 16G - Arrow</li>
                            <li>Agujas 18G - 21G</li>
                            <li>Jeringas 5 - 10 - 20 - 60ml</li>
                            <li>Tubos de ensayo</li>
                            <li>Vendas Vetrap - Cambric - de descanso</li>
                            <li>Algodón, gasas, alcohol, agua oxigenada, iodo povidona, iodo jabonoso, iodo doble</li>
                            <li>Guías de suero macro gotero, llave de 3 vías</li>
                            <li>Antiparasitario (Febendazol, ivermectina, praziquantel)</li>
                        </ul>
                    </div>
                </>
            }
        </div>
    )
}
