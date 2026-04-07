import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/cryptoboard"];
const publicRoutes = ["/auth/signin", "/auth/signup"];

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const isProtectedRoute = protectedRoutes.some((route) =>
    path.startsWith(route),
  );

  const isPublicRoute = publicRoutes.includes(path);

  const token = req.cookies.get("token")?.value;

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  if (token && isPublicRoute && path !== "/cryptoboard") {
    return NextResponse.redirect(new URL("/cryptoboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
