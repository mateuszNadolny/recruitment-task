import { useState, useRef, useContext } from 'react';

import { DropdownOption } from '../../lib/types';
import { useOutsideClick } from '../../hooks/useOutsideClick';

import { FilterContext } from '../../contexts/FilterContext';

import styles from './Dropdown.module.css';

import polygon from '../../images/polygon.svg';

const Dropdown = ({ id, label, defaultOption, options }: DropdownOption) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { setEnergyClassFilter } = useContext(FilterContext);
  const { setFunctionsFilter } = useContext(FilterContext);
  const { setCapacityFilter } = useContext(FilterContext);

  const handleFilterContextChange = (option: string) => {
    setSelectedFilter(option);
    setIsOpen(false);

    if (id === 'energyClass') {
      setEnergyClassFilter(option);
    } else if (id === 'functions') {
      setFunctionsFilter(option.split(','));
    } else if (id === 'capacity') {
      setCapacityFilter(option);
    }
  };

  useOutsideClick({ ref: dropdownRef, callback: () => setIsOpen(false) });

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <p className={styles.dropdownLabel}>{`${label}:`}</p>
      <div className={styles.dropdownDefaultOption} onClick={() => setIsOpen(!isOpen)}>
        <p className={styles.dropdownDefaultOptionText}>
          {selectedFilter.length > 0 ? selectedFilter : defaultOption}
        </p>
        <div>
          <img className={styles.dropdownDefaultOptionPolygon} alt="Dropdown arrow" src={polygon} />
        </div>
      </div>
      {isOpen && (
        <div className={styles.dropdownOptionsWrapper}>
          <p
            className={styles.dropdownAll}
            onClick={() => {
              handleFilterContextChange('');
            }}>
            Wszystkie
          </p>
          {options.map((option) => (
            <p
              className={styles.dropdownOption}
              style={selectedFilter === option ? { backgroundColor: '#f3f3f3' } : undefined}
              key={option}
              onClick={() => {
                handleFilterContextChange(option);
              }}>
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
