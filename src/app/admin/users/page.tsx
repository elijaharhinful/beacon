'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useQueryClient } from '@tanstack/react-query';
import { ArrowLeft, Copy } from 'lucide-react';
import AppHeader from '@/components/layout/AppHeader';
import { Button } from '@/components/ui/Button';
import { AdminCard, FieldLabel, adminField } from '@/components/admin/admin-ui';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { useUsersControllerCreate, useUsersControllerFindAll } from '@/lib/api/generated/users/users';
import { CreateUserDtoRole } from '@/lib/api/generated/model/createUserDtoRole';
import { formatDate } from '@/lib/dashboard';

const userSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  role: z.nativeEnum(CreateUserDtoRole),
});

type UserValues = z.infer<typeof userSchema>;

interface CreatedCredentials {
  email: string;
  temporaryPassword: string;
}

export default function AdminUsersPage() {
  const queryClient = useQueryClient();
  const { data: usersPage } = useUsersControllerFindAll({ limit: 100 });
  const users = usersPage?.items ?? [];
  const [created, setCreated] = useState<CreatedCredentials | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserValues>({
    resolver: zodResolver(userSchema),
    defaultValues: { role: CreateUserDtoRole.CLIENT },
  });

  const createUser = useUsersControllerCreate({
    mutation: {
      onSuccess: (result) => {
        setCreated({ email: result.user.email, temporaryPassword: result.temporaryPassword });
        reset({ name: '', email: '', role: CreateUserDtoRole.CLIENT });
        void queryClient.invalidateQueries();
      },
    },
  });

  const onSubmit = (values: UserValues) => {
    setCreated(null);
    createUser.mutate({ data: { name: values.name, email: values.email, role: values.role } });
  };

  return (
    <div className="min-h-screen bg-[#0a0d0f]">
      <AppHeader />
      <main className="mx-auto max-w-5xl px-6 py-10 lg:px-10">
        <Link
          href="/admin"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-white"
        >
          <ArrowLeft size={15} /> Back to admin
        </Link>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AdminCard title="New Client">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <FieldLabel>Name</FieldLabel>
                <input className={adminField} placeholder="Jane Client" {...register('name')} />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
              </div>
              <div>
                <FieldLabel>Email</FieldLabel>
                <input className={adminField} placeholder="jane@company.com" {...register('email')} />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
              </div>
              <div>
                <FieldLabel>Role</FieldLabel>
                <select className={adminField} {...register('role')}>
                  <option value={CreateUserDtoRole.CLIENT}>Client</option>
                  <option value={CreateUserDtoRole.ADMIN}>Admin</option>
                </select>
              </div>
              <Button type="submit" className="w-full" disabled={createUser.isPending}>
                {createUser.isPending ? 'Creating...' : 'Create User'}
              </Button>
            </form>

            {created && (
              <div className="mt-5 rounded-xl border border-[#00d4aa]/30 bg-[#00d4aa]/5 p-4">
                <p className="text-sm font-medium text-white">Account created</p>
                <p className="mt-1 text-xs text-gray-400">
                  Share these one-time credentials with {created.email}. The password is shown only now.
                </p>
                <div className="mt-3 flex items-center justify-between gap-2 rounded-lg bg-[#0a0d0f] px-3 py-2">
                  <code className="text-sm text-[#00d4aa]">{created.temporaryPassword}</code>
                  <button
                    type="button"
                    onClick={() => void navigator.clipboard.writeText(created.temporaryPassword)}
                    className="cursor-pointer text-gray-500 transition-colors hover:text-white"
                    aria-label="Copy password"
                  >
                    <Copy size={15} />
                  </button>
                </div>
              </div>
            )}
          </AdminCard>

          <AdminCard title={`Users (${users.length})`}>
            {users.length === 0 ? (
              <p className="text-sm text-gray-500">No users yet.</p>
            ) : (
              <ul className="space-y-2">
                {users.map((user) => (
                  <li
                    key={user.id}
                    className="flex items-center justify-between gap-3 rounded-lg border border-white/5 bg-[#101419] px-4 py-3"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-white">{user.name}</p>
                      <p className="truncate text-xs text-gray-500">{user.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <StatusBadge
                        label={user.role}
                        className={
                          user.role === CreateUserDtoRole.ADMIN
                            ? 'bg-indigo-400/10 text-indigo-300 border-indigo-400/30'
                            : 'bg-white/5 text-gray-400 border-white/10'
                        }
                      />
                      <span className="hidden text-xs text-gray-600 sm:inline">
                        {formatDate(user.createdAt)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </AdminCard>
        </div>
      </main>
    </div>
  );
}
