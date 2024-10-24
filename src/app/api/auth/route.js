import { login } from "@/app/(auth)/auth/lib";

export async function POST(request) {
  const formData = await request.formData();
  await login(formData);
  return new Response(null, { status: 200 });
}