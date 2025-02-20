"use client";

import { useRouter } from "next/navigation";
import AdoptionForm from "../AdoptionForm/AdoptionForm";
import { useState } from "react";
import { reloadPage } from "../../../utils";
import { useToast } from "@/utils/toast";
import BlockingOverlay from "@/app/components/BlockingOverlay/BlockingOverlay";

function AdoptionBtnEdit({ data, open, setOpen, disabled = false }) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { showToast } = useToast()

    const setData = async (newData, aid) => {
        setIsLoading(true)

        try {
            const URL = `/api/adoptions`
            const response = await fetch(URL, {
                method: "PUT",
                body: JSON.stringify({
                    data: newData,
                    id: aid
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
            console.error(error)
        } finally {
            setIsLoading(false)
            reloadPage(router)
        }
    }


    return (
        <>
            <BlockingOverlay isLoading={isLoading} />

            <button
                onClick={() => setOpen(true)}
                className={`block px-4 py-2 text-sm ${disabled ? "text-gray-400" : "text-gray-700 hover:underline"} `}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                disabled={disabled}>
                Editar
            </button>

            <AdoptionForm
                isOpen={open}
                setIsOpen={setOpen}
                saveAdoption={setData}
                data={data}
                add={false}
            />
        </>
    )
}

export default AdoptionBtnEdit
