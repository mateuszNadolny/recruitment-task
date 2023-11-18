import { DropdownOption, WashingMachineData } from './types';

export const DropdownData: DropdownOption[] = [
  {
    id: 'sortBy',
    label: 'Sortuj po',
    defaultOption: 'Pokaż wszystkie',
    options: ['Popularność', 'Cena', 'Pojemność']
  },
  {
    id: 'functions',
    label: 'Funkcje',
    defaultOption: 'Pokaż wszystkie',
    options: [
      'Drzwi AddWash',
      'Panel Ai Control',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny'
    ]
  },
  {
    id: 'energyClass',
    label: 'Klasa energetyczna',
    defaultOption: 'Pokaż wszystkie',
    options: ['A', 'B', 'D']
  },
  {
    id: 'capacity',
    label: 'Pojemność',
    defaultOption: 'Pokaż wszystkie',
    options: ['9kg', '8kg', '10.5kg']
  }
];

const WashingMachinesData: WashingMachineData[] = [
  {
    id: 'WW90T754ABT0',
    label: 'Pralka QuickDrive™',
    color: 'biała',
    capacity: '9',
    deepth: '55',
    width: '60',
    height: '85',
    functions: [
      'Drzwi AddWash™',
      'Panel Ai Control',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny'
    ],
    energyClass: 'A',
    price: '3199'
  },
  {
    id: 'WW10T654DLH',
    label: 'Pralka EcoBubble™',
    color: 'biała',
    capacity: '10,5',
    deepth: '55',
    width: '60',
    height: '85',
    functions: [
      'Drzwi AddWash™',
      'Panel Ai Control',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny'
    ],
    energyClass: 'B',
    price: '3199'
  },
  {
    id: 'WW90T654DLH',
    label: 'Pralka EcoBubble™',
    color: 'biała',
    capacity: '9',
    deepth: '55',
    width: '60',
    height: '85',
    functions: [
      'Drzwi AddWash™',
      'Panel Ai Control',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny'
    ],
    energyClass: 'C',
    price: '3199'
  },
  {
    id: 'WW90T754ABT',
    label: 'Pralka QuickDrive™',
    color: 'biała',
    capacity: '9',
    deepth: '55',
    width: '60',
    height: '85',
    functions: [
      'Drzwi AddWash™',
      'Panel Ai Control',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny'
    ],
    energyClass: 'D',
    price: '3199'
  },
  {
    id: 'WW10T654DLH',
    label: 'Pralka EcoBubble™',
    color: 'biała',
    capacity: '10,5',
    deepth: '55',
    width: '60',
    height: '85',
    functions: [
      'Drzwi AddWash™',
      'Panel Ai Control',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny'
    ],
    energyClass: 'E',
    price: '3199'
  },
  {
    id: 'WW90T654DLH',
    label: 'Pralka EcoBubble™',
    color: 'biała',
    capacity: '8',
    deepth: '55',
    width: '60',
    height: '85',
    functions: [
      'Drzwi AddWash™',
      'Panel Ai Control',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny'
    ],
    energyClass: 'F',
    price: '3199'
  }
];
