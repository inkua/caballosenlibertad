"use client";
import { useState } from "react";

function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    let newErrors = "";
    let isValid = true;

    if (!password || password.length < 6) {
      newErrors = "La contraseña debe tener al menos 6 caracteres";
      isValid = false;
    } else if (password !== confirmPassword) {
      newErrors = "Las contraseñas no coinciden";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulario válido");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="email"
          classNameName="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Nueva contraseña
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Ingrese su nueva contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          classNameName="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div classNameName="mt-4">
        <label
          htmlFor="confirmPassword"
          classNameName="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Confirmar contraseña
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirme su nueva contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          classNameName="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
        {errors && <p classNameName="mt-1 text-sm text-red-500">{errors}</p>}
      </div>

      <div classNameName="mt-6">
        <button
          type="submit"
          classNameName="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Cambiar contraseña
        </button>
      </div>
    </form>
  );
}

export default ResetPasswordForm;
