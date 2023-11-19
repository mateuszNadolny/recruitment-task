import { useState } from 'react';

import styles from './DropdownSection.module.css';

import Dropdown from './Dropdown';

import { DropdownData } from '../../lib/data';

import filterBtn from '../../images/filterBtn.svg';

const DropdownSection = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <>
      <button className={`${styles.dropdownButtonOpen}`} onClick={() => setIsVisible(true)}>
        <img className={styles.dropdownButtonImg} alt="Filter button" src={filterBtn} />
      </button>
      <div
        className={`${styles.dropdownSection} ${
          isVisible ? styles.dropdownSectionOpen : styles.dropdownSectionClosed
        }`}>
        {DropdownData.map((dropdown) => (
          <Dropdown
            key={dropdown.id}
            id={dropdown.id}
            label={dropdown.label}
            defaultOption={dropdown.defaultOption}
            options={dropdown.options}
          />
        ))}
        <button className={`${styles.dropdownButtonClose}`} onClick={() => setIsVisible(false)}>
          ZASTOSUJ
        </button>
      </div>
    </>
  );
};

export default DropdownSection;
