import { createContext, useState } from 'react';

import { ContextProviderProps, SortContextValue } from '../lib/types';

export const SortContext = createContext<SortContextValue>({
  sortBy: '',
  setSortBy: () => {}
});

export const SortProvider = ({ children }: ContextProviderProps) => {
  const [sortBy, setSortBy] = useState<string>('');

  return (
    <SortContext.Provider
      value={{
        sortBy,
        setSortBy
      }}>
      {children}
    </SortContext.Provider>
  );
};
