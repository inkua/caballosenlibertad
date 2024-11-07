"use client";

import { useState } from "react";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateForm = () => {
    const newErrors = { email: "", password: "" };
    let isValid = true;

    if (!email) {
      newErrors.email = "El correo electrónico es requerido";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "El correo electrónico no es valido";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "La contraseña es requerida";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      await fetch("/api/auth", {
        method: "POST",
        body: formData,
      }).then((response) => {
        if (response.ok) {
          console.log("Login exitoso");
        } else {
          console.error("Error en la autenticación");
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="email"
          classNameName="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Correo electrónico
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="ejemplo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          classNameName="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
        {errors.email && (
          <p classNameName="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div classNameName="mt-6">
        <div classNameName="flex justify-between mb-2">
          <label
            htmlFor="password"
            classNameName="text-sm text-gray-600 dark:text-gray-200">
            Contraseña
          </label>
          <a
            href="#"
            classNameName="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          classNameName="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
        {errors.password && (
          <p classNameName="mt-1 text-sm text-red-500">{errors.password}</p>
        )}
      </div>

      <div classNameName="mt-6">
        <button
          type="submit"
          classNameName="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Iniciar sesión
        </button>
      </div>
    </form>
  );
}

export default FormLogin;
