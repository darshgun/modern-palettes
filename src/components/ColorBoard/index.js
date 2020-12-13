import React from 'react';
import PropTypes from 'prop-types';
import { ColorWrap, Saturation, Hue, Alpha } from 'react-color/lib/components/common';
import { Card } from 'components';
import styles from './ColorBoard.module.scss';

const HuePointer = () => <div className={styles.huePointer} />;
const CirclePointer = () => <div className={styles.circlePointer} />;

export const ColorBoard = ({
  width,
  onChange,
  rgb,
  hsl,
  hsv,
  hex,
  renderers,
  styles: passedStyles = {},
  className = '',
  defaultView,
  onChangeComplete,
  elementClassName,
}) => {
  return (
    <div className={styles.wrapper}>
      <Card className={`${styles.hueCard} ${styles.card}`}>
        <div className={`${styles.hue} ${elementClassName}`}>
          <Hue
            direction="vertical"
            className={styles.Hue}
            hsl={hsl}
            pointer={HuePointer}
            onChange={onChange}
            onChangeComplete={onChangeComplete}
          />
        </div>
      </Card>
      <Card className={`${className} ${styles.card}`}>
        <div className={`${styles.saturation} ${elementClassName}`}>
          <Saturation
            style={styles.Saturation}
            hsl={hsl}
            hsv={hsv}
            pointer={CirclePointer}
            onChange={onChange}
            onChangeComplete={onChangeComplete}
          />
        </div>
      </Card>
    </div>
  );
};

ColorBoard.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  styles: PropTypes.object,
  defaultView: PropTypes.oneOf(['hex', 'rgb', 'hsl']),
};

ColorBoard.defaultProps = {};

export default ColorWrap(ColorBoard);
