"use client";

import { useRouter } from "next/navigation";
import { addUserImage, delUserImage } from "@/DAO/users.db";
import AdminFrom from "../AdminForm/AdminForm";

function AdminBtnEdit({ data, open, setOpen, disabled=false }) {
    const router = useRouter();
    const oldUrl = data.url;

    const updateData = async (newData) => {
        if ((await newData.newData.url) != oldUrl) {
            await delUserImage(oldUrl);
            newData.newData.url = await addUserImage(newData.newData.url);
        }

        const response = await fetch("http://localhost:3000/api/admin", {
            method: "PUT",
            body: JSON.stringify({
                data: newData,
            }),
        });

        const data = await response.json();

        if (data.data) {
            alert("Operación Exitosa!");
            router.refresh();
        } else {
            alert("No se pudo realizar la operación!");
        }
    };

    return (
        <>
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
