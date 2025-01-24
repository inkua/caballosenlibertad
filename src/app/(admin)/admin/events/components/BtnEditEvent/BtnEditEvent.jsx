"use client"

import { useRouter } from "next/navigation"
import { useToast } from "@/utils/toast";
import FormEvent from "../FormEvent/FormEvent";

function BtnEditEvent({ data, open, setOpen }) {
    const router = useRouter()
    const { showToast } = useToast()

    const updateData = async (newData) => {
        const response = await fetch('/api/events', {
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

            <FormEvent isOpen={open} setIsOpen={setOpen} saveEvent={updateData} data={data} add={false} />
        </>
    )
}

export default BtnEditEvent
