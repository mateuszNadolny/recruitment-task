import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.headerContent}>Wybierz urządzenie</h1>
      </div>
    </div>
  );
};

export default Header;
