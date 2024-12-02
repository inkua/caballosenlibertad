"use client";

import { useToast } from "@/utils/toast";
import { useRouter } from "next/navigation";

function BtnDeleteUser({ data }) {
  const router = useRouter();
  const { showToast } = useToast()

  const handleConfirm = () => {
    if (confirm('Confirma eliminar usuario?')) {
        return deleteData()
    }
    return 0
}

  const deleteData = async () => {
    const response = await fetch(`http://localhost:3000/api/users/`, {
      method: "DELETE",
      body: JSON.stringify({
        token: "",
        id: data.id,
        url: data.url,
      }),
    });

    const responseData = await response.json();

    if (responseData.data) {
      showToast({message:'Usuario eliminado!'})
      router.refresh()
    } else {
        showToast({type:'error', message:'No se pudo realizar la operación!'})
    }
  };

  return (
    <>
      <button
        onClick={handleConfirm}
        className="block px-4 py-2 text-sm text-gray-700 hover:underline"
        role="menuitem"
        tabIndex="-1"
        id="menu-item-0">
        Eliminar
      </button>
    </>
  );
}

export default BtnDeleteUser;
