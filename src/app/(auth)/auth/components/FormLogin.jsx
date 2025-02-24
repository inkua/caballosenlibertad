"use client";

import BlockingOverlay from "@/app/components/BlockingOverlay/BlockingOverlay";
import { useToast } from "@/utils/toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import DOMPurify from 'dompurify';

const schema = yup
    .object({
        email: yup.string().email('Debe ingresar un email válido').required('Debe ingresar un email válido'),
        password: yup.string().required('Debe ingresar una contraseña'),
    })
    .required()

function FormLogin() {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const [isLoading, setIsLoading] = useState(false);
    const { showToast } = useToast()
    const router = useRouter();

    const onSubmit = async (formData) => {
        try {
            const data = {
                email: DOMPurify.sanitize(formData.email),
                password: DOMPurify.sanitize(formData.password),
            }

            const response = await fetch('/api/auth', {
                method: 'POST',
                body: JSON.stringify({
                    email: data.email, password: data.password,
                }),
            });

            if (response.ok) {
                setIsLoading(false)
                router.push("/admin");
                reset()
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

    return (
        <>
            <BlockingOverlay isLoading={isLoading} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200" >
                        Correo electrónico
                    </label>

                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="ejemplo@ejemplo.com"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register("email")}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
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
                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register("password")}
                    />
                    {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
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
