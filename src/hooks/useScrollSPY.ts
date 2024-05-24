import { useEffect, useState } from 'react';
import useIsClient from './useIsClient';

/**
 * Restrict value to be between the range [0, value]
 */
const clamp = (value: number) => {
  return Math.max(0, value);
};

/**
 * Check if number is between two values
 */
const isBetween = (value: number, floor: number, ceil: number) => {
  return value >= floor && value <= ceil;
};

/**
 * Hook to check scroll position for section id.
 * @param ids The ids of sections.
 * @param offset The offset scroll position.
 * @returns The active id of section.
 */
const useScrollSPY = (ids: string[], offset = 0) => {
  const [activeId, setActiveId] = useState('');
  const isClient = useIsClient();

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const listener = () => {
      const scroll = window.scrollY;

      if (document.documentElement.classList.contains('lock-scroll-y')) {
        return;
      }

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) {
            return { id, top: -1, bottom: -1 };
          }

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => {
          return isBetween(scroll, top, bottom);
        });

      setActiveId(position?.id || '');
    };

    listener();

    window.addEventListener('resize', listener);
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('resize', listener);
      window.removeEventListener('scroll', listener);
    };
  }, [isClient, ids, offset]);

  return activeId;
};

export default useScrollSPY;
