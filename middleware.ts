import { auth } from '@/auth.config';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl; // Ruta actual

    const session = await auth()

    // Rutas protegidas
    if (pathname.startsWith('/address')) {
        // Si el usuario no está autenticado, redirige a /auth/login
        if (!session) {
            const loginUrl = new URL('/auth/login', req.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    // Permitir continuar si está autenticado
    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/address',
}