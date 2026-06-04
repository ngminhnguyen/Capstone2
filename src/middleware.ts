import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = [
  "/home",
  "/recipes",
  "/articles",
  "/expert",
  "/login",
  "/register",
];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // allow public routes
  if (publicRoutes.some((route) => path.startsWith(route))) {
    return NextResponse.next();
  }

  // ❌ NO AUTH CHECK HERE (important)
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};