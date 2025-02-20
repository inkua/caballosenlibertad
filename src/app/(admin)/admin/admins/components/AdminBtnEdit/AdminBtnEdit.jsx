"use client";

import { useRouter } from "next/navigation";
import AdminFrom from "../AdminForm/AdminForm";
import { reloadPage } from "../../../utils";
import { useState } from "react";
import { useToast } from "@/utils/toast";
import BlockingOverlay from "@/app/components/BlockingOverlay/BlockingOverlay";

function AdminBtnEdit({ data, open, setOpen, disabled=false }) {
    const [isLoading, setIsLoading] = useState(false);
    const { showToast } = useToast()
    const router = useRouter();

    const updateData = async (newData) => {
        setIsLoading(true);

        try {
            const response = await fetch("/api/admin", {
                method: "PUT",
                body: JSON.stringify({
                    data: newData,
                }),
            });
    
            const data = await response.json();
    
            if (data.data) {
                showToast({ type: "success", message: 'Operación exitosa' })
            } else {
                showToast({ type: 'error', message: 'No se pudo realizar la operación!' })
            }
        } catch (error) {
            showToast({ type: 'error', message: 'No se pudo realizar la operación!' })
        } finally {
            setIsLoading(false);
            reloadPage(router)
        }

    };

    return (
        <>
            <BlockingOverlay isLoading={isLoading} />

            <button
                onClick={() => setOpen(true)}
                className={`block px-4 py-2 text-sm ${disabled? "text-gray-400": "text-gray-700 hover:underline"} `}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                disabled={disabled}>
                Editar
            </button>

            <AdminFrom
                isOpen={open}
                setIsOpen={setOpen}
                saveUser={updateData}
                data={data}
                add={false}
            />
        </>
    );
}

export default AdminBtnEdit;
