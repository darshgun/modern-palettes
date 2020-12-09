import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { default as ColorPicker } from './CustomChromePicker';
import styles from './ColorPicker.module.scss';

function Picker({ open, onOverlayClick, ...props }) {
  const [body, setBody] = useState();

  useEffect(() => {
    if (document) {
      setBody(document.body);
    }
  }, []);

  const handleOverlayClick = () => {
    console.log('Overlay clicked');
    onOverlayClick();
  };

  if (body && open) {
    return createPortal(
      <div className={styles.portal}>
        <div className={styles.ColorPicker}>
          <ColorPicker {...props} />
        </div>
        <div className={styles.overlay} onClick={handleOverlayClick}></div>
      </div>,
      body
    );
  }
  return null;
}

Picker.defaultProps = {
  onOverlayClick: () => {},
};

export default Picker;
