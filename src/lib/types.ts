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
