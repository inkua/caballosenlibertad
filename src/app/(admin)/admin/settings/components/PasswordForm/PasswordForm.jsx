'use client'
import BlockingOverlay from "@/app/components/BlockingOverlay/BlockingOverlay";
import { useToast } from "@/utils/toast";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

function PasswordForm() {
    const currentPswRef = useRef(null)
    const [newPassword, setNewPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const { showToast } = useToast()
    const [isLoading, setIsLoading] = useState(false);

    const [errors, setErrors] = useState({
        newPassword: "",
        repeatPassword: "",
    });

    const router = useRouter();

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let validationErrors = {};

        if (!validatePassword(newPassword)) {
            validationErrors.newPassword =
                "La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, una minúscula y un número.";
        }

        if (newPassword !== repeatPassword) {
            validationErrors.repeatPassword = "Las contraseñas no coinciden.";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            const data = {
                currentPass: currentPswRef.current.value,
                newPass: newPassword,
            }

            try {
                setIsLoading(true)
                const response = await fetch('/api/admin/pass/change', {
                    method: 'PUT',
                    body: JSON.stringify(data),
                });
                const result = await response.json();
                if (result.data) {
                    showToast({ type: "success", message: 'Operación exitosa' })
                    router.push("/admin")
                } else {
                    showToast({ type: 'error', message: 'No se pudo cambiar la contraseña, verifique los campos' })
                }

            } catch (error) {
                showToast({ type: 'error', message: 'No se pudo realizar la operación!' })
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }
    };

    return (
        <>
            <BlockingOverlay isLoading={isLoading} />

            <form className="w-full max-w-md" onSubmit={handleSubmit}>
                <h1 className="text-center mt-4 font-bold text-2xl">Cambiar Contraseña</h1>

                <div className="relative flex items-center mt-4">
                    <span className="absolute">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 mx-3 text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>
                    </span>
                    <input
                        type="text"
                        className="block w-full px-10 py-3 text-xs md:text-base text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Contraseña actual / Provisional"
                        ref={currentPswRef}
                        required
                    />
                </div>

                <div className="relative flex items-center mt-4">
                    <span className="absolute">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 mx-3 text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>
                    </span>
                    <input
                        type="text"
                        className="block w-full px-10 py-3 text-xs md:text-base text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Nueva Contraseña"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                {errors.newPassword && (
                    <p className="text-red-500 text-sm">{errors.newPassword}</p>
                )}

                <div className="relative flex items-center mt-4">
                    <span className="absolute">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 mx-3 text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>
                    </span>
                    <input
                        type="text"
                        className="block w-full px-10 py-3 text-xs md:text-base text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Repite la nueva contraseña"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                </div>
                {errors.repeatPassword && (
                    <p className="text-red-500 text-sm">{errors.repeatPassword}</p>
                )}

                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                        Cambiar
                    </button>

                    <div className="mt-6 text-center">
                        <a href="/admin" className="text-sm text-gray-500 hover:underline">
                            cancelar
                        </a>
                    </div>
                </div>
            </form>
        </>
    )
}

export default PasswordForm
