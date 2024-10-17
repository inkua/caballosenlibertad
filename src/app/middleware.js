import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();
  const admin = false;
  
  if (!admin) {
    url.pathname = '/access-denied'; 
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'] 
};
