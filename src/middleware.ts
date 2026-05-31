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

  // lấy user từ cookie
  const role = request.cookies.get("role")?.value;

  // 1. Public route => ai cũng vào
  if (
    publicRoutes.some((route) =>
      path.startsWith(route)
    )
  ) {
    return NextResponse.next();
  }

  // 2. Parent route
  if (path.startsWith("/parent")) {
    if (role !== "parent") {
      return NextResponse.redirect(
        new URL("/login", request.url)
      );
    }
  }

  // 3. Admin route
  if (path.startsWith("/admin")) {
    if (role !== "admin") {
      return NextResponse.redirect(
        new URL("/login", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};