import { getSession } from "@/app/(auth)/auth/lib";
import { updatePasswordAdmin } from "@/DAO/admins.db";

export async function POST(req) {
    const session = await getSession()

    if (!session) {
        return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: false });
    }
    
    try {
        const { data } = await req.json();
        const res = await updatePasswordAdmin(data);
        
        if (res) {
            return Response.json({ status: 200, msg: "operación Exitosa", data: res });
        } else {
            return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: res });
        }
    } catch (e) {
        console.error(e);
        return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: e });
    }
}