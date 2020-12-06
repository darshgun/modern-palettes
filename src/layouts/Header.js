import React from 'react';
import PropTypes from 'prop-types';
import { Topnav } from 'components';
import styles from 'styles/layouts/header.module.scss';

function Header(props) {
  return (
    <div className={styles.header}>
      <Topnav></Topnav>
    </div>
  );
}

Header.propTypes = {};

export default Header;
