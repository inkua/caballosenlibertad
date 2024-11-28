"use client";

import { useState } from "react";
import FormEvent from "../FormEvent/FormEvent";
import { useRouter } from "next/navigation";
import { addEventImage } from "@/DAO/events.db";
import { useToast } from "@/utils/toast";

function AddBtn() {

    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const { showToast } = useToast()

    const saveEvent = async (newData) => {
        newData.url = await addEventImage(newData.url)
        const response = await fetch('http://localhost:3000/api/events', {
            method: 'POST',
            body: JSON.stringify({
                token: '',
                data: newData,
            }),
        });
        const data = await response.json();

        if (data.data) {
            showToast({type:'success', message:'Evento registrado!'})
            router.refresh()
        } else {
            showToast({type:'error', message:'No se pudo realizar la operación!'})
        }

    }
  };

  return (
    <>
      <div className="flex items-center mt-4 gap-x-3">
        <button
          className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
          onClick={() => setIsOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          <span>Nuevo</span>
        </button>
      </div>

      <FormEvent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        saveEvent={saveEvent}
        add={true}
      />
    </>
  );
}


export default AddBtn;

