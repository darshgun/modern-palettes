import React from 'react';
import { ClassNames } from 'utilities/ClassNames';
import styles from './Card.module.scss';

const namespace = 'card';

function Card({ children, className, onClick }) {
  const properties = { className: ClassNames(styles[namespace], className), onClick };

  return <div {...properties}>{children}</div>;
}

export default Card;
