import type { Role } from '@/lib/roles';
import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    accessToken?: string;
    user: {
      id: string;
      role?: Role;
      mustResetPassword?: boolean;
    } & DefaultSession['user'];
  }

  interface User {
    role: Role;
    mustResetPassword: boolean;
    accessToken: string;
    refreshToken: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpires?: number;
    role?: Role;
    mustResetPassword?: boolean;
  }
}
