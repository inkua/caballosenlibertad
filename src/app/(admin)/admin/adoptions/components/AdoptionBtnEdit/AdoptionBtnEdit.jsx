"use client";

import AdoptionForm from "../AdoptionForm/AdoptionForm";

function AdoptionBtnEdit({ data, open, setOpen, disabled = false }) {
    const setData = async (newData, aid) => {
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
            alert("Operación Exitosa!");
        } else {
            alert("No se pudo realizar la operación!");
        }
    }


    return (
        <>
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
