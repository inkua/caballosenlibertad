"use client";
import { useState } from "react";

function ForgetPasswordForm() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    let newErrors = "";
    let isValid = true;

    if (!email) {
      newErrors = "El correo electrónico es requerido";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors = "El correo electrónico no es valido";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulario válido:", { email });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Dirección de correo electrónico
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="ejemplo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
        {errors && <p className="mt-1 text-sm text-red-500">{errors}</p>}
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default ForgetPasswordForm;
