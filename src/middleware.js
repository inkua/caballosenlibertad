import { NextResponse } from "next/server";

const isLogged = true;
const isRoot = true;

export function middleware(request) {
  if (!isLogged) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/admin/users")) {
    if (!isRoot) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }
}

export const config = {
  matcher: "/admin/:path*",
};
