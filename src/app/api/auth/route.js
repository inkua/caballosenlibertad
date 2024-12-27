import { login, validateToken } from "@/app/(auth)/auth/lib";
import { getAdminByEmail } from "@/DAO/admins.db";
import { headers } from 'next/headers'

export async function POST(request) {
  try {
    const { email, password } = await request.json()
    const admin = await getAdminByEmail(email)

    if (!admin || admin.password !== password) {
      return new Response(null, { status: 400 });
    }

    await login({ email: email, name: admin.name });
    return new Response(null, { status: 200 });
  }
  catch (error) {
    return new Response(null, { status: 500 });
  }
}

export async function GET() {
  try {
    const headersList = headers()
    const token = headersList.get('Authorization').replace("Bearer ", "");
    const res = await validateToken(token)

    if (res) {
      return Response.json({ status: 200, msg: "operación Exitosa", data: true });
    } else {
      return Response.json({ status: 401, msg: "No se puedes realizar esta operación", data: false });
    }
  } catch (e) {
    console.error(e)
    return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: false });
  }
}