'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    ndp?: (...args: any[]) => void;
  }
}

export default function NextdoorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.ndp === 'function') {
      window.ndp('track', 'PAGE_VIEW');
    }
  }, [pathname]);

  return null;
}
