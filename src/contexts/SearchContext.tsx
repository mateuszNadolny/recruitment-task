import { createContext, useState } from 'react';

import { ContextProviderProps, SearchContextValue } from '../lib/types';

export const SearchContext = createContext<SearchContextValue>({
  searchBy: '',
  setSearchBy: () => {}
});

export const SearchProvider = ({ children }: ContextProviderProps) => {
  const [searchBy, setSearchBy] = useState<string>('');

  return (
    <SearchContext.Provider
      value={{
        searchBy,
        setSearchBy
      }}>
      {children}
    </SearchContext.Provider>
  );
};
