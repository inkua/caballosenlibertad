import { getSession } from "@/app/(auth)/auth/lib";
import { addPayments, getPayments, updatePayments } from "@/DAO/generic.db";
import { validatePaymentMethod } from "@/utils/zod.lib";

export async function GET() {
    try {
        const res = await getPayments();
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

export async function POST(req) {
    const session = await getSession()

    if (!session) {
        return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: false });
    }

    try {
        const { data } = await req.json();
        if(! validatePaymentMethod(data)){
            return Response.json({ status: 400, msg: "Petición incorrecta", data: false });
        }
        
        const res = await addPayments(data);
        if (res) {
            return Response.json({ status: 200, msg: "operación Exitosa", data: res });
        } else {
            return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: res });
        }
    } catch (e) {
        console.log(e);
        return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: false });
    }
}

export async function PUT(req) {
    const session = await getSession()

    if (!session) {
        return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: false });
    }

    try {
        const { data, id } = await req.json();
        if(! validatePaymentMethod(data)){
            return Response.json({ status: 400, msg: "Petición incorrecta", data: false });
        }
        
        const res = await updatePayments(data, id);
        if (res) {
            return Response.json({ status: 200, msg: "operación Exitosa", data: res });
        } else {
            return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: res });
        }
    } catch (e) {
        console.log(e);
        return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: false });
    }
}