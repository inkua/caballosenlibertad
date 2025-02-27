"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const FooterTeam = () => {
    const [loading, setLoading] = useState()
    const [imgUrl, setImgUrl] = useState("/thumbnailVideo.webp")

    const fetchImage = async () => {
        try {
            const response = await fetch('/api/team')
            const result = await response.json()

            if (result.status === 200 && result.data?.imgUrl) {
                setImgUrl(result.data.imgUrl)
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
        <>
            {loading ?
                <div className="hidden md:block w-full p-16"><spam className="text-center text-black animate-pulse">Cargando imágen ... </spam></div>
                :
                <div role="region">
                    <Image
                        className="hidden md:block w-full h-auto object-cover mt-[2rem] max-w-banner mx-auto aspect-[9/3]"
                        src={imgUrl}
                        alt="Equipo de la ONG"
                        width={1500}
                        height={1000}
                    />
                </div>
            }
        </>
    )
}

export default FooterTeam
