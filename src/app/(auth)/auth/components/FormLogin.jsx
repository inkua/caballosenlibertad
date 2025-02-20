"use client";

import BlockingOverlay from "@/app/components/BlockingOverlay/BlockingOverlay";
import { useToast } from "@/utils/toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

function FormLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "" });

    const [isLoading, setIsLoading] = useState(false);
    const { showToast } = useToast()

    const router = useRouter();
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
            setIsLoading(true)

            const formData = new FormData();
            formData.append("email", email);
            formData.append("password", password);
            try {
                const response = await fetch('/api/auth', {
                    method: 'POST',
                    body: JSON.stringify({
                        email: email, password: password,
                    }),
                });

                if (response.ok) {
                    setIsLoading(false)
                    router.push("/admin");
                } else {
                    showToast({ type: 'error', message: 'Credenciales incorrectas!' })
                    setIsLoading(false)
                }
            } catch (error) {
                showToast({ type: 'error', message: 'No se pudo realizar la operación!' })
                setIsLoading(false)
                console.error(error)
            }
        }
    };

    return (
        <>
            <BlockingOverlay isLoading={isLoading} />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200" >
                        Correo electrónico
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
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                </div>

                <div className="mt-6">
                    <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200" >
                            Contraseña
                        </label>

                        <a onClick={(e) => pswMessage(e)} className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline" >
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
                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {errors.password && (
                        <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                    )}
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                        Iniciar sesión
                    </button>
                </div>

            </form>
        </>
    );
}

const pswMessage = () => {
    alert("Por favor contáctate con el administrador de la plataforma para solicitar una contraseña provisional.")
}

export default FormLogin;
