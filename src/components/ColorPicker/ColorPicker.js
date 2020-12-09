import React, { useState, useEffect } from 'react';
import { default as ColorPicker } from './CustomChromePicker';
import styles from './ColorPicker.module.scss';

function Picker(props) {
  return (
    <div className={styles.colorPicker}>
      <ColorPicker {...props} />
    </div>
  );
}

Picker.defaultProps = {};

export default Picker;
