import { DropdownOption } from './types';

export const DropdownData: DropdownOption[] = [
  {
    id: 'sortBy',
    label: 'Sortuj po',
    default: 'Popularność',
    options: ['Wszystkie', 'Cena', 'Pojemność']
  },
  {
    id: 'functions',
    label: 'Funkcje',
    default: 'Pokaż wszystkie',
    options: [
      'Wszystkie',
      'Drzwi AddWash',
      'Panel Ai Control',
      'Silnik inwerterowy',
      'Wyświetlacz elektroniczny'
    ]
  },
  {
    id: 'energeticClass',
    label: 'Klasa energetyczna',
    default: 'Pokaż wszystkie',
    options: ['Wszystkie', 'A', 'B', 'D']
  },
  {
    id: 'capacity',
    label: 'Pojemność',
    default: 'Pokaż wszystkie',
    options: ['Wszystkie', '9kg', '8kg', '10.5kg']
  }
];
