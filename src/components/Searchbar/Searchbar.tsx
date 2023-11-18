import styles from './Searchbar.module.css';

const Searchbar = () => {
  return (
    <div className={styles.searchbarContainer}>
      <div className={styles.searchbarWrapper}>
        <input type="text" placeholder="Search..." className={styles.searchbarInput} />
      </div>
    </div>
  );
};

export default Searchbar;
