import { auth } from "@/auth";
import { authRoutes, publicRoutes } from "./routes";
import { NextResponse } from "next/server";

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isPublicRoute) {
        return NextResponse.next();
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL('/members',nextUrl))
        } else {
            return NextResponse.next()
        }
    }

    if (!isPublicRoute && !isLoggedIn) {
        return NextResponse.redirect(new URL('/log-in', nextUrl))
    }
    return NextResponse.next()
})

export const config = {
      matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}