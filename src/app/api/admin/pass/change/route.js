import { getSession } from "@/app/(auth)/auth/lib";
import { updatePasswordAdmin } from "@/DAO/admins.db";

// this endpoit is for auth/updatePassword page. User do NOT have to be logged
// require the data object with "email", "currentPass" & newPass key:values
export async function POST(request) {
    try {
        const { email, currentPass, newPass } = await request.json();

        const res = await updatePasswordAdmin(newPass, currentPass, email);
        if (res) {
            return Response.json({ status: 200, msg: "operación Exitosa", data: res });
        } else {
            return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: res });
        }
    } catch (e) {
        console.error(e);
        return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: false });
    }
}

// this endpoit is for admin/settings page. User DO have to be logged
// require the data object with "email", "currentPass" & newPass key:values
export async function PUT(request) {
    try {
        const { user } = await getSession()
        if (!user) {
            return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: false });
        }
        const { currentPass, newPass } = await request.json();

        const res = await updatePasswordAdmin(newPass, currentPass, user.email);

        if (res) {
            return Response.json({ status: 200, msg: "operación Exitosa", data: res });
        } else {
            return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: res });
        }
    } catch (e) {
        console.error(e);
        return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: false });
    }
}