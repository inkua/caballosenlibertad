"use client";

import { useRouter } from "next/navigation";

function BtnDeleteEvent({ data }) {
  const router = useRouter();

  const deleteData = async () => {
    const response = await fetch(`http://localhost:3000/api/events/`, {
      method: "DELETE",
      body: JSON.stringify({
        token: "",
        id: data.id,
        url: data.url,
      }),
    });

    const responseData = await response.json();

    if (responseData.data) {
      alert("Operación Exitosa!");
      router.refresh();
    } else {
      alert("No se pudo realizar la operación!");
    }
  };

  return (
    <>
      <button
        onClick={deleteData}
        className="block px-4 py-2 text-sm text-gray-700 hover:underline"
        role="menuitem"
        tabIndex="-1"
        id="menu-item-0">
        Delete
      </button>
    </>
  );
}

export default BtnDeleteEvent;
