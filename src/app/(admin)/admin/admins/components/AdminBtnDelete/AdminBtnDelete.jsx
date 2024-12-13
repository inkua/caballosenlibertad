"use client";

import { useToast } from "@/utils/toast";

function AdminBtnDelete({ data, disabled = false }) {
    const { id } = data
    const { showToast } = useToast()


    const handleConfirm = () => {
        if (confirm('Confirma eliminar usuario?')) {
            return deleteData()
        };
        return 0;
    };

    const deleteData = async () => {
        const response = await fetch(`/api/admin`, {
            method: "DELETE",
            body: JSON.stringify({
                id: id,
            }),
        });

        const result = await response.json();

        if (result.status == 200) {
            showToast({ message: 'Administrador eliminado!' })
        } else {
            showToast({ type: 'error', message: 'No se pudo realizar la operación!' })
        }
    };

    return (
        <button
            onClick={handleConfirm}
            className={`block px-4 py-2 text-sm ${disabled ? "text-gray-400" : "text-gray-700 hover:underline"} `}
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0"
            disabled={disabled}>
            Eliminar
        </button>
    );
}

export default AdminBtnDelete;
