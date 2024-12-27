'use client'
import { useState } from "react";

function PasswordForm() {
    const [email, setEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const [errors, setErrors] = useState({
        email: "",
        newPassword: "",
        repeatPassword: "",
    });

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit =  async (e) => {
        e.preventDefault();

        let validationErrors = {};

        if (!validateEmail(email)) {
            validationErrors.email = "Por favor ingresa un correo válido.";
        }

        if (!validatePassword(newPassword)) {
            validationErrors.newPassword =
                "La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, una minúscula y un número.";
        }

        if (newPassword !== repeatPassword) {
            validationErrors.repeatPassword = "Las contraseñas no coinciden.";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log("Formulario enviado exitosamente.");
            console.log({
                email,
                currentPassword,
                newPassword,
            });

            const data = {
                email: email,
                currentPass: currentPassword,
                newPass: newPassword,
            }

            const response = await fetch('/api/admin/pass/change', {
                method: 'POST',
                body: JSON.stringify({
                    data: data,
                }),
            });
            const result = await response.json();
            if(response.ok){
                alert("Contraseña cambiada con éxito");
            }else{
                alert("No se pudo cambiar la contraseña, verifique los campos");
            }
        }
    };

    return (
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <h1 className="text-center mt-4 font-bold text-2xl">Cambiar Contraseña</h1>

            <div className="relative flex items-center mt-6">
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
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                    </svg>
                </span>
                <input
                    type="email"
                    className="block w-full py-3 text-xs md:text-base text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

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
                    type="password"
                    className="block w-full px-10 py-3 text-xs md:text-base text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Contraseña actual / Provisional"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
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
                    type="password"
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
                    type="password"
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
    )
}

export default PasswordForm
