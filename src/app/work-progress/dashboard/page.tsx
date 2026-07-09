'use client';

import { useMemo, useState } from 'react';
import AppHeader from '@/components/layout/AppHeader';
import MilestoneTimeline from '@/components/dashboard/MilestoneTimeline';
import UpdateFeed from '@/components/dashboard/UpdateFeed';
import DeliverablesList from '@/components/dashboard/DeliverablesList';
import FeedbackForm from '@/components/dashboard/FeedbackForm';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { useProjectsControllerFindMine, useProjectsControllerFindOne } from '@/lib/api/generated/projects/projects';
import { useProjectStream } from '@/hooks/use-project-stream';
import { PROJECT_STATUS_STYLE, formatDate } from '@/lib/dashboard';

export default function DashboardPage() {
  const { data: mine, isLoading: loadingList } = useProjectsControllerFindMine({ limit: 50 });
  const projects = useMemo(() => mine?.items ?? [], [mine]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const activeId = selectedId ?? projects[0]?.id ?? null;
  const { data: project, isLoading: loadingDetail } = useProjectsControllerFindOne(activeId ?? '', {
    query: { enabled: Boolean(activeId) },
  });

  useProjectStream(activeId ?? undefined);

  return (
    <div className="min-h-screen bg-[#0a0d0f]">
      <AppHeader />

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        {loadingList ? (
          <p className="text-gray-500">Loading your projects...</p>
        ) : projects.length === 0 ? (
          <div className="rounded-2xl border border-white/5 bg-[#0d1117] p-10 text-center">
            <h1 className="text-xl font-bold text-white">No projects yet</h1>
            <p className="mt-2 text-gray-500">
              Your Beacon team has not assigned a project to your account yet. Please check back soon.
            </p>
          </div>
        ) : (
          <>
            {/* Project selector (only when more than one) */}
            {projects.length > 1 && (
              <div className="mb-8 flex flex-wrap gap-2">
                {projects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedId(p.id)}
                    className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm transition-colors ${
                      p.id === activeId
                        ? 'border-[#00d4aa]/40 bg-[#00d4aa]/10 text-[#00d4aa]'
                        : 'border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            )}

            {project && (
              <>
                {/* Header */}
                <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <h1 className="text-3xl font-black text-white">{project.name}</h1>
                      <StatusBadge
                        label={PROJECT_STATUS_STYLE[project.status].label}
                        className={PROJECT_STATUS_STYLE[project.status].className}
                      />
                    </div>
                    {project.description && (
                      <p className="max-w-2xl text-gray-400">{project.description}</p>
                    )}
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <p>Started {formatDate(project.startDate)}</p>
                    <p>Target {formatDate(project.targetDate)}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                  <div className="lg:col-span-2 space-y-6">
                    <MilestoneTimeline milestones={project.milestones} />
                    <FeedbackForm projectId={project.id} />
                  </div>
                  <div className="space-y-6">
                    <UpdateFeed updates={project.updates} />
                    <DeliverablesList deliverables={project.deliverables} />
                  </div>
                </div>
              </>
            )}

            {loadingDetail && !project && <p className="text-gray-500">Loading project...</p>}
          </>
        )}
      </main>
    </div>
  );
}
