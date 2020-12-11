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
}) => {
  return (
    <div>
      <Card className={`chrome-picker ${className} ${styles.card}`}>
        <div className={styles.saturation}>
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

      <Card className={styles.card}>
        <div className={`flexbox-fix ${styles.controls}`}>
          <div className={styles.toggles}>
            <div className={styles.hue}>
              <Hue
                className={styles.Hue}
                hsl={hsl}
                pointer={HuePointer}
                onChange={onChange}
                onChangeComplete={onChangeComplete}
              />
            </div>
          </div>
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
