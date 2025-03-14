import { getPayments } from "@/DAO/generic.db"

import PaymentsForm from "./components/PaymentsForm/PaymentsForm"

export const metadata = {
    title: "Pagos",
    description: "Panel de pagos.",
    openGraph: {
        title: 'Pagos',
    },
    twitter: {
        title: 'Pagos',
    },
}

const Payments = async() => {
    const payments = await getPayments()
    return (
        <>
            <header className="bg-[#21DDD4] shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="w-full flex flex-row items-center">
                        <div
                            className="w-10 md:w-14 aspect-square bg-no-repeat bg-contain bg-center mr-4 inline-block"
                            style={{ backgroundImage: "url('/admin/payment.svg')" }}
                        ></div>
                        <h1 className="text-3xl font-bold tracking-tight text-primary inline-block">Métodos de pago</h1>
                    </div>
                </div>
            </header>

            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" >
                <PaymentsForm data={payments} />
            </main>
        </>
    )
}

export default Payments
