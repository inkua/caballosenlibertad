"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FormProduct from "../FormProduct/FormProduct";
import { addProductImage, delProductImage } from "@/DAO/products.db";

function BtnEditProduct({ data }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const oldUrl = data.url;

  const updateData = async (newData) => {
    if (newData.newData.url != oldUrl) {
      await delProductImage(oldUrl);
      newData.newData.url = await addProductImage(newData.newData.url);
    }

    const response = await fetch("http://localhost:3000/api/products", {
      method: "PUT",
      body: JSON.stringify({
        token: "",
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
        classNameName="block px-4 py-2 text-sm text-gray-700 hover:underline"
        role="menuitem"
        tabIndex="-1"
        id="menu-item-0">
        Edit
      </button>

      <FormProduct
        isOpen={open}
        setIsOpen={setOpen}
        saveData={updateData}
        data={data}
        add={false}
      />
    </>
  );
}

export default BtnEditProduct;
