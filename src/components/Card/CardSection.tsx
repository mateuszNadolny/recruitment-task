import { useState, useEffect, useContext } from 'react';

import Card from './Card';

import { FilterContext } from '../../contexts/FilterContext';
import { SortContext } from '../../contexts/SortContext';

import { WashingMachinesData } from '../../lib/data';
import { WashingMachineDataProps } from '../../lib/types';

import styles from './CardSection.module.css';
import polygon from '../../images/polygon-2.svg';

const CardSection = () => {
  const { energyClassFilter, functionsFilter, capacityFilter } = useContext(FilterContext);
  const { sortBy } = useContext(SortContext);
  const [filteredMachines, setFilteredMachines] =
    useState<WashingMachineDataProps[]>(WashingMachinesData);
  const [sortedMachines, setSortedMachines] = useState<WashingMachineDataProps[]>(filteredMachines);

  useEffect(() => {
    const filterData = () => {
      return WashingMachinesData.filter((machine) => {
        const matchesEnergyClass =
          energyClassFilter === '' || machine.energyClass === energyClassFilter;
        const matchesFunctions =
          functionsFilter === '' || machine.functions.includes(functionsFilter);
        const matchesCapacity = capacityFilter === 0 || machine.capacity === capacityFilter;

        return matchesEnergyClass && matchesFunctions && matchesCapacity;
      });
    };

    setFilteredMachines(filterData());
  }, [energyClassFilter, functionsFilter, capacityFilter]);

  return (
    <div className={styles.cardSectionContainer}>
      <div className={styles.cardSectionWrapper}>
        <p
          className={
            styles.cardSectionAllResults
          }>{`Liczba wyników: ${filteredMachines.length}`}</p>
        <div className={styles.allCards}>
          {filteredMachines.map((machine) => (
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
