'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { signIn } from 'next-auth/react';
import { getSession } from 'next-auth/react';
import { Button } from '@/components/ui/Button';
import { Role } from '@/lib/roles';

const loginSchema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(1, 'Password is required'),
});

type LoginValues = z.infer<typeof loginSchema>;

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (values: LoginValues) => {
    setServerError(null);
    const result = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (!result || result.error) {
      setServerError('Invalid email or password.');
      return;
    }

    const session = await getSession();
    const callbackUrl = searchParams.get('callbackUrl');
    if (session?.user.mustResetPassword) {
      router.push('/work-progress/change-password');
      return;
    }
    if (callbackUrl) {
      router.push(callbackUrl);
      return;
    }
    router.push(session?.user.role === Role.ADMIN ? '/admin' : '/work-progress/dashboard');
  };

  return (
    <div className="rounded-2xl border border-white/5 bg-[#0d1117] p-8 shadow-lg shadow-black/30">
      <h1 className="text-2xl font-black text-white mb-1">Client Login</h1>
      <p className="text-gray-500 text-sm mb-8">Access your Work Progress dashboard.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register('email')}
            className="w-full rounded-lg border border-white/10 bg-[#0a0d0f] px-4 py-2.5 text-white placeholder-gray-600 outline-none transition-colors focus:border-[#00d4aa]/60"
            placeholder="you@company.com"
          />
          {errors.email && <p className="mt-1.5 text-sm text-red-400">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            {...register('password')}
            className="w-full rounded-lg border border-white/10 bg-[#0a0d0f] px-4 py-2.5 text-white placeholder-gray-600 outline-none transition-colors focus:border-[#00d4aa]/60"
            placeholder="Your password"
          />
          {errors.password && (
            <p className="mt-1.5 text-sm text-red-400">{errors.password.message}</p>
          )}
        </div>

        {serverError && (
          <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-sm text-red-400">
            {serverError}
          </div>
        )}

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>
    </div>
  );
}

function LoginFormFallback() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#0d1117] p-8 shadow-lg shadow-black/30">
      <div className="h-8 w-40 rounded bg-white/5" />
      <div className="mt-2 h-4 w-64 rounded bg-white/5" />
      <div className="mt-8 space-y-5">
        <div className="h-[74px] rounded bg-white/5" />
        <div className="h-[74px] rounded bg-white/5" />
        <div className="h-11 rounded bg-white/5" />
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#0a0d0f] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image
              src="/images/beacon_landscape_no_bg.png"
              alt="Beacon Logo"
              width={160}
              height={44}
              className="h-9 w-auto object-contain mx-auto"
              priority
            />
          </Link>
        </div>

        <Suspense fallback={<LoginFormFallback />}>
          <LoginForm />
        </Suspense>

        <p className="mt-6 text-center text-sm text-gray-500">
          Need access?{' '}
          <Link href="/contact" className="text-[#00d4aa] hover:underline">
            Contact your Beacon team
          </Link>
        </p>
      </div>
    </main>
  );
}
