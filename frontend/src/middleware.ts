import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const protectedRoutes = [
  "/cryptoboard",
  "/cryptoboard/update",
  "/cryptoboard/coins",
  "/cryptoboard/wallets",
  "/cryptoboard/analytics",
  "/cryptoboard/myportfolio",
  "/settings",
  "/help",
];
const publicRoutes = ["/auth/signin", "/auth/signup", "/"];

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const token = req.cookies.get("token")?.value;

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  let isExpired = false;

  if (token) {
    try {
      const decoded = jwt.decode(token) as { exp?: number };
      if (decoded?.exp && decoded.exp * 1000 < Date.now()) {
        isExpired = true;
      }
    } catch (error) {
      console.error("Invalid token:", error);
      isExpired = true;
    }
  }

  // console.log({ isProtectedRoute });
  // console.log({ isPublicRoute });

  if (isProtectedRoute && isExpired) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  if (isPublicRoute && token && !isExpired && path !== "/") {
    return NextResponse.redirect(new URL("/cryptoboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
    "/auth/:path*",
    "/cryptoboard",
    "/cryptoboard/:path*",
    "/settings",
    "/help",
  ],
};
