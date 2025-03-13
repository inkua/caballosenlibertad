"use client";

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useToast } from '@/utils/toast';
import { useConfirmDialog } from '@/utils/hooks/useConfirmDialog';


const FormStats = ({ stats, statsId }) => {
    const { register, handleSubmit, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const { showToast } = useToast()
    const { confirm, ConfirmDialogComponent } = useConfirmDialog();


    const onSubmit = async (data) => {
        const isConfirmed = await confirm("¿Quiere modificar esta estadistica?.");
        if (!isConfirmed) { return }

        setIsLoading(true);

        try {
            const response = await fetch('/api/stats', {
                method: 'PUT',
                body: JSON.stringify({
                    data: {
                        name: data.statName,
                        amount: data.newAmount,
                    },
                    id: statsId
                }),
            });

            if (!response.ok) throw new Error("Error updating stats");

            const result = await response.json();
            if (result.status == 200) {
                showToast({ type: "success", message: 'Estadística actualizada exitosamente!' })
                reset(); // Clear the form after successful update

            } else {
                showToast({ type: 'error', message: 'Hubo un error al actualizar' })
                console.error("status: " + result.status)
            }
        } catch (error) {
            console.error("Update failed:", error);
            showToast({ type: 'error', message: 'Hubo un error al actualizar' })
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row items-center gap-4">
                <select
                    {...register("statName", { required: true })}
                    className="border p-2 rounded w-[200px]"
                >
                    <option value="">Selecciona</option>
                    {stats.map((stat, index) => (
                        <option key={index} value={stat.name}>
                            {stat.name}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Nueva cantidad"
                    {...register("newAmount", { required: true })}
                    className="border p-2 rounded w-[200px] lg:w-[300px]"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    disabled={isLoading}
                >
                    {isLoading ? "Actualizando..." : "Actualizar"}
                </button>
            </form>

            {ConfirmDialogComponent}
        </>
    );
};

export default FormStats;
