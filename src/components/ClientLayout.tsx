'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

// Import dynamique du TetraedeWrapper côté client uniquement
const TetraedeWrapper = dynamic(() => import("@/components/TetraedeWrapper"), {
  ssr: false,
  loading: () => null,
});

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <TetraedeWrapper />
      {children}
    </>
  );
}
