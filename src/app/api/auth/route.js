import { login, validateToken } from "@/app/(auth)/auth/lib";
import { headers } from 'next/headers'

export async function POST(request) {
  const formData = await request.formData();
  await login(formData);
  return new Response(null, { status: 200 });
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