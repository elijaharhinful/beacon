import { MilestoneResponseDtoStatus } from '@/lib/api/generated/model/milestoneResponseDtoStatus';
import { MilestoneResponseDtoStage } from '@/lib/api/generated/model/milestoneResponseDtoStage';
import { ProjectResponseDtoStatus } from '@/lib/api/generated/model/projectResponseDtoStatus';
import { FeedbackResponseDtoStatus } from '@/lib/api/generated/model/feedbackResponseDtoStatus';
import type { MilestoneResponseDto } from '@/lib/api/generated/model/milestoneResponseDto';

export const STAGE_ORDER: MilestoneResponseDtoStage[] = [
  MilestoneResponseDtoStage.DISCOVER,
  MilestoneResponseDtoStage.DESIGN,
  MilestoneResponseDtoStage.BUILD,
  MilestoneResponseDtoStage.SCALE,
];

export const STAGE_LABEL: Record<MilestoneResponseDtoStage, string> = {
  DISCOVER: 'Discover',
  DESIGN: 'Design',
  BUILD: 'Build',
  SCALE: 'Scale',
};

interface StatusStyle {
  label: string;
  className: string;
}

export const MILESTONE_STATUS_STYLE: Record<MilestoneResponseDtoStatus, StatusStyle> = {
  COMPLETED: { label: 'Completed', className: 'bg-[#00d4aa]/10 text-[#00d4aa] border-[#00d4aa]/30' },
  IN_PROGRESS: { label: 'In Progress', className: 'bg-amber-400/10 text-amber-300 border-amber-400/30' },
  PENDING: { label: 'Pending', className: 'bg-white/5 text-gray-400 border-white/10' },
};

export const PROJECT_STATUS_STYLE: Record<ProjectResponseDtoStatus, StatusStyle> = {
  ACTIVE: { label: 'Active', className: 'bg-[#00d4aa]/10 text-[#00d4aa] border-[#00d4aa]/30' },
  ON_HOLD: { label: 'On Hold', className: 'bg-amber-400/10 text-amber-300 border-amber-400/30' },
  COMPLETED: { label: 'Completed', className: 'bg-indigo-400/10 text-indigo-300 border-indigo-400/30' },
};

export const FEEDBACK_STATUS_STYLE: Record<FeedbackResponseDtoStatus, StatusStyle> = {
  OPEN: { label: 'Open', className: 'bg-amber-400/10 text-amber-300 border-amber-400/30' },
  ADDRESSED: { label: 'Addressed', className: 'bg-[#00d4aa]/10 text-[#00d4aa] border-[#00d4aa]/30' },
};

/**
 * Percentage of milestones completed (0-100), for the overall progress meter.
 */
export function computeProgress(milestones: MilestoneResponseDto[]): number {
  if (milestones.length === 0) {
    return 0;
  }
  const done = milestones.filter((m) => m.status === MilestoneResponseDtoStatus.COMPLETED).length;
  return Math.round((done / milestones.length) * 100);
}

export function formatDate(value: string | null | undefined): string {
  if (!value) {
    return '-';
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return '-';
  }
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}
