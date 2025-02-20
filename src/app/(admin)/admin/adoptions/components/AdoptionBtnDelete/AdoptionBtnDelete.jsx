import { useRouter } from "next/navigation";
import { reloadPage } from "../../../utils";

function AdoptionBtnDelete({ aid }) {
    const router = useRouter();

    const handlerDelete = async () => {
        if (confirm("Desea eliminar el registro?")) {

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
                    alert("Operación Exitosa!");
                } else {
                    alert("No se pudo realizar la operación!");
                }
            } catch (error) {
                alert("No se pudo realizar la operación!");
            } finally {
                reloadPage(router)
            }
        }
    }
    return (
        <button
            onClick={() => handlerDelete()}
            className={`block px-4 py-2 text-sm text-gray-700 hover:underline `}
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0"
        >
            Eliminar
        </button>
    )
}

export default AdoptionBtnDelete
