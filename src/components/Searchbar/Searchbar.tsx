import { useContext, ChangeEvent } from 'react';

import styles from './Searchbar.module.css';

import { SearchContext } from '../../contexts/SearchContext';

const Searchbar = () => {
  const { setSearchBy } = useContext(SearchContext);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchBy(e.target.value);
  };

  return (
    <div className={styles.searchbarContainer}>
      <div className={styles.searchbarWrapper}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchbarInput}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Searchbar;
