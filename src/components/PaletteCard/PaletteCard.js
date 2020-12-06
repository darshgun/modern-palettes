import React from 'react';
import styles from './PaletteCard.module.scss';

function PaletteCard({ colors }) {
  const makePalette = () => {
    return (
      <div className={styles.palette}>
        {colors.map((color, index) => (
          <div key={index} style={{ backgroundColor: color }} className={styles.color}></div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.card}>
      <div className={styles.paletteWrap}>{makePalette()}</div>
    </div>
  );
}

export default PaletteCard;
