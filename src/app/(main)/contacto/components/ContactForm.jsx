"use client";

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
            newErrors.email = "Telefono invalido"
        } else if (!isValidEmail(email)) {
            newErrors.phone = "Email invalido"
        } else if (message.trim().length < 10) {
            newErrors.message = "La consulta debe tener minimo 10 caracteres"
        }

        if (Object.keys(newErrors).length > 0) {
            setError(newErrors)
            return
        }
        setError({})

        try {
            const response = await fetch('/api/contact', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setFormData({ name: '', phone: '', email: '', message: '' }); // Limpia el formulario
                alert(`Mensaje enviado`);
            } else {
                alert(`Error`);
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="flex flex-col w-full md:w-[50%] gap-3">
            <h2 className="font-extrabold text-primary text-h2 duration-200">
                Consultanos
            </h2>
            <h2 htmlFor="name" className="block text-primary text-p3">
                Nombre
            </h2>
            <form className="flex flex-col gap-3 h-auto w-full lg:aspect-square justify-between">
                <div className="flex flex-col gap-3">
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
                <div className="flex flex-col gap-3">
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
                <div className="flex flex-col gap-3">
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
                <div className="flex flex-col gap-3">
                    <label htmlFor="message" className="block text-primary text-p3">
                        Déjanos tu consulta
                    </label>
                    <textarea
                        required
                        placeholder="Consulta..."
                        id="message"
                        name="message"
                        className="w-full h-40 rounded-md border-2 text-primary border-input placeholder-input resize-none"
                        onChange={handleChange}
                        value={formData.message}
                    ></textarea>
                    {error.message && <span className="text-red-500">{error.message}</span>}
                </div>
                <button className="bg-secondary text-white font-bold py-2 px-10 rounded-full text hover:bg-white hover:text-secondary border-4 border-secondary duration-200">
                    ENVIAR CONSULTA
                </button>
            </form>
        </div>
    );
}