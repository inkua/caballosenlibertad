"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
    const router = useRouter()
    return (
        <body>
            <section className="bg-[#F2F6F8] min-h-screen flex items-center">
                <div className="container px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                    <div className="w-full lg:w-1/2">
                        <p className="text-base font-normal text-[#00638C]">Error 404</p>
                        <h1 className="mt-3 text-4xl font-semibold text-[#00638C] md:text-5xl">
                            Página no encontrada
                        </h1>
                        <p className="mt-4 text-xl text-[#03151F]">
                            La página que buscas no existe...
                        </p>
                        <div className="flex items-center mt-6 gap-x-3">
                            <button onClick={() => router.back()}
                                className="w-36 py-2 rounded-lg text-xs border md:rounded-full md:text-sm md:font-semibold md:px-4 md:w-48 text-[#00638C] border-[#00638C66] hover:bg-[#00638C] hover:text-white"
                            > <span>ATRÁS</span> </button>

                            <Link
                                href="/"
                                alt="inicio"
                                className="w-36 py-2 rounded-lg text-xs text-center md:rounded-full md:text-sm md:font-semibold md:px-4 md:w-48 text-[#F2F6F8] bg-[#D98729] border border-[#D98729] hover:bg-transparent hover:text-[#D98729] hover:border-[#D98729]"                            >
                                VOLVER AL INICIO
                            </Link>
                        </div>
                    </div>

                    <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
                        <Image
                            className="w-full h-80 md:h-96 rounded-lg object-cover"
                            src="/assets/errors/tardeCaballos.webp"
                            alt="Page not found"
                            width={500}
                            height={500}
                        />
                    </div>

                </div>
            </section>
        </body>
    );
}