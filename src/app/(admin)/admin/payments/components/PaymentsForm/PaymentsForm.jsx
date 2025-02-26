"use client"

import BlockingOverlay from "@/app/components/BlockingOverlay/BlockingOverlay";
import { useConfirmDialog } from "@/utils/hooks/useConfirmDialog";
import { useToast } from "@/utils/toast";
import Image from "next/image";
import { useState } from "react";
import { reloadPage } from "../../../utils";
import { useRouter } from "next/navigation";

const PaymentsForm = ({ data }) => {
    const [paymentMethod, setPaymentMethod] = useState(data);
    const paymentsId = data.id

    const [isLoading, setIsLoading] = useState(false);
    const { confirm, ConfirmDialogComponent } = useConfirmDialog();
    const { showToast } = useToast()
    const router = useRouter()


    const handleChange = (path, value) => {
        setPaymentMethod((prev) => {
            const newData = { ...prev };
            const keys = path.split(".");
            let ref = newData;
            keys.forEach((key, index) => {
                if (index === keys.length - 1) {
                    ref[key] = value;
                } else {
                    ref = ref[key];
                }
            });
            return newData;
        });
    };

    // Validar y enviar datos
    const onSubmit = async (e) => {
        e.preventDefault();

        // Validar que no haya campos vacíos
        for (const key in paymentMethod.mercadoPago.one_timePayment) {
            const item = paymentMethod.mercadoPago.one_timePayment[key];
            if (!item.quantity || !item.link) {
                alert("Todos los campos deben estar llenos.");
                return;
            }
        }
        if (!paymentMethod.paypal.link) {
            alert("El enlace de PayPal no puede estar vacío.");
            return;
        }

        const isConfirmed = await confirm("Está seguro que quiere modificar los datos de los metodos de pago?");
        if(!isConfirmed){
            return false
        }

        try {
            setIsLoading(true);
            
            const response = await fetch("/api/payments", {
                method: "PUT",
                body: JSON.stringify({
                    data: paymentMethod,
                    id: paymentsId,
                }),
            });

            const data = await response.json();

            if (data.data) {
                showToast({ type: "success", message: 'Datos actualizados con éxito!' })
            } else {
                showToast({ type: 'error', message: 'No se pudo realizar la operación!' })
            }
        } catch (error) {
            showToast({ type: 'error', message: 'No se pudo realizar la operación!' })
        }finally {
            setIsLoading(false);
            reloadPage(router)
        }
    };

    if (!paymentMethod) return <h2>Error cargando datos.</h2>;


    return (
        <>
            {ConfirmDialogComponent}
            <BlockingOverlay isLoading={isLoading} />

            <form onSubmit={onSubmit} className="space-y-4 p-4 md:p-8  bg-white shadow-md rounded-lg mt-4 md:mt-8">
                <div className="bg-blue-300 p-4 rounded-md" >
                    <Image
                        className="h-8 w-auto"
                        src="/assets/donar/InternationalPAYPAL.svg"
                        alt="paypal logo"
                        width={50}
                        height={50}
                    />
                    <input
                        type="text"
                        className="border p-2 w-full rounded-lg mt-4"
                        placeholder="Enlace de PayPal"
                        value={paymentMethod.paypal.link}
                        onChange={(e) => handleChange("paypal.link", e.target.value)}
                    />
                </div>

                <div className="bg-blue-100 p-4 rounded-md">
                    <Image
                        className="h-8 w-auto"
                        src="/assets/donar/MPago.svg"
                        alt="paypal logo"
                        width={50}
                        height={50}
                    />

                    <div className="mt-4">
                        <h2 className="text-lg font-medium">Suscripción Mensual - Mercado Pago</h2>
                        <hr className="border-blue-600 border-dotted pt-2" />
                        <input
                            type="text"
                            className="border p-2 w-full rounded-lg"
                            placeholder="Enlace de suscripción"
                            value={paymentMethod.mercadoPago.monthlySubscription}
                            onChange={(e) => handleChange("mercadoPago.monthlySubscription", e.target.value)}
                        />
                    </div>

                    <div className="mt-6">
                        <h2 className="text-lg font-medium">Pago Único - Mercado pago</h2>
                        <hr className="border-blue-600 border-dotted pt-2" />

                        {Object.keys(paymentMethod.mercadoPago.one_timePayment).map((key) => (
                            <div key={key} className="space-y-2 mb-4">
                                <label className="block font-light">{"-->"} {key}</label>
                                <input
                                    type="text"
                                    className="border p-2 w-full rounded-lg"
                                    placeholder="Monto"
                                    value={paymentMethod.mercadoPago.one_timePayment[key].quantity}
                                    onChange={(e) =>
                                        handleChange(`mercadoPago.one_timePayment.${key}.quantity`, e.target.value)
                                    }
                                />
                                <input
                                    type="text"
                                    className="border p-2 w-full rounded-lg"
                                    placeholder="Enlace de pago"
                                    value={paymentMethod.mercadoPago.one_timePayment[key].link}
                                    onChange={(e) =>
                                        handleChange(`mercadoPago.one_timePayment.${key}.link`, e.target.value)
                                    }
                                />
                            </div>
                        ))}
                    </div>

                </div>

                {/* BOTÓN DE GUARDAR */}
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Guardar Cambios
                </button>
            </form>
        </>
    )
}

export default PaymentsForm
