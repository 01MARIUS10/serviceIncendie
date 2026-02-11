'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Hero from './acceuil/hero';
import Nav from './nav';

// Import dynamique du TetraedeWrapper côté client uniquement
const TetraedeWrapper = dynamic(() => import("@/components/TetraedeWrapper"), {
  ssr: false,
  loading: () => null,
});

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  // usePathname() est réactif : il se met à jour à chaque navigation
  const pathname = usePathname();
  const shouldShowHero = pathname === '/' || pathname === '/accueil';

  return (
    <>
      {shouldShowHero ? <Hero /> : <Nav />}
      {/* Spacer pour compenser la nav fixe (h-16 = 4rem) */}
      {!shouldShowHero && <div className="h-16" />}
      {children}
    </>
  );
}
