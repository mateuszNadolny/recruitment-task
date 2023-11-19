import React, { createContext, useState } from 'react';

import { FilterProviderProps, FilterContextValue } from '../lib/types';

export const FilterContext = createContext<FilterContextValue>({
  energyClassFilter: '',
  setEnergyClassFilter: () => {},
  functionsFilter: [],
  setFunctionsFilter: () => {},
  capacityFilter: '',
  setCapacityFilter: () => {}
});

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [energyClassFilter, setEnergyClassFilter] = useState<string>('');
  const [functionsFilter, setFunctionsFilter] = useState<string[]>([]);
  const [capacityFilter, setCapacityFilter] = useState<string>('');

  return (
    <FilterContext.Provider
      value={{
        energyClassFilter,
        setEnergyClassFilter,
        functionsFilter,
        setFunctionsFilter,
        capacityFilter,
        setCapacityFilter
      }}>
      {children}
    </FilterContext.Provider>
  );
};
