import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;

    const role = request.cookies.get("role")?.value;

    const pathname = request.nextUrl.pathname;

    // chưa login
    if (!token) {
        if (
            pathname.startsWith("/admin") ||
            pathname.startsWith("/expert") ||
            pathname.startsWith("/parent")
        ) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    // admin only
    if (pathname.startsWith("/admin") && role !== "admin") {
        return NextResponse.redirect(new URL("/home", request.url));
    }

    // expert only
    if (pathname.startsWith("/expert") && role !== "expert") {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // parent only
    if (pathname.startsWith("/parent") && role !== "parent") {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*", "/expert/:path*", "/parent/:path*"],
};
