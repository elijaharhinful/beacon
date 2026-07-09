'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/Button';
import {
  useFeedbackControllerCreate,
  useFeedbackControllerFindAllForProject,
} from '@/lib/api/generated/feedback/feedback';
import StatusBadge from './StatusBadge';
import { FEEDBACK_STATUS_STYLE, formatDate } from '@/lib/dashboard';

const feedbackSchema = z.object({
  body: z.string().min(3, 'Please enter a bit more detail').max(2000),
});

type FeedbackValues = z.infer<typeof feedbackSchema>;

interface FeedbackPanelProps {
  projectId: string;
}

export default function FeedbackForm({ projectId }: FeedbackPanelProps) {
  const queryClient = useQueryClient();
  const { data: feedback } = useFeedbackControllerFindAllForProject(projectId, {
    limit: 20,
    sortOrder: 'desc',
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FeedbackValues>({ resolver: zodResolver(feedbackSchema) });

  const createFeedback = useFeedbackControllerCreate({
    mutation: {
      onSuccess: () => {
        reset({ body: '' });
        void queryClient.invalidateQueries();
      },
    },
  });

  const onSubmit = (values: FeedbackValues) => {
    createFeedback.mutate({ data: { projectId, body: values.body } });
  };

  const items = feedback?.items ?? [];

  return (
    <section className="rounded-2xl border border-white/5 bg-[#0d1117] p-6 sm:p-8">
      <h2 className="mb-6 text-lg font-bold text-white">Feedback</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
        <textarea
          {...register('body')}
          rows={3}
          placeholder="Share feedback or ask a question about your project..."
          className="w-full resize-none rounded-lg border border-white/10 bg-[#0a0d0f] px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors focus:border-[#00d4aa]/60"
        />
        {errors.body && <p className="mt-1.5 text-sm text-red-400">{errors.body.message}</p>}
        <div className="mt-3 flex justify-end">
          <Button type="submit" size="lg" disabled={createFeedback.isPending}>
            {createFeedback.isPending ? 'Sending...' : 'Send Feedback'}
          </Button>
        </div>
      </form>

      {items.length > 0 && (
        <ul className="space-y-4">
          {items.map((entry) => {
            const style = FEEDBACK_STATUS_STYLE[entry.status];
            return (
              <li key={entry.id} className="rounded-xl border border-white/5 bg-[#101419] p-4">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="text-xs text-gray-500">
                    {entry.authorName ?? 'You'} - {formatDate(entry.createdAt)}
                  </span>
                  <StatusBadge label={style.label} className={style.className} />
                </div>
                <p className="text-sm leading-relaxed text-gray-300">{entry.body}</p>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
