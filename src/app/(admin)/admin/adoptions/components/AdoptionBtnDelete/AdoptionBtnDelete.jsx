import { useRouter } from "next/navigation";
import { reloadPage } from "../../../utils";
import { useConfirmDialog } from "@/utils/hooks/useConfirmDialog";
import { useToast } from "@/utils/toast";

function AdoptionBtnDelete({ aid }) {
    const router = useRouter();
    const { confirm, ConfirmDialogComponent } = useConfirmDialog();
    const { showToast } = useToast()

    const handlerDelete = async () => {
        const isConfirmed = await confirm("Desea eliminar el registro?");

        if (isConfirmed) {

            try {
                const URL = `/api/adoptions`
                const response = await fetch(URL, {
                    method: "DELETE",
                    body: JSON.stringify({
                        data: aid
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
                reloadPage(router)
            }
        }
    }
    return (
        <>
            {ConfirmDialogComponent}
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

export default AdoptionBtnDelete
