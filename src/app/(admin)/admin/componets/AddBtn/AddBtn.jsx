'use client'

import { useState } from "react"
import { addProduct } from "@/DAO/products.db"

function AddBtn({ entity }) {

    const [isOpen, setIsOpen] = useState(false)
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(entity=='products'){
            addProduct({
                nombre,
                precio, 
                cantidad,
                categoria
            })
        }
        setNombre('')
        setPrecio('')
        setCantidad('')
        setCategoria('')

        setIsOpen(false)
    }
    return (
        <>
            <div className="flex items-center mt-4 gap-x-3">
                <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
                    onClick={() => setIsOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>

                    <span>Nuevo</span>
                </button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-white text-black rounded-lg p-6 shadow-lg w-full md:w-[500px] lg:w-[900px]">
                        <h2 className="text-xl font-bold mb-4 ">Añadir Nuevo Usuario</h2>

                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label class="text-black " for="username">Username:nombre</label>
                                    <input
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                        id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-200 dark:text-gray-800 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label class="text-black " for="emailAddress">Email Address:precio</label>
                                    <input
                                        value={precio}
                                        onChange={(e) => setPrecio(e.target.value)}
                                        id="emailAddress" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-200 dark:text-gray-800 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label class="text-black " for="password">Password:cantidad</label>
                                    <input
                                        value={cantidad}
                                        onChange={(e) => setCantidad(e.target.value)}
                                        id="password" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-200 dark:text-gray-800 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label class="text-black " for="passwordConfirmation">Password Confirmation:categoria</label>
                                    <input
                                        value={categoria}
                                        onChange={(e) => setCategoria(e.target.value)}
                                        id="passwordConfirmation" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-200 dark:text-gray-800 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                            </div>

                            <div className="flex justify-end space-x-4 pt-4">
                                <button class="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    <span class="mx-1">Save</span>
                                </button>


                                <button class="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                                    onClick={() => setIsOpen(false)} type="button">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                    <span class="mx-1">Cancel</span>
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default AddBtn
