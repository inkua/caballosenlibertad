"use client";

import { useConfirmDialog } from "@/utils/hooks/useConfirmDialog";
import { useToast } from "@/utils/toast";
import { useRouter } from "next/navigation";
import { reloadPage } from "../../../utils";
import { useState } from "react";
import BlockingOverlay from "../../../componets/BlockingOverlay/BlockingOverlay";

function AdminBtnDelete({ data, disabled = false }) {
    const [isLoading, setIsLoading] = useState(false);
    const { showToast } = useToast()
    const { confirm, ConfirmDialogComponent } = useConfirmDialog(); // Usa el hook
    const router = useRouter()

    const { id } = data

    const handleDelete = async () => {
        const isConfirmed = await confirm();

        if (isConfirmed) {
            setIsLoading(true);

            try {
                const response = await fetch(`/api/admin`, {
                    method: "DELETE",
                    body: JSON.stringify({
                        id: id,
                    }),
                });

                const result = await response.json();

                if (result.status == 200) {
                    showToast({ type: "success", message: 'Administrador eliminado!' })
                } else {
                    showToast({ type: 'error', message: 'No se pudo realizar la operación!' })
                }
            } catch (error) {
                showToast({ type: 'error', message: 'No se pudo realizar la operación!' })
                console.error(error)
            } finally {
                setIsLoading(false);
                reloadPage(router)
            }
        }
    };

    return (
        <>
            {ConfirmDialogComponent}
            <BlockingOverlay isLoading={isLoading} />

            <button
                onClick={handleDelete}
                className={`block px-4 py-2 text-sm ${disabled ? "text-gray-400" : "text-gray-700 hover:underline"} `}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                disabled={disabled}>
                Eliminar
            </button>
        </>
    );
}

export default AdminBtnDelete;
