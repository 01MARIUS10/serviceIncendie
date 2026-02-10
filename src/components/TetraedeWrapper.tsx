'use client';

import Tetraede from './Tetraede';
import { useEffect, useState } from 'react';
import { getPageByUrl, PageData } from '@/lib/data';

export default function TetraedeWrapper() {
  const [page, setPage] = useState<PageData | null>(null);

  const [currentPath, setCurrentPath] = useState<string>('/');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Attendre d'être monté côté client
    setMounted(true);

    // Utiliser window.location au lieu de usePathname()
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      getPageByUrl(pathname).then((foundPage) => {
        if (foundPage && foundPage.id >= 0 && foundPage.id <= 4) {
          console.log('Page found:', foundPage.title, 'ID:', foundPage.id);
          setPage(foundPage);
        }
      });
      setCurrentPath(pathname);
    }
  }, []);

  // Ne rien afficher tant qu'on n'est pas côté client
  if (!mounted) {
    return null;
  }

  return <Tetraede page={page} />;
}
