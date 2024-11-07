"use client";

import { cache, useState } from "react";
import FormProduct from "../FormProduct/FormProduct";
import { useRouter } from "next/navigation";
import { addProductImage } from "@/DAO/products.db";

function BtnProduct() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const saveProduct = async (product) => {
    product.url = await addProductImage(product.url);

    const response = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({
        token: "",
        data: product,
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
      <div classNameName="flex items-center mt-4 gap-x-3">
        <button
          classNameName="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
          onClick={() => setIsOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            classNameName="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          <span>Nuevo</span>
        </button>
      </div>

      <FormProduct
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        saveData={saveProduct}
      />
    </>
  );
}

export default BtnProduct;
