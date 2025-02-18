"use client"

import { useRouter } from "next/navigation";
import BlockingOverlay from "../../../componets/BlockingOverlay/BlockingOverlay";
import { useState } from "react";
import { reloadPage } from "../../../utils";

const StoryBtnDelete = ({ sid }) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);

    const handlerDelete = async () => {
        if (confirm("Desea eliminar el registro?")) {
            
            try {
                const URL = `/api/stories`
                const response = await fetch(URL, {
                    method: "DELETE",
                    body: JSON.stringify({
                        data: sid
                    }),
                });

                const data = await response.json();

                if (data.data) {
                    alert("Operación Exitosa!");
                } else {
                    alert("No se pudo realizar la operación!");
                }
            } catch (error) {
                alert("No se pudo realizar la operación!");
            } finally {
                setIsLoading(false);
                reloadPage(router)
            }

        }
    }

    return (
        <>
            <BlockingOverlay isLoading={isLoading} />
            <button
                onClick={() => handlerDelete()}
                className={`block px-4 py-2 text-sm text-gray-700 hover:underline `}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
            >
                Eliminar
            </button>
        </>
    )
}

export default StoryBtnDelete
