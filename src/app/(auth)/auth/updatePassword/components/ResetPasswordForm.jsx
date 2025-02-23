"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
    .object({
        email: yup.string().email('Debe ingresar un email válido').required('Debe ingresar un email válido'),
        currentPass: yup.string().required('Debe ingresar una contraseña'),
        newPass: yup.string().required('Debe ingresar una contraseña'),
        confPass: yup.string().required('Debe ingresar una contraseña'),
    })
    .required()

function ResetPasswordForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const router = useRouter();

    const onSubmit = async (formData) => {
        console.log(errors);

        const data = {
            email: formData.email,
            currentPass: formData.currentPass,
            newPass: formData.newPass,
            confPass: formData.confPass
        }

        const response = await fetch("/api/admin/pass/change", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.data) {
            alert("Operación Exitosa, puedes ingresar a la plataforma desde el login con tu nueva contraseña");
            router.push("/auth");
        } else {
            alert("No se pudo cambiar la contraseña, verifique los campos.");
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                    Correo
                </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    maxLength={30}
                    placeholder="Correo asociado a su cuenta"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register("email")}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}

            </div>

            <div className="mb-6">
                <label
                    htmlFor="currentPassword"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                    Contraseña actual/provisional
                </label>
                <input
                    type="text"
                    name="currentPassword"
                    id="currentPassword"
                    placeholder="Su contraseña"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register("currentPass")}
                />
                {errors.currentPass && <p className="mt-1 text-sm text-red-500">{errors.currentPass.message}</p>}

            </div>

            <div className="mb-6">
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                    Nueva contraseña
                </label>
                <input
                    type="text"
                    name="password"
                    id="password"
                    minLength={8}
                    placeholder="Ingrese su nueva contraseña"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register("newPass")}
                />
                    {errors.newPass && <p className="mt-1 text-sm text-red-500">{errors.newPass.message}</p>}

            </div>

            <div className="mb-6">
                <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                    Confirmar contraseña
                </label>
                <input
                    type="text"
                    name="confPass"
                    id="confPass"
                    minLength={8}
                    placeholder="Confirme su nueva contraseña"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register("confPass")}
                />
                {errors.confPass && <p className="mt-1 text-sm text-red-500">{errors.confPass.message}</p>}

            </div>

            <div className="mt-6">
                <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                    Cambiar contraseña
                </button>
            </div>
        </form>
    );
}

export default ResetPasswordForm;
