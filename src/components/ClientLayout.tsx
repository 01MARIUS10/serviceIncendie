'use client';

import dynamic from 'next/dynamic';
import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// Import dynamique du TetraedeWrapper côté client uniquement
const TetraedeWrapper = dynamic(() => import("@/components/TetraedeWrapper"), {
  ssr: false,
  loading: () => null,
});

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  
  // Ne monter que côté client
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Ne pas afficher le tétraèdre pendant le SSR ou sur les pages spéciales
  const isSpecialPage = pathname?.startsWith('/_') || !pathname;
  const shouldShowTetraede = mounted && !isSpecialPage;

  return (
    <>
      {shouldShowTetraede && <TetraedeWrapper />}
      {children}
    </>
  );
}
