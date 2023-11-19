import { createContext, useState } from 'react';

import { ContextProviderProps, FilterContextValue } from '../lib/types';

export const FilterContext = createContext<FilterContextValue>({
  energyClassFilter: '',
  setEnergyClassFilter: () => {},
  functionsFilter: '',
  setFunctionsFilter: () => {},
  capacityFilter: 0,
  setCapacityFilter: () => {}
});

export const FilterProvider = ({ children }: ContextProviderProps) => {
  const [energyClassFilter, setEnergyClassFilter] = useState<string>('');
  const [functionsFilter, setFunctionsFilter] = useState<string>('');
  const [capacityFilter, setCapacityFilter] = useState<number>(0);

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
