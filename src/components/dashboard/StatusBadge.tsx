interface StatusBadgeProps {
  label: string;
  className: string;
}

/**
 * Small pill used for milestone / project / feedback status across the dashboard.
 */
export default function StatusBadge({ label, className }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${className}`}
    >
      {label}
    </span>
  );
}
