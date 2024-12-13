import { isRootAdmin } from '@/app/(auth)/auth/lib';
import { headers } from 'next/headers'

// verify if an admin is root type
export async function GET() {
    try {
        const headersList = headers()
        const token = headersList.get('Authorization').replace("Bearer ", "");

        const isRoot = await isRootAdmin(token)

        if (isRoot) {
            return Response.json({ status: 200, msg: "operación Exitosa", data: isRoot });
        } else {
            return Response.json({ status: 401, msg: "No puedes realizar esta operación", data: isRoot });
        }
    } catch (e) {
        return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: false });
    }
}