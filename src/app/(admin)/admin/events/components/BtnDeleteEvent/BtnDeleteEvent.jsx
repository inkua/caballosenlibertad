
"use client"

import { useToast } from "@/utils/toast"
import { useRouter } from "next/navigation"
import { useState } from "react";
import { useConfirmDialog } from "@/utils/hooks/useConfirmDialog";
import BlockingOverlay from "@/app/components/BlockingOverlay/BlockingOverlay";

function BtnDeleteEvent({ data }) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);
    const { confirm, ConfirmDialogComponent } = useConfirmDialog();
    const { showToast } = useToast()

    const handleDelete = async () => {
        const isConfirmed = await confirm("Desea eliminar el registro?");

        if (isConfirmed) {
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
                    showToast({ type: "success", message: 'Operación exitosa' })
                } else {
                    showToast({ type: 'error', message: 'No se pudo realizar la operación!' })
                }
            } catch (error) {
                showToast({ type: 'error', message: 'No se pudo realizar la operación!' })
                console.error(error)
            } finally {
                setIsLoading(false)
                reloadPage(router)
            }
        }
    }

    return (
        <>
            {ConfirmDialogComponent}
            
            <button
                onClick={handleDelete}
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
