'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Role } from '@/lib/roles';

/**
 * Top bar for the authenticated Work Progress area (dashboard + admin).
 */
export default function AppHeader() {
  const { data: session } = useSession();
  const isAdmin = session?.user.role === Role.ADMIN;

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0a0d0f]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/beacon_landscape_no_bg.png"
              alt="Beacon Logo"
              width={130}
              height={36}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/work-progress/dashboard"
              className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              Dashboard
            </Link>
            {isAdmin && (
              <Link
                href="/admin"
                className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
              >
                Admin
              </Link>
            )}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {session?.user?.email && (
            <span className="hidden text-sm text-gray-500 sm:inline">{session.user.email}</span>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={() => void signOut({ callbackUrl: '/' })}
            className="gap-1.5"
          >
            <LogOut size={14} />
            Sign Out
          </Button>
        </div>
      </div>
    </header>
  );
}
