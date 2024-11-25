import { useRouter } from "next/navigation";
import React from "react";

export default function LogoutButton({ classname = "" }) {
  const router = useRouter();
  const signout = async () => {
    const response = await fetch("/api/logout", { method: "POST" });
    if (response.ok) {
      router.push("/auth");
    }
  };

  return (
    <button onClick={signout} className={`${classname}`}>
      Salir
    </button>
  );
}
