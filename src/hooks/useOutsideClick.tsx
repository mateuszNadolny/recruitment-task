import { useEffect } from 'react';

import { UseOutsideClickProps } from '../lib/types';

export const useOutsideClick = ({ ref, callback }: UseOutsideClickProps): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};
