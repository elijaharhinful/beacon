import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { Role } from '@/lib/roles';

const API_URL = process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api';

interface BackendUser {
  id: string;
  email: string;
  name: string;
  role: Role;
  mustResetPassword: boolean;
}

interface LoginData {
  accessToken: string;
  refreshToken: string;
  user: BackendUser;
}

interface AppJwt {
  sub?: string;
  accessToken?: string;
  refreshToken?: string;
  accessTokenExpires?: number;
  role?: Role;
  mustResetPassword?: boolean;
}

interface AppUser {
  accessToken: string;
  refreshToken: string;
  role: Role;
  mustResetPassword: boolean;
}

function decodeJwtExp(token: string): number {
  try {
    const [, payload] = token.split('.');
    // base64url -> base64, then atob (works on both Node and the edge runtime).
    const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    const json = JSON.parse(atob(base64)) as { exp?: number };
    return json.exp ? json.exp * 1000 : 0;
  } catch {
    return 0;
  }
}

async function refreshTokens(refreshToken: string): Promise<{ accessToken: string; refreshToken: string } | null> {
  try {
    const res = await fetch(`${API_URL}/auth/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refreshToken }),
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { data: { accessToken: string; refreshToken: string } };
    return json.data;
  } catch {
    return null;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: 'jwt' },
  pages: { signIn: '/login' },
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const email = credentials?.email;
        const password = credentials?.password;
        if (typeof email !== 'string' || typeof password !== 'string') {
          return null;
        }
        const res = await fetch(`${API_URL}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        if (!res.ok) {
          return null;
        }
        const json = (await res.json()) as { data: LoginData };
        const { user, accessToken, refreshToken } = json.data;
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          mustResetPassword: user.mustResetPassword,
          accessToken,
          refreshToken,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      const t = token as AppJwt;

      // Initial sign-in: persist backend tokens + role onto the JWT.
      if (user) {
        const u = user as unknown as AppUser;
        t.accessToken = u.accessToken;
        t.refreshToken = u.refreshToken;
        t.role = u.role;
        t.mustResetPassword = u.mustResetPassword;
        t.accessTokenExpires = decodeJwtExp(u.accessToken);
        return token;
      }

      // Still valid: keep the token.
      if (t.accessTokenExpires && Date.now() < t.accessTokenExpires - 30_000) {
        return token;
      }

      // Expired: rotate via the backend refresh endpoint.
      if (t.refreshToken) {
        const refreshed = await refreshTokens(t.refreshToken);
        if (refreshed) {
          t.accessToken = refreshed.accessToken;
          t.refreshToken = refreshed.refreshToken;
          t.accessTokenExpires = decodeJwtExp(refreshed.accessToken);
        }
      }
      return token;
    },
    session: ({ session, token }) => {
      const t = token as AppJwt;
      session.accessToken = t.accessToken;
      session.user.id = t.sub ?? '';
      session.user.role = t.role ?? Role.CLIENT;
      session.user.mustResetPassword = t.mustResetPassword ?? false;
      return session;
    },
  },
});
