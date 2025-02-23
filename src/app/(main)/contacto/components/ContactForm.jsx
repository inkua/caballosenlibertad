"use client";

import { useToast } from "@/utils/toast";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
    .object({
        name: yup.string().required('Debe ingresar un nombre válido'),
        phone: yup.number()
            .positive('Ingrese un numero positivo')
            .integer('Ingrese un numero entero')
            .required('Debe ingresar un numero válido')
            .transform((value) => Number.isNaN(value) ? null : value),
        email: yup.string().email('Debe ingresar un email válido').required('Debe ingresar un email válido'),
        text: yup.string().required('Debe ingresar una consulta'),
    })
    .required()

export default function ContactForm() {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const { showToast } = useToast()
    const [pending, setPending] = useState(false);

    const onSubmit = async (formData) => {
        setPending(true)

        try {
            const data = {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                content: formData.text,
            }

            const response = await fetch('/api/mail', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ data: data }),
            })

            if (response.ok) {
                showToast({ type: 'success', message: '¡Tu consulta ha sido enviada con éxito!' })
                reset()
            } else {
                showToast({ type: 'error', message: 'No pudimos enviar tu consulta. Inténtalo nuevamente.' })
            }
        } catch (error) {
            console.log(error);
            showToast({ type: 'error', message: 'No pudimos enviar tu consulta. Inténtalo nuevamente.' });
        } finally {
            setPending(false);
        }
    };

    return (
        <div className="flex flex-col w-full md:w-[50%] gap-4">
            <h2 className="font-extrabold text-primary text-h2 duration-200">
                Consultanos
            </h2>
            <h2 htmlFor="name" className="block text-primary text-p3">
                Nombre
            </h2>
            <form className="flex flex-col gap-4 h-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col w-full h-full lg:aspect-square gap-4">
                    <div className="relative flex flex-col gap-4">
                        <label htmlFor="name" className="text-primary text-p3 hidden">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nombre y apellido"
                            maxLength={30}
                            className="w-full h-12 rounded-md border-2 text-primary border-input placeholder-input"
                            onInput={(e) => { e.target.value = e.target.value.replace(/[0-9]/g, '') }}
                            {...register("name")}
                        />
                        {errors.name && <span className="absolute right-0 bottom-[-1.5rem] text-red-500">{errors.name.message}</span>}
                    </div>
                    <div className="relative flex flex-col gap-4">
                        <label htmlFor="phone" className="block text-primary text-p3">
                            Número de teléfono
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Teléfono"
                            maxLength={15}
                            className="w-full h-12 rounded-md border-2 text-primary border-input placeholder-input appearance-none"
                            onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9+\s\-()]/g, '') }}
                            {...register("phone")}
                        />
                        {errors.phone && <span className="absolute right-0 bottom-[-1.5rem] text-red-500">{errors.phone.message}</span>}
                    </div>
                    <div className="relative flex flex-col gap-4">
                        <label htmlFor="email" className="block text-primary text-p3">
                            Correo electrónico
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Correo electrónico"
                            maxLength={30}
                            className="w-full h-12 rounded-md border-2 text-primary border-input placeholder-input"
                            {...register("email")}
                        />
                        {errors.email && <span className="absolute right-0 bottom-[-1.5rem] text-red-500">{errors.email.message}</span>}
                    </div>
                    <div className="relative flex flex-col gap-4 flex-1">
                        <label htmlFor="message" className="block text-primary text-p3">
                            Déjanos tu consulta
                        </label>
                        <textarea
                            placeholder="Consulta..."
                            id="message"
                            name="message"
                            maxLength={500}
                            className="w-full md:flex-1 h-36 md:h-auto rounded-md border-2 text-primary border-input placeholder-input resize-none"
                            {...register("text")}
                        />
                        {errors.text && <span className="absolute right-0 bottom-[-1.5rem] text-red-500">{errors.text.message}</span>}
                    </div>
                </div>

                <button type="submit" disabled={pending} className="button-primary !w-[60%] duration-200 mt-6 disabled:hover:cursor-not-allowed disabled:hover:bg-secondary disabled:hover:text-white">
                    {pending ? 'Enviando...' : 'ENVIAR CONSULTA'}
                </button>
            </form>

            <h2 className='font-extrabold text-primary text-h2 duration-200 mt-8 md:mt-4 md:hidden block'>Teléfono</h2>
            <p className='text-primary text-p3 duration-200 md:hidden block'>+54 9 221 638-3686</p>
        </div>
    );
}