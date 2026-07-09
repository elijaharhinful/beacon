'use client';

import { FileText, ExternalLink } from 'lucide-react';
import type { DeliverableResponseDto } from '@/lib/api/generated/model/deliverableResponseDto';
import { formatDate } from '@/lib/dashboard';

interface DeliverablesListProps {
  deliverables: DeliverableResponseDto[];
}

export default function DeliverablesList({ deliverables }: DeliverablesListProps) {
  return (
    <section className="rounded-2xl border border-white/5 bg-[#0d1117] p-6 sm:p-8">
      <h2 className="mb-6 text-lg font-bold text-white">Deliverables</h2>
      {deliverables.length === 0 ? (
        <p className="text-gray-500 text-sm">No deliverables shared yet.</p>
      ) : (
        <ul className="space-y-3">
          {deliverables.map((deliverable) => (
            <li key={deliverable.id}>
              <a
                href={deliverable.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/5 bg-[#101419] p-4 transition-colors hover:border-[#00d4aa]/30 cursor-pointer"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/30 text-primary">
                  <FileText size={18} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-medium text-white">{deliverable.name}</span>
                  <span className="block text-xs text-gray-500">Added {formatDate(deliverable.createdAt)}</span>
                </span>
                <ExternalLink size={16} className="text-gray-500 group-hover:text-[#00d4aa]" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
