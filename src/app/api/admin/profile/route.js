import { getSession } from "@/app/(auth)/auth/lib";

export async function GET(req) {
    try {
        const session = await getSession()
    
        if (!session) {
            return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: false });
        }
        const email = session.user.email
        return Response.json({ status: 200, msg: "operación Exitosa", data: email });
    } catch (e) {
        console.error(e);
        return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: e });
    }
}