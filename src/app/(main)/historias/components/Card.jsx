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
                    className="flex fixed inset-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-50"
                >
                    <div className="flex fixed inset-0 mx-mobile sm:mx-tablet lg:mx-desktop justify-center items-center gap-8" role="dialog" aria-modal="true">
                        <div className="w-full m-auto max-w-content max-h-[95%] overflow-hidden overflow-y-auto no-scrollbar grid grid-cols-1 md:grid-cols-[50%_1fr] lg:grid-cols-[30%_1fr] items-center gap-4 lg:gap-14 px-6 py-8 lg:px-16 bg-white rounded-3xl shadow-lg relative">
                            <div className="flex w-[50%] md:w-full !aspect-square overflow-hidden relative">
                                <Image
                                    src={data}
                                    alt={alt}
                                    width={900}
                                    height={900}
                                    className="w-full h-full absolute object-cover"
                                />
                            </div>

                            <div className="flex h-full flex-col gap-4">
                                <h1 className="font-bold text-h2">{name}</h1>
                                <p className="!font-bold par-1 text-primary">
                                    {info}
                                </p>
                            </div>

                            <button
                                className="absolute top-2 right-4 heading-2 cursor-pointer hover:text-primaryColor duration-200 rounded-full bg-white shadow-gray-400 hover:bg-primary hover:text-white shadow-md w-8 h-8"
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