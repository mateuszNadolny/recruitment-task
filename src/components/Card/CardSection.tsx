import Card from './Card';

import { WashingMachinesData } from '../../lib/data';

import styles from './CardSection.module.css';
import polygon from '../../images/polygon-2.svg';

const CardSection = () => {
  return (
    <div className={styles.cardSectionContainer}>
      <div className={styles.cardSectionWrapper}>
        <p className={styles.cardSectionAllResults}>Liczba wyników: 23</p>
        <div className={styles.allCards}>
          {WashingMachinesData.map((machine) => (
            <Card key={machine.id} {...machine} />
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
