import { useRouter } from "next/navigation";
import React from "react";

export default function LogoutButton() {
  const router = useRouter();

  const signout = async () => {
    await fetch("/api/logout", { method: "POST" }).then((response) => {
      if (response.ok) {
        router.push("/auth");
      }
    });
  };
  return (
    <button
      onClick={signout}
      className="w-full text-left  px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
    >
      Salir
    </button>
  );
}
