'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useQueryClient } from '@tanstack/react-query';
import { ArrowRight } from 'lucide-react';
import AppHeader from '@/components/layout/AppHeader';
import { Button } from '@/components/ui/Button';
import { AdminCard, FieldLabel, adminField } from '@/components/admin/admin-ui';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { useProjectsControllerCreate, useProjectsControllerFindAll } from '@/lib/api/generated/projects/projects';
import { useUsersControllerFindAll } from '@/lib/api/generated/users/users';
import { Role } from '@/lib/roles';
import { PROJECT_STATUS_STYLE, formatDate } from '@/lib/dashboard';

const projectSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  description: z.string().optional(),
  clientId: z.string().uuid('Select a client'),
});

type ProjectValues = z.infer<typeof projectSchema>;

export default function AdminOverviewPage() {
  const queryClient = useQueryClient();
  const { data: projectsPage } = useProjectsControllerFindAll({ limit: 100, sortOrder: 'desc' });
  const { data: usersPage } = useUsersControllerFindAll({ limit: 100 });

  const clients = (usersPage?.items ?? []).filter((u) => u.role === Role.CLIENT);
  const projects = projectsPage?.items ?? [];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProjectValues>({ resolver: zodResolver(projectSchema) });

  const createProject = useProjectsControllerCreate({
    mutation: {
      onSuccess: () => {
        reset({ name: '', description: '', clientId: '' });
        void queryClient.invalidateQueries();
      },
    },
  });

  const onSubmit = (values: ProjectValues) => {
    createProject.mutate({
      data: { name: values.name, description: values.description, clientId: values.clientId },
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0d0f]">
      <AppHeader />
      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-black text-white">Admin</h1>
          <Button asChild variant="outline" size="sm">
            <Link href="/admin/users">Manage Clients</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Create project */}
          <div className="lg:col-span-1">
            <AdminCard title="New Project">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <FieldLabel>Name</FieldLabel>
                  <input className={adminField} placeholder="ERP System" {...register('name')} />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
                </div>
                <div>
                  <FieldLabel>Description</FieldLabel>
                  <textarea rows={3} className={`${adminField} resize-none`} {...register('description')} />
                </div>
                <div>
                  <FieldLabel>Client</FieldLabel>
                  <select className={adminField} defaultValue="" {...register('clientId')}>
                    <option value="" disabled>
                      Select a client
                    </option>
                    {clients.map((client) => (
                      <option key={client.id} value={client.id}>
                        {client.name} ({client.email})
                      </option>
                    ))}
                  </select>
                  {errors.clientId && <p className="mt-1 text-xs text-red-400">{errors.clientId.message}</p>}
                </div>
                {clients.length === 0 && (
                  <p className="text-xs text-amber-300">
                    No clients yet.{' '}
                    <Link href="/admin/users" className="underline">
                      Create one first
                    </Link>
                    .
                  </p>
                )}
                <Button type="submit" className="w-full" disabled={createProject.isPending}>
                  {createProject.isPending ? 'Creating...' : 'Create Project'}
                </Button>
              </form>
            </AdminCard>
          </div>

          {/* Projects list */}
          <div className="lg:col-span-2">
            <AdminCard title={`Projects (${projects.length})`}>
              {projects.length === 0 ? (
                <p className="text-sm text-gray-500">No projects yet.</p>
              ) : (
                <ul className="space-y-3">
                  {projects.map((project) => (
                    <li key={project.id}>
                      <Link
                        href={`/admin/projects/${project.id}`}
                        className="group flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-[#101419] p-4 transition-colors hover:border-[#00d4aa]/30"
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-3">
                            <span className="truncate font-semibold text-white">{project.name}</span>
                            <StatusBadge
                              label={PROJECT_STATUS_STYLE[project.status].label}
                              className={PROJECT_STATUS_STYLE[project.status].className}
                            />
                          </div>
                          <p className="mt-1 text-xs text-gray-500">
                            {project.clientName ?? 'Unassigned'} - target {formatDate(project.targetDate)}
                          </p>
                        </div>
                        <ArrowRight size={18} className="text-gray-600 group-hover:text-[#00d4aa]" />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </AdminCard>
          </div>
        </div>
      </main>
    </div>
  );
}
