import { logout } from "@/app/(auth)/auth/lib";

export async function POST() {
  await logout();
  return new Response(null, { status: 200 });
}
