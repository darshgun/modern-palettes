import React, { useState } from 'react';
import { Card } from 'components';
import FavoriteIcon from 'icons/favorite-outline.svg';
import FavoriteFilledIcon from 'icons/favorite-filled.svg';
import DownloadIcon from 'icons/download.svg';
import styles from './PaletteCard.module.scss';

function PaletteCard({ colors, favorites, favoriteOnClick, downloadOnClick, name }) {
  const makePalette = () => {
    return (
      <div className={styles.palette}>
        {colors.map((color, index) => (
          <div key={index} style={{ backgroundColor: color }} className={styles.color}></div>
        ))}
      </div>
    );
  };

  const FavoriteButton = () => {
    const [favorite, setFavorite] = useState(false);

    if (favorite) {
      return <FavoriteFilledIcon />;
    }
    return <FavoriteIcon />;
  };

  return (
    <Card className={styles.card}>
      {name && <div className={styles.paletteName}>{name}</div>}
      <div className={styles.paletteWrap}>{makePalette()}</div>
      <div className={styles.actions}>
        <div className={styles.actionItem}>
          <FavoriteButton onClick={favoriteOnClick} />
          <span className={styles.count}>{favorites}</span>
        </div>
        <div className={styles.actionItem}>
          <DownloadIcon onClick={downloadOnClick} />
        </div>
      </div>
    </Card>
  );
}

PaletteCard.defaultProps = {
  favorites: 0,
};

export default PaletteCard;
