'use client';

import dynamic from 'next/dynamic';
import { ReactNode, useEffect, useState } from 'react';

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
  const [shouldShowTetraede, setShouldShowTetraede] = useState(false);
  
  // Ne monter que côté client
  useEffect(() => {
    setMounted(true);
    
    // Vérifier le pathname de manière sûre sans usePathname()
    try {
      const pathname = window.location.pathname;
      const isSpecialPage = pathname?.startsWith('/_') || !pathname;
      setShouldShowTetraede(!isSpecialPage);
    } catch (e) {
      // En cas d'erreur, on affiche le tétraèdre par défaut
      setShouldShowTetraede(true);
    }
  }, []);

  return (
    <>
      {mounted && shouldShowTetraede && <TetraedeWrapper />}
      {children}
    </>
  );
}
