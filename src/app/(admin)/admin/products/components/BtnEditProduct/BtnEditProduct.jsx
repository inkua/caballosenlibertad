"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import FormProduct from "../FormProduct/FormProduct"


function BtnEditProduct({ data }) {
    const [open, setOpen] = useState(false)

    const router = useRouter()

    const updateData = async (newData) => {
        const response = await fetch('http://localhost:3000/api/products', {
            method: 'PUT',
            body: JSON.stringify({
                token: '',
                data: newData,
            }),
        });

        const data = await response.json();

        if (data.data) {
            alert("Operación Exitosa!")
            router.refresh()
        } else {
            alert("No se pudo realizar la operación!")
        }
    }


    return (
        <>
            <button onClick={() => setOpen(true)} className="block px-4 py-2 text-sm text-gray-700 hover:underline" role="menuitem" tabIndex="-1" id="menu-item-0">Edit</button>

            <FormProduct isOpen={open} setIsOpen={setOpen} saveData={updateData} data={data} add={false} />
        </>
    )
}

export default BtnEditProduct
