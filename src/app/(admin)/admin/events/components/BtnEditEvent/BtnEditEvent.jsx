"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import FormUser from "../FormEvent/FormEvent"
import { addEventImage, delEventImage } from "@/DAO/events.db";
import { useToast } from "@/utils/toast";

function BtnEditEvent({ data }) {
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const oldUrl = data.url
    const { showToast } = useToast()

    const updateData = async (newData) => {
        if (await newData.newData.url != oldUrl) {
            await delEventImage(oldUrl)
            newData.newData.url = await addEventImage(newData.newData.url)
        }

        const response = await fetch('http://localhost:3000/api/events', {
            method: 'PUT',
            body: JSON.stringify({
                token: '',
                data: newData,
            }),
        });

        const data = await response.json();

        if (data.data) {
            showToast({type:'success', message:'Datos actualizados!'})
            router.refresh()
        } else {
            showToast({type:'error', message:'No se pudo realizar la operación!'})
        }
    }


    return (
        <>
            <button onClick={() => setOpen(true)} className="inline-flex px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 w-full" role="menuitem" tabIndex="-1" id="menu-item-0">Editar</button>

            <FormUser isOpen={open} setIsOpen={setOpen} saveEvent={updateData} data={data} add={false} />
        </>
    )
}

export default BtnEditEvent
