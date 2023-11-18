import { DropdownOption } from './types';

export const DropdownData: DropdownOption[] = [
  {
    id: 'sortBy',
    label: 'Sortuj po',
    defaultOption: 'Popularność',
    options: ['Cena', 'Pojemność']
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
    id: 'energeticClass',
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
