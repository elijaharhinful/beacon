'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useQueryClient } from '@tanstack/react-query';
import { ArrowLeft, Check } from 'lucide-react';
import AppHeader from '@/components/layout/AppHeader';
import { Button } from '@/components/ui/Button';
import { AdminCard, FieldLabel, adminField, adminFieldCompact } from '@/components/admin/admin-ui';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { useProjectsControllerFindOne } from '@/lib/api/generated/projects/projects';
import { useMilestonesControllerCreate, useMilestonesControllerUpdate } from '@/lib/api/generated/milestones/milestones';
import { useUpdatesControllerCreate } from '@/lib/api/generated/updates/updates';
import { useDeliverablesControllerCreate } from '@/lib/api/generated/deliverables/deliverables';
import {
  useFeedbackControllerFindAllForProject,
  useFeedbackControllerUpdateStatus,
} from '@/lib/api/generated/feedback/feedback';
import { CreateMilestoneDtoStage } from '@/lib/api/generated/model/createMilestoneDtoStage';
import { MilestoneResponseDtoStatus } from '@/lib/api/generated/model/milestoneResponseDtoStatus';
import { FeedbackResponseDtoStatus } from '@/lib/api/generated/model/feedbackResponseDtoStatus';
import { useProjectStream } from '@/hooks/use-project-stream';
import {
  FEEDBACK_STATUS_STYLE,
  MILESTONE_STATUS_STYLE,
  PROJECT_STATUS_STYLE,
  STAGE_LABEL,
  formatDate,
} from '@/lib/dashboard';

const milestoneSchema = z.object({
  title: z.string().min(2, 'Title is required'),
  stage: z.nativeEnum(CreateMilestoneDtoStage),
  description: z.string().optional(),
});
const updateSchema = z.object({
  title: z.string().min(2, 'Title is required'),
  body: z.string().min(1, 'Body is required'),
});
const deliverableSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  url: z.string().url('Enter a valid URL'),
});

