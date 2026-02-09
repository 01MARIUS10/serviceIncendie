'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Tetraede from './Tetraede';
import { getPageByUrl, PageData } from '@/lib/data';

export default function TetraedeWrapper() {
  const pathname = usePathname();
  const [page, setPage] = useState<PageData | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  useEffect(() => {
    if (!mounted || !pathname) return;
    
    console.log('Current pathname:', pathname);

    // Récupérer la page correspondant à l'URL
    getPageByUrl(pathname).then((foundPage) => {
      if (foundPage) {
        // Initialiser avec la face correspondante (id - 1 car faces 0-3)
        if (foundPage.id >= 0 && foundPage.id <= 4) {
          console.log('Page found:', foundPage.title, 'ID:', foundPage.id);
          setPage(foundPage);
        }
      }
    });
  }, [pathname, mounted]);

  // Ne pas rendre pendant le SSR
  if (!mounted) {
    return null;
  }

  return <Tetraede page={page} />;
}
