import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
    const token = cookies(request).get('__Secure-next-auth.session-token')
    const pathname = request.nextUrl.pathname

    if (!token) {
        return NextResponse.redirect(new URL('/sign-in', request.url))
    }
    return NextResponse.next()
};

export const config = {
    matcher: [
        '/my-bookings', '/services'
    ]
}