'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export const TeamBtn = () => {
    const [team, setTeam] = useState(false);

    return (
        <div>
            <button className="hover:underline" onClick={() => setTeam(!team)}>
                Conocé el equipo
            </button>

            {team && (
                <div className="flex fixed inset-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-50">
                    <div className="flex fixed inset-0 max-w-screen-2xl mx-auto justify-center items-center gap-8 z-50" role="section">
                        <div className="flex flex-col w-[90%] md:w-[70%] lg:w-[50%] gap-6 p-6 lg:p-10 bg-white rounded-3xl shadow-lg relative overflow-hidden overflow-y-auto no-scrollbar">
                            <h1 className="text-[25px] lg:text-[25px] text-primary !font-extrabold">EQUIPO DE DESARROLLO</h1>

                            <div className="flex flex-col md:flex-row w-full justify-center items-start">
                                <div className="flex flex-col w-[100%] md:w-[50%] gap-6">
                                    <div className="w-[100%] md:w-full">
                                        <h2 className="text-[16px] lg:text-[20px] text-left text-[#202020] !font-bold mb-2">Product Owner:</h2>
                                        <ul className="flex flex-col gap-2">
                                            <li className="flex w-full gap-2">
                                                <Image src={'/assets/Footer/linkedin.svg'} width={100} height={100} className="w-4 md:w-5" alt="logo LinkedIn" />
                                                <Link href="https://www.linkedin.com/in/manuel14mds/" target="_blank">
                                                    <h3 className="text-[13px] lg:text-[16px] text-left text-[#202020] !font-medium cursor-pointer hover:underline">Manuel Esteban Florez Lopez</h3>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="w-[100%] md:w-full">
                                        <h2 className="text-[16px] lg:text-[20px] text-left text-[#202020] !font-bold mb-2">Diseño UX/UI:</h2>
                                        <ul className="flex flex-col gap-2">
                                            <li className="flex w-full gap-2">
                                                <Image src={'/assets/Footer/linkedin.svg'} width={100} height={100} className="w-4 md:w-5" alt="logo LinkedIn" />
                                                <Link href="https://www.linkedin.com/in/mar%C3%ADa-florencia-imbrosiano-/" target="_blank">
                                                    <h3 className="text-[13px] lg:text-[16px] text-left text-[#202020] !font-medium cursor-pointer hover:underline">Maria Florencia Imbrosiano</h3>
                                                </Link>
                                            </li>

                                            <li className="flex w-full gap-2">
                                                <Image src={'/assets/Footer/linkedin.svg'} width={100} height={100} className="w-4 md:w-5" alt="logo LinkedIn" />
                                                <Link href="https://www.linkedin.com/in/paulipulisanmartin/" target="_blank" rel="noopener noreferrer">
                                                    <h3 className="text-[13px] lg:text-[16px] text-left text-[#202020] !font-medium cursor-pointer hover:underline">Paulina San Martin Sandoval</h3>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col w-full md:w-[50%] gap-6">
                                    <div className='w-full'>
                                        <h2 className="text-[16px] lg:text-[20px] text-left text-[#202020] !font-bold mb-2">Tech Leader:</h2>
                                        <ul className="flex flex-col gap-2">
                                            <li className="flex w-full gap-2">
                                                <Image src={'/assets/Footer/linkedin.svg'} width={100} height={100} className="w-4 md:w-5" alt="logo LinkedIn" />
                                                <Link href="https://www.linkedin.com/in/gevegaeche/" target="_blank">
                                                    <h3 className="text-[13px] lg:text-[16px] text-left text-[#202020] !font-medium cursor-pointer hover:underline">Gonzalo Ezequiel Vega Echeverría</h3>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full">
                                        <h2 className="text-[16px] lg:text-[20px] text-left text-[#202020] !font-bold mb-2">Desarrollo:</h2>
                                        <ul className="flex flex-col gap-2">
                                            <li className="flex w-full gap-2">
                                                <Image src={'/assets/Footer/linkedin.svg'} width={100} height={100} className="w-4 md:w-5" alt="logo LinkedIn" />
                                                <Link href="https://www.linkedin.com/in/facundo-elorz/" target="_blank">
                                                    <h3 className="text-[13px] lg:text-[16px] text-left text-[#202020] !font-medium cursor-pointer hover:underline">Facundo Elorz</h3>
                                                </Link>
                                            </li>

                                            <li className="flex w-full gap-2">
                                                <Image src={'/assets/Footer/linkedin.svg'} width={100} height={100} className="w-4 md:w-5" alt="logo LinkedIn" />
                                                <Link href="https://www.linkedin.com/in/paolamoreno7/" target="_blank">
                                                    <h3 className="text-[13px] lg:text-[16px] text-left text-[#202020] !font-medium cursor-pointer hover:underline">Paola Andrea Moreno Piñeros</h3>
                                                </Link>
                                            </li>

                                            <li className="flex w-full gap-2">
                                                <Image src={'/assets/Footer/linkedin.svg'} width={100} height={100} className="w-4 md:w-5" alt="logo LinkedIn" />
                                                <Link href="https://www.linkedin.com/in/garaycarlos/" target="_blank">
                                                    <h3 className="text-[13px] lg:text-[16px] text-left text-[#202020] !font-medium cursor-pointer hover:underline">Carlos Mauricio Garay</h3>
                                                </Link>
                                            </li>

                                            <li className="flex w-full gap-2">
                                                <Image src={'/assets/Footer/linkedin.svg'} width={100} height={100} className="w-4 md:w-5" alt="logo LinkedIn" />
                                                <Link href="https://www.linkedin.com/in/elviogaleano-fullstack-developer/" target="_blank">
                                                    <h3 className="text-[13px] lg:text-[16px] text-left text-[#202020] !font-medium cursor-pointer hover:underline">Elvio Galeano</h3>
                                                </Link>
                                            </li>

                                            <li className="flex w-full gap-2">
                                                <Image src={'/assets/Footer/linkedin.svg'} width={100} height={100} className="w-4 md:w-5" alt="logo LinkedIn" />
                                                <Link href="https://www.linkedin.com/in/felipe-blanco-muzzolon/" target="_blank">
                                                    <h3 className="text-[13px] lg:text-[16px] text-left text-[#202020] !font-medium cursor-pointer hover:underline">Felipe Blanco Muzzolón</h3>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="absolute top-4 right-4 text-[#202020] cursor-pointer duration-200 rounded-full bg-white shadow-gray-400 hover:bg-primary hover:text-white shadow-md w-8 h-8"
                                onClick={() => setTeam(!team)}
                                aria-label="Cerrar modal"
                            >
                                ✖
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}