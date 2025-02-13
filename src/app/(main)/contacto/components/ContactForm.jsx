"use client";

import { useToast } from "@/utils/toast";
import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [error, setError] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });
    const { showToast } = useToast()
    const [pending, setPending] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPhone = (phone) => {
        const phoneRegex = /^\d{7,15}$/; // Valida si es un número de teléfono con entre 7 y 15 dígitos
        return phoneRegex.test(phone);
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        const newErrors = {}
        const { name, phone, email, message } = formData;
        if (name.trim().length < 3) {
            newErrors.name = "El nombre debe tener minimo 3 caracteres"
        } else if (!isValidPhone(phone)) {
            newErrors.email = "Email invalido"
        } else if (!isValidEmail(email)) {
            newErrors.phone = "Teléfono invalido"
        } else if (message.trim().length < 10) {
            newErrors.message = "La consulta debe tener minimo 10 caracteres"
        }

        if (Object.keys(newErrors).length > 0) {
            setError(newErrors)
            return
        }
        setError({})
        setPending(true)

        try {
            const data = {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                content: formData.message,
            }

            const response = await fetch('/api/mail', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ data: data }),
            })

            if (response.ok) {
                setFormData({ name: '', phone: '', email: '', message: '' }); 
                showToast({ type: 'success', message: '¡Tu consulta ha sido enviada con éxito!' })
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
            <form className="flex flex-col gap-4 h-auto" onSubmit={(e) => sendEmail(e)}>
                <div className="flex flex-col w-full h-full lg:aspect-square gap-4">
                    <div className="flex flex-col gap-4">
                        <label htmlFor="name" className="text-primary text-p3 hidden">
                            Nombre
                        </label>
                        <input
                            required
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nombre y apellido"
                            className="w-full h-12 rounded-md border-2 text-primary border-input placeholder-input"
                            onChange={handleChange}
                            value={formData.name}
                        />
                        {error.name && <span className="text-red-500">{error.name}</span>}
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="phone" className="block text-primary text-p3">
                            Número de teléfono
                        </label>
                        <input
                            required
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Teléfono"
                            className="w-full h-12 rounded-md border-2 text-primary border-input placeholder-input appearance-none"
                            onChange={handleChange}
                            onInput={(e) => (e.target.value = e.target.value.replace(/\D/g, ""))}
                            value={formData.phone}
                        />
                        {error.phone && <span className="text-red-500">{error.phone}</span>}
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="email" className="block text-primary text-p3">
                            Correo electrónico
                        </label>
                        <input
                            required
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Correo electrónico"
                            className="w-full h-12 rounded-md border-2 text-primary border-input placeholder-input"
                            onChange={handleChange}
                            value={formData.email}
                        />
                        {error.email && <span className="text-red-500">{error.email}</span>}
                    </div>
                    <div className="flex flex-col gap-4 flex-1">
                        <label htmlFor="message" className="block text-primary text-p3">
                            Déjanos tu consulta
                        </label>
                        <textarea
                            required
                            placeholder="Consulta..."
                            id="message"
                            name="message"
                            className="w-full md:flex-1 h-36 md:h-auto rounded-md border-2 text-primary border-input placeholder-input resize-none"
                            onChange={handleChange}
                            value={formData.message}
                        ></textarea>
                        {error.message && <span className="text-red-500">{error.message}</span>}
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