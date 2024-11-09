"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FormUser from "../FormEvent/FormEvent";
import { addEventImage, delEventImage } from "@/DAO/events.db";

function BtnEditEvent({ data }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const oldUrl = data.url;

  const updateData = async (newData) => {
    if ((await newData.newData.url) != oldUrl) {
      await delEventImage(oldUrl);
      newData.newData.url = await addEventImage(newData.newData.url);
    }

    const response = await fetch("http://localhost:3000/api/events", {
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
        className="block px-4 py-2 text-sm text-gray-700 hover:underline"
        role="menuitem"
        tabIndex="-1"
        id="menu-item-0">
        Edit
      </button>

      <FormUser
        isOpen={open}
        setIsOpen={setOpen}
        saveEvent={updateData}
        data={data}
        add={false}
      />
    </>
  );
}

export default BtnEditEvent;
