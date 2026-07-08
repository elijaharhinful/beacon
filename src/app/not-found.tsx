import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0d0f] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-16 h-16 rounded bg-[#00d4aa]/10 flex items-center justify-center mb-6">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </div>
      <h1 className="text-white font-bold text-4xl md:text-5xl mb-4">404 - Page Not Found</h1>
      <p className="text-gray-400 max-w-md mb-8 text-lg">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link 
        href="/"
        className="bg-[#00d4aa] hover:bg-[#00b894] text-[#0a0d0f] font-semibold px-6 py-3 rounded transition-all duration-200"
      >
        Return to Home
      </Link>
    </div>
  );
}
