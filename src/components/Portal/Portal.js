import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Portal.module.scss';

function Portal({ children, className, ...props }) {
  const [body, setBody] = useState();

  useEffect(() => {
    if (document) {
      setBody(document.body);
    }
  }, []);

  if (body) {
    return createPortal(
      <div className={styles.portal} {...props}>
        {children}
      </div>,
      body
    );
  }
  return null;
}

export default Portal;
