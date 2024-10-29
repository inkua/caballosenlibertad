import { getAdmins } from "@/DAO/admins.db";


export async function GET() {
    try {
        const res = await getAdmins()
        if (res) {
            return Response.json({ status: 200, msg: "operación Exitosa", data: res });
        } else {
            return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: res });
        }
    } catch (e) {
        return Response.json({ status: 500, msg: e });
    }
}