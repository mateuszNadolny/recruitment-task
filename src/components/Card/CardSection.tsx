import { useState, useEffect, useContext } from 'react';

import styles from './CardSection.module.css';

import Card from './Card';

import { FilterContext } from '../../contexts/FilterContext';
import { SortContext } from '../../contexts/SortContext';
import { SearchContext } from '../../contexts/SearchContext';
import { WashingMachinesData } from '../../lib/data';
import { WashingMachineDataProps } from '../../lib/types';

import polygon from '../../images/polygon-2.svg';

const CardSection = () => {
  const { energyClassFilter, functionsFilter, capacityFilter } = useContext(FilterContext);
  const { sortBy } = useContext(SortContext);
  const { searchBy } = useContext(SearchContext);
  const [sortedMachines, setSortedMachines] =
    useState<WashingMachineDataProps[]>(WashingMachinesData);

  useEffect(() => {
    const filterData = WashingMachinesData.filter((machine) => {
      const matchesEnergyClass =
        energyClassFilter === '' || machine.energyClass === energyClassFilter;
      const matchesFunctions =
        functionsFilter === '' || machine.functions.includes(functionsFilter);
      const matchesCapacity = capacityFilter === 0 || machine.capacity === capacityFilter;
      const matchesSearch =
        searchBy === '' || machine.id.toLowerCase().includes(searchBy.toLowerCase());

      return matchesEnergyClass && matchesFunctions && matchesCapacity && matchesSearch;
    });

    const sortData = () => {
      if (sortBy === 'Cena') {
        return filterData.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'Pojemność') {
        return filterData.sort((a, b) => a.capacity - b.capacity);
      } else {
        return filterData;
      }
    };

    const sortedAndFiltered = sortData();
    setSortedMachines(sortedAndFiltered);
  }, [energyClassFilter, functionsFilter, capacityFilter, sortBy, searchBy]); // Add searchBy to the dependency array

  return (
    <div className={styles.cardSectionContainer}>
      <div className={styles.cardSectionWrapper}>
        <p className={styles.cardSectionAllResults}>{`Liczba wyników: ${sortedMachines.length}`}</p>
        <div className={styles.allCards}>
          {sortedMachines.map((machine) => (
            <Card key={machine.keyId} {...machine} />
          ))}
        </div>
        <div className={styles.showMoreBtnContainer}>
          <button className={styles.showMoreBtn}>
            Pokaż więcej <img className={styles.polygon} alt="Polygon" src={polygon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
