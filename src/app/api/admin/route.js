import { getSession } from "@/app/(auth)/auth/lib";
import { addAdmin, deleteAdmin, getAdmins, setAdmin } from "@/DAO/admins.db";

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

export async function POST(req) {
    const session = await getSession()

    if (!session) {
        return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: false });
    }
    
    try {
        const { data } = await req.json();
        const res = await addAdmin(data);
        
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

export async function PUT(req) {
    const session = await getSession()

    if (!session) {
        return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: false });
    }

    try {
        const { data } = await req.json();

        const res = await setAdmin(data.newData, data.id);

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

export async function DELETE(req) {
    const session = await getSession()

    if (!session) {
        return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: false });
    }
    
    try {
        const { id } = await req.json();

        const res = await deleteAdmin(id);
        console.log('res de router',res)

        if (res) {
            return Response.json({ status: 200, msg:"operación Exitosa",  data: res });
        } else {
            return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: res });
        }
    } catch (e) {
        return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: false });
    }
}