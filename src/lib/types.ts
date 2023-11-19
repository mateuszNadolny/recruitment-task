export interface UseOutsideClickProps {
  ref: React.RefObject<HTMLElement>;
  callback: () => void;
}

export interface DropdownOption {
  id: string;
  label: string;
  defaultOption: string;
  options: string[];
}

export interface WashingMachineDataProps {
  keyId: number;
  id: string;
  label: string;
  color: string;
  capacity: number;
  depth: number;
  width: number;
  height: number;
  functions: string[];
  energyClass: string;
  price: number;
}

export interface ContextProviderProps {
  children: React.ReactNode;
}
export interface FilterContextValue {
  energyClassFilter: string;
  setEnergyClassFilter: React.Dispatch<React.SetStateAction<string>>;
  functionsFilter: string;
  setFunctionsFilter: React.Dispatch<React.SetStateAction<string>>;
  capacityFilter: number;
  setCapacityFilter: React.Dispatch<React.SetStateAction<number>>;
}

export interface SortContextValue {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

export interface SearchContextValue {
  searchBy: string;
  setSearchBy: React.Dispatch<React.SetStateAction<string>>;
}
