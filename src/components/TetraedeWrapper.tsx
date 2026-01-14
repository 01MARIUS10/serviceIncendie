'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Tetraede from './Tetraede';
import { getPageByUrl, PageData } from '@/lib/data';

export default function TetraedeWrapper() {
  const pathname = usePathname();
  const [page, setPage] = useState<PageData | null>(null);
  
  useEffect(() => {
    console.log('Current pathname:', pathname);

    // Récupérer la page correspondant à l'URL
    getPageByUrl(pathname).then((page) => {
      if (page) {
        // Initialiser avec la face correspondante (id - 1 car faces 0-3)
        if (page.id >= 0 && page.id <= 4) {
          console.log('Page found:', page.title, 'ID:', page.id);
          setPage(page);
        }
      }
    });
  }, [pathname]);

  return <Tetraede page={page} />;
}
