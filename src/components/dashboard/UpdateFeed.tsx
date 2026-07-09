'use client';

import type { UpdateResponseDto } from '@/lib/api/generated/model/updateResponseDto';
import { formatDate } from '@/lib/dashboard';

interface UpdateFeedProps {
  updates: UpdateResponseDto[];
}

export default function UpdateFeed({ updates }: UpdateFeedProps) {
  return (
    <section className="rounded-2xl border border-white/5 bg-[#0d1117] p-6 sm:p-8">
      <h2 className="mb-6 text-lg font-bold text-white">Recent Updates</h2>
      {updates.length === 0 ? (
        <p className="text-gray-500 text-sm">No updates posted yet.</p>
      ) : (
        <ol className="relative space-y-6 border-l border-white/10 pl-6">
          {updates.map((update) => (
            <li key={update.id} className="relative">
              <span className="absolute -left-[1.72rem] top-1.5 h-2.5 w-2.5 rounded-full bg-[#00d4aa]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-white">{update.title}</h3>
                <time className="text-xs text-gray-500">{formatDate(update.createdAt)}</time>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-gray-400">{update.body}</p>
              {update.authorName && (
                <p className="mt-1.5 text-xs text-gray-600">Posted by {update.authorName}</p>
              )}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
