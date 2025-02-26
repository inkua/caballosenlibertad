"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'
import TeamBtnImage from './TeamBtnImage/TeamBtnImage'

const TeamImage = () => {
    const [loading, setLoading] = useState(true)
    const [team, setTeam] = useState({})
    const [openModal, setOpenModal] = useState(false)

    const fetchImage = async () => {
        setLoading(true)
        try {
            const response = await fetch('/api/team')
            const result = await response.json()

            if (result.status === 200 && result.data?.imgUrl) {
                setTeam(result.data)
            } else {
                console.error("Error en la respuesta de la API", result)
            }
        } catch (error) {
            console.error("Error al obtener la imagen:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchImage()
    }, [])

    return (
        <section className="w-full mt-4 py-6 md:pb-12 bg-primary2 rounded-md">
            <div className="container px-4 md:px-6">
                <h2 className="pb-4 md:pt-0 text-[20px] font-light text-white md:text-darkBlue md:text-3xl">
                    Imagen del equipo - Página Nosotros
                </h2>
                <div className="flex flex-col items-center space-y-4 md:flex-row md:items-start md:space-x-8 md:space-y-0">
                    <div className="bg-white relative aspect-[9/3] w-full overflow-hidden rounded-lg bg-muted md:w-2/3 border-8 border-primary">
                        {loading ? (
                            <div className='w-full h-full grid place-items-center'>
                                <Image
                                    src="/spin.svg"
                                    alt="Cargando imagen..."
                                    width={30}
                                    height={30}
                                    className="object-center animate-spin"
                                    priority
                                />
                            </div>
                        ) : (
                            <Image
                                src={team.imgUrl}
                                alt="Imagen del equipo"
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 66vw, 100vw"
                                priority
                            />
                        )}
                    </div>
                    <div className="flex flex-col space-y-4 md:w-1/3">
                        <TeamBtnImage imgUrl={team.imgUrl} open={openModal} setOpen={setOpenModal} teamId={team.id} reload={fetchImage} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamImage
