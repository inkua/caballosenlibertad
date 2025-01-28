import { isRootAdmin, validateToken } from "@/app/(auth)/auth/lib";
import { headers } from 'next/headers'

export async function GET(req) {
    const data = {
        validToken: false,
        rootAdmin: false,
    }

    const headersList = headers()
    const authorizationHeader = headersList.get('Authorization')

    if (!authorizationHeader) {
        return Response.json({ status: 400, msg: "No se pudo realizar la operación", data:data });
    }
    
    const token = authorizationHeader.replace("Bearer ", "");
    if (!token) {
        return Response.json({ status: 400, msg: "No se pudo realizar la operación", data:data });
    }
    
    try {

        const validToken =  await validateToken(token)
        if(validToken){
            data.validToken=true

            const rootAdmin = await isRootAdmin(token)
            if(rootAdmin){
                data.rootAdmin = true
            }
        }

        return Response.json({ status: 200, msg: "operación Exitosa", data: data });
        
    } catch (e) {
        console.log(e);
        return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: data });
    }
}