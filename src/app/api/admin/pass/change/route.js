import { getSession } from "@/app/(auth)/auth/lib";
import { updatePasswordAdmin } from "@/DAO/admins.db";

// require the data object with "email", "currentPass" & newPass key:values
export async function POST(req) {
    const session = await getSession()

    if (!session) {
        return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: false });
    }
    
    try {
        const { data } = await req.json();
        const res = await updatePasswordAdmin(data);
        
        if (res) {
            return Response.json({ status: 200, msg: "operación Exitosa", data: "Se cambió la contraseña correctamente" });
        } else {
            return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: "Verifique los campos" });
        }
    } catch (e) {
        console.error(e);
        return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: "Ha ocurrido un error" });
    }
}