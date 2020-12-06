import React from 'react';
import PropTypes from 'prop-types';
import { ClassNames } from 'utilities/ClassNames';

import styles from './Card.module.scss';

const namespace = 'card';

function Card({ children, className }) {
  const properties = {
    className: ClassNames(styles[namespace], className),
  };

  return <div {...properties}>{children}</div>;
}

Card.propTypes = {};

export default Card;
