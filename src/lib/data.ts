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
    options: ['A', 'B', 'C', 'D', 'E', 'F']
  },
  {
    id: 'capacity',
    label: 'Pojemność',
    defaultOption: 'Pokaż wszystkie',
    options: ['9kg', '8kg', '10.5kg']
  }
];

export const WashingMachinesData: WashingMachineData[] = [
  {
    keyId: 1,
    id: 'WW90T754ABT',
    label: 'QuickDrive™',
    color: 'biała',
    capacity: 9,
    depth: 55,
    width: 60,
    height: 85,
    functions: [
      'Drzwi AddWas',
      'Panel Ai Control',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny'
    ],
    energyClass: 'A',
    price: 3199
  },
  {
    keyId: 2,
    id: 'WW10T654DLH',
    label: 'EcoBubble™',
    color: 'biała',
    capacity: 10.5,
    depth: 55,
    width: 60,
    height: 85,
    functions: [
      'Drzwi AddWash',
      'Panel Ai Control',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny'
    ],
    energyClass: 'B',
    price: 3199
  },
  {
    keyId: 3,
    id: 'WW90T654DLH',
    label: 'EcoBubble™',
    color: 'biała',
    capacity: 9,
    depth: 55,
    width: 60,
    height: 85,
    functions: [
      'Drzwi AddWash',
      'Panel Ai Control',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny'
    ],
    energyClass: 'C',
    price: 3199
  },
  {
    keyId: 4,
    id: 'WW90T754ABT',
    label: 'QuickDrive™',
    color: 'biała',
    capacity: 9,
    depth: 55,
    width: 60,
    height: 85,
    functions: [
      'Drzwi AddWash',
      'Panel Ai Control',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny'
    ],
    energyClass: 'D',
    price: 3199
  },
  {
    keyId: 5,
    id: 'WW10T654DLH',
    label: 'EcoBubble™',
    color: 'biała',
    capacity: 10.5,
    depth: 55,
    width: 60,
    height: 85,
    functions: [
      'Drzwi AddWash',
      'Panel Ai Control',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny'
    ],
    energyClass: 'E',
    price: 3199
  },
  {
    keyId: 6,
    id: 'WW90T654DLH',
    label: 'EcoBubble™',
    color: 'biała',
    capacity: 8,
    depth: 55,
    width: 60,
    height: 85,
    functions: [
      'Drzwi AddWash',
      'Panel Ai Control',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny'
    ],
    energyClass: 'F',
    price: 3199
  }
];
