import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/cryptoboard"];
const publicRoutes = ["/auth/signin", "/auth/signup", "/"];

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const token = req.cookies.get("token")?.value;

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  if (isPublicRoute && token && path !== "/") {
    return NextResponse.redirect(new URL("/cryptoboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
    "/auth/:path*",
    "/cryptoboard",
  ],
};
