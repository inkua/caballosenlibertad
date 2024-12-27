"use client";
import { useRef, useState } from "react";

function ResetPasswordForm() {
    const emailRef = useRef(null)
    const currentPswRef = useRef(null)

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const data = {
                email: emailRef.current.value,
                currentPass: currentPswRef.current.value,
                newPass: password
            }
            const response = await fetch('/api/admin/pass/change', {
                method: 'POST',
                body: JSON.stringify(data),
            });
            const result = await response.json()

            if (result.data) {
                alert("Operación Exitosa, puedes ingresar a la plataforma desde el login con tu nueva contraseña")
            } else {
                alert("No se pudo cambiar la contraseña, verifique los campos")
            }

        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Correo
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Correo asociado a su cuenta"
                    ref={emailRef}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>

            <div className="mb-6">
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Contraseña actual/provisional
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Su contraseña"
                    ref={currentPswRef}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>

            <div className="mb-6">
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Nueva contraseña
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Ingrese su nueva contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>

            <div className="mb-6">
                <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Confirmar contraseña
                </label>
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirme su nueva contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors && <p className="mt-1 text-sm text-red-500">{errors}</p>}
            </div>

            <div className="mt-6">
                <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Cambiar contraseña
                </button>
            </div>
        </form>
    );
}

export default ResetPasswordForm;
