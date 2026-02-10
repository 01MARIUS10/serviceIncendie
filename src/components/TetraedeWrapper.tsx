'use client';

import Tetraede from './Tetraede';
import { useEffect, useState } from 'react';

export default function TetraedeWrapper() {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Attendre d'être monté côté client
    setMounted(true);
    
    // Utiliser window.location au lieu de usePathname()
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  // Ne rien afficher tant qu'on n'est pas côté client
  if (!mounted) {
    return null;
  }

  return <Tetraede currentPath={currentPath} />;
}
