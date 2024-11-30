import { validateAdmin } from "@/app/(auth)/auth/lib";
import { addProduct, delProduct, getProducts, setProduct, addProductImage, delProductImage } from "@/DAO/products.db";

export async function POST(req) {
    try {
        const admin = await validateAdmin()//validar el admin con esta función

        if (admin) {
            const { data } = await req.json();
            const res = await addProduct(data);

            if (res) {
                return Response.json({ status: 200, msg: "operación Exitosa", data: res });
            } else {
                return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: res });
            }
        } else {
            return Response.json({ status: 401, msg: "Sin Permisos", data: null });
        }

    } catch (e) {
        console.log(e);
        return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: e });
    }
}

export async function DELETE(req) {
    try {
        const { token, id, url } = await req.json();
        await delProductImage(url)
        const res = await delProduct(id)

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
    try {
        const { token, data } = await req.json();

        const res = await setProduct(data.newData, data.id);

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

export async function GET() {
    try {
        const res = await getProducts()
        if (res) {
            return Response.json({ status: 200, msg: "operación Exitosa", data: res });
        } else {
            return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: res });
        }
    } catch (e) {
        return Response.json({ status: 500, msg: e });
    }
}