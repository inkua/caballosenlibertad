import { NextResponse } from "next/server";

const URL = process.env.NEXT_PUBLIC_URL

export async function middleware(request) {
    const token = request.cookies.get("session");
    const { pathname } = request.nextUrl;

    
    // If a user doesn't have a token and tries to access /admin, redirect them to /auth
    if (!token && pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/auth", request.url));
    }
    
    
    if (token) {
        const {validToken, rootAdmin} = await getAuthStatus(token.value)
        
        // If a user doesn't have a token and tries to access /admin, redirect them to /auth
        if (!validToken && pathname.startsWith("/admin")) {
            return NextResponse.redirect(new URL("/auth", request.url));
        }

        // If the user is not a root admin and tries to access /admin/users, redirect them to /admin
        if (validToken && pathname.startsWith("/admin/admins")) {
            if (!rootAdmin) {
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


const getAuthStatus = async (token)=>{
    try {
        const response = await fetch(`${URL}/api/admin/auth`,  {
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const {data} = await response.json();
        
        return data
        
    } catch (e) {
        console.log("middleware fetch error")
        return {
            validToken: false,
            rootAdmin: false,
        }
    }
}