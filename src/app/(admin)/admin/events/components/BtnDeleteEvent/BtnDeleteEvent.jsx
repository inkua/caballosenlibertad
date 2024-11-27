
"use client"

import { useToast } from "@/utils/toast"
import { useRouter } from "next/navigation"

function BtnDeleteEvent({data}) {
    const router = useRouter()
    const { showToast } = useToast()

    const handleConfirm = () => {
        if (confirm('Confirma eliminar evento?')) {
            return deleteData()
        }
        return 0
    }

    const deleteData = async () => {
        const response = await fetch(`http://localhost:3000/api/events/`, {
            method: 'DELETE',
            body: JSON.stringify({
                token: '',
                id: data.id,
                url: data.url,
            }),
        });

        const responseData = await response.json();

        if (responseData.data) {
            showToast({message:'Evento eliminado!'})
            router.refresh()
        } else {
            showToast({type:'error', message:'No se pudo realizar la operación!'})
        }
    }

    return (
        <>
            <button onClick={handleConfirm} className="inline-flex px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 w-full" role="menuitem" tabIndex="-1" id="menu-item-0">Eliminar</button>
        </>
    )

}

export default BtnDeleteEvent;
