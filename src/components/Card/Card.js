import React from 'react';
import { ClassNames } from 'utilities/ClassNames';
import styles from './Card.module.scss';

const namespace = 'card';

function Card({ children, className, ...props }) {
  const classNames = ClassNames(styles[namespace], className);

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}

export default Card;
