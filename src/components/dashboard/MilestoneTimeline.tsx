'use client';

import { Check } from 'lucide-react';
import type { MilestoneResponseDto } from '@/lib/api/generated/model/milestoneResponseDto';
import { MilestoneResponseDtoStatus } from '@/lib/api/generated/model/milestoneResponseDtoStatus';
import StatusBadge from './StatusBadge';
import {
  MILESTONE_STATUS_STYLE,
  STAGE_LABEL,
  computeProgress,
  formatDate,
} from '@/lib/dashboard';

interface MilestoneTimelineProps {
  milestones: MilestoneResponseDto[];
}

export default function MilestoneTimeline({ milestones }: MilestoneTimelineProps) {
  const progress = computeProgress(milestones);

  return (
    <section className="rounded-2xl border border-white/5 bg-[#0d1117] p-6 sm:p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-white">Project Milestones</h2>
        <span className="text-sm text-gray-400">{progress}% complete</span>
      </div>

      {/* Progress meter */}
      <div
        className="mb-8 h-2 w-full overflow-hidden rounded-full bg-white/5"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-[#00d4aa] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {milestones.length === 0 ? (
        <p className="text-gray-500 text-sm">No milestones have been added yet.</p>
      ) : (
        <ol className="space-y-4">
          {milestones.map((milestone, index) => {
            const style = MILESTONE_STATUS_STYLE[milestone.status];
            const isComplete = milestone.status === MilestoneResponseDtoStatus.COMPLETED;
            return (
              <li
                key={milestone.id}
                className="relative flex gap-4 rounded-xl border border-white/5 bg-[#101419] p-4"
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${style.className}`}
                >
                  {isComplete ? <Check size={16} /> : String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-gray-500">
                      {STAGE_LABEL[milestone.stage]}
                    </span>
                    <StatusBadge label={style.label} className={style.className} />
                  </div>
                  <h3 className="mt-1 font-semibold text-white">{milestone.title}</h3>
                  {milestone.description && (
                    <p className="mt-1 text-sm leading-relaxed text-gray-400">{milestone.description}</p>
                  )}
                  {milestone.dueDate && (
                    <p className="mt-2 text-xs text-gray-500">Due {formatDate(milestone.dueDate)}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}
