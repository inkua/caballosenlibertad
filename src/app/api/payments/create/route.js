import { addPayments } from "@/DAO/generic.db";

export async function POST() {
    try {
        const data = {
            id: 'ToD0vOPn7nTMQNNNhg07',
            paypal: { link: 'https://www.paypal.com/paypalme/caballosenlibertad' },
            mercadoPago: {
                one_timePayment: {
                    amountTwo: { quantity: '400', link: 'https://mpago.la/2AfzqAY' },
                    amountThree: { link: 'https://mpago.la/213AmP2', quantity: '800' },
                    amountOne: { quantity: '100', link: 'https://mpago.la/2E9Nsxv' },
                    otherAmount: { quantity: '1000', link: 'https://mpago.la/1PuFpNo' }
                },
                monthlySubscription: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=d9447e2e99774d5d9f38ac90a12e5887'
            },
            type: 'payments'
        }
        const res = await addPayments(data);
        if (res) {
            return Response.json({ status: 200, msg: "operación Exitosa", data: res });
        } else {
            return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: res });
        }
    } catch (e) {
        console.log(e);
        return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: e });
    }
}
