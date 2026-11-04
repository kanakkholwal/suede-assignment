'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { href: '/catalog', label: 'Catalog' },
  { href: '/library', label: 'Library' },
];

export function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[#ddd8d2] bg-[#f8f5ef]">
      <div className="mx-auto flex h-15 w-full max-w-[1440px] items-center gap-7 px-4 sm:px-6 lg:px-8">
        <Link
          href="/catalog"
          className="font-logo text-[1.7rem] leading-none tracking-[-0.055em] text-[#15110e]"
          aria-label="Suede catalog"
        >
          suede
        </Link>
        <nav aria-label="Main navigation" className="flex h-full items-center gap-1">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`relative flex h-full items-center px-3 text-sm transition-colors ${
                  active ? 'text-[#17120f]' : 'text-[#6c625a] hover:text-[#17120f]'
                }`}
              >
                {item.label}
                {active ? <span className="absolute inset-x-3 bottom-0 h-px bg-[#17120f]" /> : null}
              </Link>
            );
          })}
        </nav>
        <span className="ml-auto hidden rounded-full border border-[#ddd8d2] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#746a61] sm:block">
          Catalog Lab Interview
        </span>
      </div>
    </header>
  );
}
