import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { Role } from '@/lib/roles';

/**
 * Protects the Work Progress dashboard (any authenticated user) and the admin area
 * (ADMIN only). Unauthenticated users are sent to /login; non-admins are bounced
 * from /admin to their dashboard.
 */
export default auth((req) => {
  const { pathname } = req.nextUrl;
  const session = req.auth;
  const isAdminArea = pathname.startsWith('/admin');

  if (!session) {
    const loginUrl = new URL('/login', req.nextUrl);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAdminArea && session.user.role !== Role.ADMIN) {
    return NextResponse.redirect(new URL('/work-progress/dashboard', req.nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/work-progress/dashboard/:path*', '/admin/:path*'],
};
