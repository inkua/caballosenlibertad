import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("session");
  const { pathname } = request.nextUrl;

  // Si el usuario no tiene token y trata de acceder a /admin, redirige a /auth
  if (!token && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  // Si el usuario tiene token y trata de acceder a /auth, redirige a /admin
  if (token && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  // Si ninguna de las condiciones se cumple, permite la solicitud
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/auth/:path*"],
};
