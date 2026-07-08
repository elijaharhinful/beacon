'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SelectProps {
  options: string[];
  /** Controlled-ish default; falls back to first option. */
  defaultValue?: string;
  /** Shown when nothing is selected yet. */
  placeholder?: string;
  /** Name for the hidden input so the value posts with the form. */
  name?: string;
  className?: string;
}

/**
 * Custom dark-themed select. Native <select> dropdown lists are rendered by the
 * OS and cannot be styled, so this is a button + panel that matches the BEACON
 * form tokens (teal accent, hairline borders). Closes on outside click / Escape,
 * supports basic keyboard use, and mirrors its value into a hidden input.
 */
export default function Select({
  options,
  defaultValue,
  placeholder,
  name,
  className,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue ?? (placeholder ? '' : options[0]));
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      {name && <input type="hidden" name={name} value={value} />}

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          'w-full flex items-center justify-between gap-2 bg-black/40 border rounded-lg px-4 py-3 text-left transition-colors cursor-pointer focus:outline-none',
          open ? 'border-[#00d4aa]' : 'border-white/10 hover:border-white/20',
          value ? 'text-white' : 'text-gray-600',
        )}
      >
        <span className="truncate">{value || placeholder}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn('text-gray-500 shrink-0 transition-transform duration-200', open && 'rotate-180')}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          className="absolute left-0 right-0 top-full mt-2 z-20 max-h-60 overflow-auto rounded-lg border border-white/10 bg-[#0d1117] py-1 shadow-2xl shadow-black/50"
        >
          {options.map((option) => {
            const selected = option === value;
            return (
              <li
                key={option}
                role="option"
                aria-selected={selected}
                onClick={() => {
                  setValue(option);
                  setOpen(false);
                }}
                className={cn(
                  'flex items-center justify-between gap-2 px-4 py-2.5 text-sm cursor-pointer transition-colors',
                  selected ? 'text-[#00d4aa] bg-[#00d4aa]/5' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                )}
              >
                <span className="truncate">{option}</span>
                {selected && (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
