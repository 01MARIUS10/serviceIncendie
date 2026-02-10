'use client';

import Tetraede from './Tetraede';
import { useEffect, useState } from 'react';
import { getPageByUrl, PageData } from '@/lib/data';

export default function TetraedeWrapper() {
  const [page, setPage] = useState<PageData | null>(null);
  const [pathname, setPathname] = useState<string | null>(null);


   useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname);
    }
    // ✅ Lecture sûre du pathname, sans usePathname()
  }, []);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      getPageByUrl(pathname).then((foundPage) => {
        if (foundPage && foundPage.id >= 0 && foundPage.id <= 4) {
          console.log('Page found:', foundPage.title, 'ID:', foundPage.id);
          setPage(foundPage);
        }
      });
    }
  }, [pathname]);

  // Ne rien afficher tant qu'on n'est pas côté client
  if (!pathname) {
    return null;
  }

  return <Tetraede page={page} />;
}
