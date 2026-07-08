'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0a0d0f] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-16 h-16 rounded bg-red-500/10 flex items-center justify-center mb-6">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      </div>
      <h1 className="text-white font-bold text-4xl md:text-5xl mb-4">Something went wrong!</h1>
      <p className="text-gray-400 max-w-md mb-8 text-lg">
        An unexpected error has occurred. We&apos;ve been notified and are looking into it.
      </p>
      <button
        onClick={() => reset()}
        className="bg-[#00d4aa] hover:bg-[#00b894] text-[#0a0d0f] font-semibold px-6 py-3 rounded transition-all duration-200"
      >
        Try again
      </button>
    </div>
  );
}
