export interface UseOutsideClick {
  ref: React.RefObject<HTMLElement>;
  callback: () => void;
}

export interface DropdownOption {
  id: string;
  label: string;
  defaultOption: string;
  options: string[];
}

export interface WashingMachineData {
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
