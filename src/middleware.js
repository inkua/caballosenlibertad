import { NextResponse } from "next/server";

export async function middleware(request) {
    const token = request.cookies.get("session");
    const { pathname } = request.nextUrl;


    // If a user doesn't have a token and tries to access /admin, redirect them to /auth
    if (!token && pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/auth", request.url));
    }

    if (token) {
        const validToken = await validateToken(token.value)

        // If the user is not a root admin and tries to access /admin/users, redirect them to /admin
        if (validToken && pathname.startsWith("/admin/admins")) {
            const root = await isRootAdmin(token.value)
            if (!root) {
                return NextResponse.redirect(new URL("/admin", request.url));
            }
        }

        // If the user has a token and tries to access /auth, redirect them to /admin
        if (validToken && pathname.startsWith("/auth")) {
            return NextResponse.redirect(new URL("/admin", request.url));
        }
    }

    // If none of the conditions are met, allow the request
    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*", "/auth/:path*"],
};

// fetch validate if a root admin
const isRootAdmin = async (token) => {
    try {
        const response = await fetch("/api/admin/type", {
            'Content-type': 'application/json',
            'headers': { Authorization: `Bearer ${token}` }
        });
        const result = await response.json();

        return result.data
    } catch (error) {
        return false
    }
}

// fetch validate if is a valid token
const validateToken = async (token) => {
    try {
        const response = await fetch("/api/auth", {
            'Content-type': 'application/json',
            'headers': { Authorization: `Bearer ${token}` }
        });
        const result = await response.json();
        return result.data
    } catch (error) {
        return false
    }
}