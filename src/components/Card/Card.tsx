import { useState } from 'react';

import { WashingMachineData } from '../../lib/types';

import vector from '../../images/energy-class-vector.svg';

import styles from './Card.module.css';
const Card = ({ ...props }: WashingMachineData) => {
  const [isChosen, setIsChosen] = useState(false);
  const formatCapacity = (capacity: number) => {
    return capacity.toString().replace('.', ',');
  };

  const formatPrice = (price: number) => {
    const str = price.toString();
    if (str.length <= 1) {
      return str;
    }
    return str[0] + ' ' + str.slice(1);
  };

  const checkPriceDecimals = (price: number) => {
    if (price % 1 !== 0) {
      const decimalPart = price.toString().split('.')[1];
      return decimalPart;
    } else {
      return '00';
    }
  };

  const image = require(`../../images/${props.id}.png`);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardWrapper}>
        <div className={styles.imgContainer}>
          <img className={styles.image} alt={props.id} src={image} />
        </div>
        <div className={styles.titleContainer}>
          {`${props.id}, Pralka`}
          <br /> {`${props.label}, ${formatCapacity(props.capacity)} kg, ${props.color}`}
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionLabel}>
            {`Pojemność (kg): `}
            <span className={styles.descriptionSpan}>{props.capacity}</span>
          </p>
          <p className={styles.descriptionLabel}>
            {`Wymiary (GxSxW): `}
            <span
              className={
                styles.descriptionSpan
              }>{`${props.width} x ${props.height} x ${props.depth} cm`}</span>
          </p>
          <p className={styles.descriptionLabel}>
            {`Funkcje: `}
            <span className={styles.descriptionSpan}>{`${props.functions.join(', ')}`}</span>
          </p>
        </div>
        <div className={styles.energyClassContainer}>
          <p className={styles.descriptionLabel}>Klasa energetyczna</p>
          <div className={styles.energyClassArrowBox}>
            <img alt="arrow" src={vector} className={styles.energyClassArrow} />
            <p className={styles.energyClassParagraph}>{props.energyClass}</p>
          </div>
        </div>
        <div className={styles.priceContainer}>
          <p className={styles.descriptionLabel}>{`Cena obowiązuje: 15.09.2022 - 21.09.2022`}</p>
          <div className={styles.priceWrapper}>
            <p className={styles.price}>{formatPrice(props.price)}</p>

            <div className={styles.priceDecimalsWrapper}>
              <p className={styles.priceDecimals}>{checkPriceDecimals(props.price)}</p>
              <p className={styles.priceDecimals}>zł</p>
            </div>
          </div>
        </div>
        {(props.energyClass === 'A' || props.energyClass === 'B' || props.energyClass === 'C') && (
          <p className={styles.instalmentInfo}>{`53,31 zł x 60 rat`}</p>
        )}
      </div>
      <div className={styles.choiceBtnContainer}>
        <button
          className={`${styles.choiceBtn} ${isChosen ? styles.btnChosen : ''}`}
          onClick={() => setIsChosen(!isChosen)}>
          {isChosen ? 'Wybrane' : 'Wybierz'}
        </button>
      </div>
    </div>
  );
};

export default Card;
