import { useConfirmDialog } from "@/utils/hooks/useConfirmDialog";
import { useToast } from "@/utils/toast";
import { useState } from "react";
import BlockingOverlay from "../../../componets/BlockingOverlay/BlockingOverlay";

export default function AdminBtnRestorePass({ admin, disabled=false }) {
    const [isLoading, setIsLoading] = useState(false);
    const { confirm, ConfirmDialogComponent } = useConfirmDialog();
    const { showToast } = useToast()

    const handlerClick = async () => {
        const isConfirmed = await confirm("Al restaurar la contraseña se eliminará la anterior.");
        if (isConfirmed) {
            setIsLoading(true);

            try {
                const response = await fetch('/api/admin/pass/reset', {
                    method: 'POST',
                    body: JSON.stringify({
                        data: admin,
                    }),
                });
                if(response.ok){
                    showToast({ type: "success", message: 'Contraseña enviada!' })
                }
                else{
                    showToast({ type: 'error', message: 'No se pudo realizar la operación!' })
                }
            } catch (error) {
                showToast({ type: 'error', message: 'No se pudo realizar la operación!' })
                console.error(error)
            }finally {
                setIsLoading(false);
            }
        }
    }

    return (
        <>
            {ConfirmDialogComponent}
            <BlockingOverlay isLoading={isLoading} />

            <button
                onClick={() => handlerClick()}
                className={`block px-4 py-2 text-sm ${disabled? "text-gray-400": "text-gray-700 hover:underline"} `}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                disabled={disabled}>
                Restaurar Contraseña
            </button>

        </>
    )
}
