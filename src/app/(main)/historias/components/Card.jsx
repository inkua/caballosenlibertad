"use client";
import Image from "next/image";
import { useState } from "react";

function Card({ name, data, alt, info }) {
    const [modal, setModal] = useState(false);
    return (
        <div className="relative w-full h-auto mb-4 cursor-pointer">
            <Image
                src={data}
                alt={alt}
                width={700}
                height={700}
                className="w-full h-auto"
                loading="eager"
            />

            <div className="group absolute flex w-full h-full justify-center items-center bg-black/0 top-0 hover:bg-black/50 duration-150">
                <button className="w-full h-full flex justify-center items-center" type="button" onClick={() => setModal(true)}>
                    <h2 className="text-h3 text-white font-bold hidden group-hover:flex uppercase">{name}</h2>
                </button>
            </div>

            {/* Modal */}
            {modal && (
                <div
                    className="fixed inset-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-50"
                >
                    <div className="flex fixed max-w-content m-auto  px-mobile md:px-tablet lg:px-desktop inset-0 justify-center items-center gap-8" role="dialog" aria-modal="true">
                        
                        <div className="w-full h-auto m-auto max-w-[1280px] max-h-[90%] md:max-h-[70%] p-8 flex flex-col md:flex-row md:items-center gap-6 overflow-y-auto bg-[#F2F6F8] rounded-3xl shadow-lg relative">
                            <div className="w-full h-auto min-w-[220px] md:w-1/2 lg:w-1/3">
                                <Image
                                    src={data}
                                    alt={alt}
                                    width={900}
                                    height={900}
                                    className="w-full h-full md:h-auto aspect-video md:aspect-square object-center object-cover"
                                />
                            </div>

                            <div className="h-full md:h-auto w-full md:w-1/2 lg:w-2/3 md:self-start">
                                <h1 className="font-bold text-h2 text-primary pb-2">{name}</h1>
                                <p className="par-1 md:text-lg h-full text-[#03151F]">
                                    {info}
                                </p>
                            </div>

                            <button
                                className="absolute top-2 right-2 heading-2 cursor-pointer hover:text-primaryColor duration-200 rounded-full bg-white shadow-gray-400 hover:bg-primary hover:text-white shadow-md w-8 h-8"
                                onClick={() => setModal(false)}
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

export default Card;