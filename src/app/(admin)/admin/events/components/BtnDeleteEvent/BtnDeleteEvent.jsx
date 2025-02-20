
"use client"

import { useToast } from "@/utils/toast"
import { useRouter } from "next/navigation"
import BlockingOverlay from "../../../componets/BlockingOverlay/BlockingOverlay";
import { useState } from "react";

function BtnDeleteEvent({data}) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);
    const { showToast } = useToast()

    const handleConfirm = () => {
        if (confirm('Confirma eliminar evento?')) {
            return deleteData()
        }
        return 0
    }

    const deleteData = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(`/api/events/`, {
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
            } else {
                showToast({type:'error', message:'No se pudo realizar la operación!'})
            }
        } catch (error) {
            showToast({type:'error', message:'No se pudo realizar la operación!'})
        } finally {
            setIsLoading(false)
            reloadPage(router)
        }
    }

    return (
        <>
            <button 
                onClick={handleConfirm} 
                className="inline-flex px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 w-full" 
                role="menuitem" 
                tabIndex="-1" 
                id="menu-item-0"
            >Eliminar</button>

            <BlockingOverlay isLoading={isLoading} />
        </>
    )

}

export default BtnDeleteEvent;
