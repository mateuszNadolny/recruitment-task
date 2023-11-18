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
  capacity: string;
  deepth: string;
  width: string;
  height: string;
  functions: string[];
  energyClass: string;
  price: string;
}
