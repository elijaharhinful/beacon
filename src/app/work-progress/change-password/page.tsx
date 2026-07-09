'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import AppHeader from '@/components/layout/AppHeader';
import { Button } from '@/components/ui/Button';
import { useAuthControllerChangePassword } from '@/lib/api/generated/auth/auth';

const schema = z
  .object({
    currentPassword: z.string().min(1, 'Enter your current password'),
    newPassword: z.string().min(8, 'Use at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type ChangePasswordValues = z.infer<typeof schema>;

const FIELD_CLASS =
  'w-full rounded-lg border border-white/10 bg-[#0a0d0f] px-4 py-2.5 text-white placeholder-gray-600 outline-none transition-colors focus:border-[#00d4aa]/60';

export default function ChangePasswordPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordValues>({ resolver: zodResolver(schema) });

  const changePassword = useAuthControllerChangePassword({
    mutation: {
      onSuccess: () => router.push('/work-progress/dashboard'),
      onError: () => setServerError('Could not change password. Check your current password.'),
    },
  });

  const onSubmit = (values: ChangePasswordValues) => {
    setServerError(null);
    changePassword.mutate({
      data: { currentPassword: values.currentPassword, newPassword: values.newPassword },
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0d0f]">
      <AppHeader />
      <main className="mx-auto max-w-md px-6 py-16">
        <h1 className="mb-1 text-2xl font-black text-white">Set a New Password</h1>
        <p className="mb-8 text-sm text-gray-500">
          For security, please replace the temporary password you were given.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">Current password</label>
            <input type="password" autoComplete="current-password" className={FIELD_CLASS} {...register('currentPassword')} />
            {errors.currentPassword && (
              <p className="mt-1.5 text-sm text-red-400">{errors.currentPassword.message}</p>
            )}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">New password</label>
            <input type="password" autoComplete="new-password" className={FIELD_CLASS} {...register('newPassword')} />
            {errors.newPassword && (
              <p className="mt-1.5 text-sm text-red-400">{errors.newPassword.message}</p>
            )}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">Confirm new password</label>
            <input type="password" autoComplete="new-password" className={FIELD_CLASS} {...register('confirmPassword')} />
            {errors.confirmPassword && (
              <p className="mt-1.5 text-sm text-red-400">{errors.confirmPassword.message}</p>
            )}
          </div>

          {serverError && (
            <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-sm text-red-400">
              {serverError}
            </div>
          )}

          <Button type="submit" size="lg" className="w-full" disabled={changePassword.isPending}>
            {changePassword.isPending ? 'Saving...' : 'Update Password'}
          </Button>
        </form>
      </main>
    </div>
  );
}