export default function AdminProjectPage() {
  const params = useParams<{ id: string }>();
  const projectId = params.id;
  const queryClient = useQueryClient();
  const invalidate = () => void queryClient.invalidateQueries();

  useProjectStream(projectId);

  const { data: project, isLoading } = useProjectsControllerFindOne(projectId, {
    query: { enabled: Boolean(projectId) },
  });
  const { data: feedbackPage } = useFeedbackControllerFindAllForProject(projectId, { limit: 50, sortOrder: 'desc' });

  const milestoneForm = useForm<z.infer<typeof milestoneSchema>>({
    resolver: zodResolver(milestoneSchema),
    defaultValues: { stage: CreateMilestoneDtoStage.DISCOVER },
  });
  const updateForm = useForm<z.infer<typeof updateSchema>>({ resolver: zodResolver(updateSchema) });
  const deliverableForm = useForm<z.infer<typeof deliverableSchema>>({ resolver: zodResolver(deliverableSchema) });

  const createMilestone = useMilestonesControllerCreate({ mutation: { onSuccess: () => { milestoneForm.reset({ title: '', description: '', stage: CreateMilestoneDtoStage.DISCOVER }); invalidate(); } } });
  const updateMilestone = useMilestonesControllerUpdate({ mutation: { onSuccess: invalidate } });
  const createUpdate = useUpdatesControllerCreate({ mutation: { onSuccess: () => { updateForm.reset({ title: '', body: '' }); invalidate(); } } });
  const createDeliverable = useDeliverablesControllerCreate({ mutation: { onSuccess: () => { deliverableForm.reset({ name: '', url: '' }); invalidate(); } } });
  const addressFeedback = useFeedbackControllerUpdateStatus({ mutation: { onSuccess: invalidate } });

  if (isLoading && !project) {
    return (
      <div className="min-h-screen bg-[#0a0d0f]">
        <AppHeader />
        <main className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-gray-500">Loading project...</p>
        </main>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0d0f]">
        <AppHeader />
        <main className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-gray-500">Project not found.</p>
        </main>
      </div>
    );
  }

  const feedbackItems = feedbackPage?.items ?? [];

  return (
    <div className="min-h-screen bg-[#0a0d0f]">
      <AppHeader />
      <main className="mx-auto max-w-6xl px-6 py-10 lg:px-10">
        <Link href="/admin" className="mb-6 inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-white">
          <ArrowLeft size={15} /> Back to admin
        </Link>

        <div className="mb-8 flex items-center gap-3">
          <h1 className="text-3xl font-black text-white">{project.name}</h1>
          <StatusBadge
            label={PROJECT_STATUS_STYLE[project.status].label}
            className={PROJECT_STATUS_STYLE[project.status].className}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Milestones */}
          <AdminCard title="Milestones">
            <ul className="mb-5 space-y-2">
              {project.milestones.map((milestone) => (
                <li key={milestone.id} className="flex items-center justify-between gap-3 rounded-lg border border-white/5 bg-[#101419] px-3 py-2.5">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-white">{milestone.title}</p>
                    <p className="text-xs text-gray-500">{STAGE_LABEL[milestone.stage]}</p>
                  </div>
                  <select
                    value={milestone.status}
                    onChange={(e) =>
                      updateMilestone.mutate({
                        id: milestone.id,
                        data: { status: e.target.value as MilestoneResponseDtoStatus },
                      })
                    }
                    className={`${adminFieldCompact} ${MILESTONE_STATUS_STYLE[milestone.status].className}`}
                  >
                    {Object.values(MilestoneResponseDtoStatus).map((status) => (
                      <option key={status} value={status} className="bg-[#0a0d0f] text-white">
                        {MILESTONE_STATUS_STYLE[status].label}
                      </option>
                    ))}
                  </select>
                </li>
              ))}
              {project.milestones.length === 0 && <p className="text-sm text-gray-500">No milestones yet.</p>}
            </ul>

            <form onSubmit={milestoneForm.handleSubmit((v) => createMilestone.mutate({ data: { projectId, title: v.title, stage: v.stage, description: v.description } }))} className="space-y-3 border-t border-white/5 pt-5">
              <div>
                <FieldLabel>New milestone</FieldLabel>
                <input className={adminField} placeholder="Title" {...milestoneForm.register('title')} />
                {milestoneForm.formState.errors.title && (
                  <p className="mt-1 text-xs text-red-400">{milestoneForm.formState.errors.title.message}</p>
                )}
              </div>
              <select className={adminField} {...milestoneForm.register('stage')}>
                {Object.values(CreateMilestoneDtoStage).map((stage) => (
                  <option key={stage} value={stage}>
                    {STAGE_LABEL[stage]}
                  </option>
                ))}
              </select>
              <Button type="submit" size="sm" disabled={createMilestone.isPending}>
                Add Milestone
              </Button>
            </form>
          </AdminCard>

          {/* Post update */}
          <AdminCard title="Post an Update">
            <form onSubmit={updateForm.handleSubmit((v) => createUpdate.mutate({ data: { projectId, title: v.title, body: v.body } }))} className="space-y-3">
              <input className={adminField} placeholder="Update title" {...updateForm.register('title')} />
              {updateForm.formState.errors.title && (
                <p className="text-xs text-red-400">{updateForm.formState.errors.title.message}</p>
              )}
              <textarea rows={4} className={`${adminField} resize-none`} placeholder="What changed?" {...updateForm.register('body')} />
              {updateForm.formState.errors.body && (
                <p className="text-xs text-red-400">{updateForm.formState.errors.body.message}</p>
              )}
              <Button type="submit" size="sm" disabled={createUpdate.isPending}>
                Publish Update
              </Button>
            </form>

            <div className="mt-6 border-t border-white/5 pt-5">
              <h3 className="mb-3 text-sm font-medium text-gray-300">Recent</h3>
              <ul className="space-y-2">
                {project.updates.slice(0, 4).map((u) => (
                  <li key={u.id} className="rounded-lg bg-[#101419] px-3 py-2">
                    <p className="text-sm text-white">{u.title}</p>
                    <p className="text-xs text-gray-500">{formatDate(u.createdAt)}</p>
                  </li>
                ))}
                {project.updates.length === 0 && <p className="text-sm text-gray-500">No updates yet.</p>}
              </ul>
            </div>
          </AdminCard>

          {/* Deliverables */}
          <AdminCard title="Deliverables">
            <form onSubmit={deliverableForm.handleSubmit((v) => createDeliverable.mutate({ data: { projectId, name: v.name, url: v.url } }))} className="space-y-3">
              <input className={adminField} placeholder="Name (e.g. Design mockups)" {...deliverableForm.register('name')} />
              {deliverableForm.formState.errors.name && (
                <p className="text-xs text-red-400">{deliverableForm.formState.errors.name.message}</p>
              )}
              <input className={adminField} placeholder="https://..." {...deliverableForm.register('url')} />
              {deliverableForm.formState.errors.url && (
                <p className="text-xs text-red-400">{deliverableForm.formState.errors.url.message}</p>
              )}
              <Button type="submit" size="sm" disabled={createDeliverable.isPending}>
                Add Deliverable
              </Button>
            </form>
            <ul className="mt-5 space-y-2 border-t border-white/5 pt-5">
              {project.deliverables.map((d) => (
                <li key={d.id} className="flex items-center justify-between rounded-lg bg-[#101419] px-3 py-2">
                  <span className="truncate text-sm text-white">{d.name}</span>
                  <span className="text-xs text-gray-500">{formatDate(d.createdAt)}</span>
                </li>
              ))}
              {project.deliverables.length === 0 && <p className="text-sm text-gray-500">No deliverables yet.</p>}
            </ul>
          </AdminCard>

          {/* Feedback inbox */}
          <AdminCard title={`Feedback Inbox (${feedbackItems.length})`}>
            {feedbackItems.length === 0 ? (
              <p className="text-sm text-gray-500">No feedback yet.</p>
            ) : (
              <ul className="space-y-3">
                {feedbackItems.map((entry) => {
                  const style = FEEDBACK_STATUS_STYLE[entry.status];
                  const isOpen = entry.status === FeedbackResponseDtoStatus.OPEN;
                  return (
                    <li key={entry.id} className="rounded-lg border border-white/5 bg-[#101419] p-3">
                      <div className="mb-1.5 flex items-center justify-between gap-2">
                        <span className="text-xs text-gray-500">
                          {entry.authorName ?? 'Client'} - {formatDate(entry.createdAt)}
                        </span>
                        <StatusBadge label={style.label} className={style.className} />
                      </div>
                      <p className="text-sm text-gray-300">{entry.body}</p>
                      {isOpen && (
                        <button
                          onClick={() =>
                            addressFeedback.mutate({
                              id: entry.id,
                              data: { status: FeedbackResponseDtoStatus.ADDRESSED },
                            })
                          }
                          className="mt-2 inline-flex cursor-pointer items-center gap-1 text-xs font-medium text-[#00d4aa] hover:underline"
                        >
                          <Check size={13} /> Mark addressed
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </AdminCard>
        </div>
      </main>
    </div>
  );
}
